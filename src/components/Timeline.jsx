import './Timeline.css';
import { useState } from 'react';
import { Card } from "@chakra-ui/react"
import { Slider } from "@chakra-ui/react"
import useTimeLineEvents from '../hooks/useTimelineEvents';


function Timeline() {
  const { 
    sortedEvents, 
    personAEvents, 
    personBEvents, 
    sharedEvents,
    sliderValue, 
    setSliderValue, 
    borderColors 
  } = useTimeLineEvents();

  // Choose a color per event, keep shared events the shared color
  const individualColors = borderColors.filter((_, i) => i !== 2);
  const getEventColor = (event) => {
    if (event.person === 'both') return borderColors[2];
    const globalIndex = sortedEvents.findIndex(e => e.id === event.id);
    if (globalIndex === -1) return individualColors[0];
    return individualColors[globalIndex % individualColors.length];
  };

  return (
    <div className="timeline-container">
      <div className="timeline-slider-wrapper">
        <Slider.Root 
          min={0} 
          max={sortedEvents.length - 1} 
          value={[sliderValue]}
          onValueChange={(e) => setSliderValue(e.value[0])}
          colorPalette="teal"
          width="90%"
          margin="0 auto"
        >
          <Slider.Label className="slider-label">Timeline Navigation</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0} />
          </Slider.Control>
          <Slider.MarkerGroup>
            {(() => {
              const yearMarkers = sortedEvents.reduce((acc, event, idx) => {
                if (!acc.seen.has(event.year)) {
                  acc.seen.add(event.year);
                  acc.items.push({ year: event.year, index: idx });
                }
                return acc;
              }, { seen: new Set(), items: [] }).items;

              return yearMarkers.map((m) => (
                <Slider.Marker key={`${m.year}-${m.index}`} value={m.index}>
                  {m.year}
                </Slider.Marker>
              ));
            })()}
          </Slider.MarkerGroup>
        </Slider.Root>
      </div>
      
      {/* Two parallel timelines */}
      <div className="dual-timeline-container">
        {/* Person A Timeline */}
        {personAEvents.length > 0 && sharedEvents.length === 0 && (
          <div className="timeline-row timeline-person-a">
            <div className="timeline-label">Valeria</div>
            <div className="timeline-scroll">
              {personAEvents.map((event, index) => (
                <Card.Root 
                  key={event.id} 
                  className="timeline-card"
                  style={{ 
                    color: getEventColor(event)
                  }}
                >
                  <Card.Header className="timeline-year">{event.year}</Card.Header>
                  <Card.Body className="timeline-card-body">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </Card.Body>
                </Card.Root>
              ))}
            </div>
          </div>
        )}
        
        {sharedEvents.length > 0 && (
          <div className="timeline-row timeline-shared">
            <div className="timeline-label">Together</div>
            <div className="timeline-scroll">
              {sharedEvents.map((event, index) => (
                <Card.Root 
                  key={event.id} 
                  className="timeline-card timeline-card-shared"
                  style={{ 
                    color: getEventColor(event)
                  }}
                >
                  <Card.Header className="timeline-year">{event.year}</Card.Header>
                  <Card.Body className="timeline-card-body">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </Card.Body>
                </Card.Root>
              ))}
            </div>
          </div>
        )}
        
        {/* Person B Timeline */}
        {personBEvents.length > 0 && sharedEvents.length === 0 && (
          <div className="timeline-row timeline-person-b">
            <div className="timeline-label">Anthony</div>
            <div className="timeline-scroll">
              {personBEvents.map((event, index) => (
                <Card.Root 
                  key={event.id} 
                  className="timeline-card"
                  style={{ 
                    color: getEventColor(event)
                  }}
                >
                  <Card.Header className="timeline-year">{event.year}</Card.Header>
                  <Card.Body className="timeline-card-body">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </Card.Body>
                </Card.Root>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
