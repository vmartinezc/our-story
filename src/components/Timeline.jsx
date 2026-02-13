import './Timeline.css';
import { useState } from 'react';
import { Card } from "@chakra-ui/react"
import { Slider } from "@chakra-ui/react"
import { FaHeart, FaStar, FaCamera, FaPlane, FaMusic, FaGift } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import { BsSunFill } from 'react-icons/bs'

function Timeline() {
  const [sliderValue, setSliderValue] = useState(0);
  const borderColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#F7DC6F'];
  const washiTapeColors = ['#FFB6C1', '#98D8C8', '#F7DC6F', '#BB8FCE'];
  
  const events = [
    { 
      id: 1, 
      year: '1998', 
      title: 'First Meeting', 
      description: 'Vale',
      stickers: [
        { Icon: FaHeart, color: '#FF6B9D', position: 'top-right' },
        { Icon: IoSparkles, color: '#FFD700', position: 'bottom-left' }
      ]
    },
    { 
      id: 2, 
      year: '1997', 
      title: 'First Trip', 
      description: 'Toño',
      stickers: [
        { Icon: FaPlane, color: '#4ECDC4', position: 'top-left' },
        { Icon: FaCamera, color: '#95E1D3', position: 'bottom-right' }
      ]
    },
    { 
      id: 3, 
      year: '2022', 
      title: 'Special Moment', 
      description: 'A memorable day',
      stickers: [
        { Icon: BsSunFill, color: '#F38181', position: 'top-right' },
        { Icon: FaStar, color: '#F7DC6F', position: 'bottom-left' }
      ]
    },
    { 
      id: 4, 
      year: '2023', 
      title: 'New Chapter', 
      description: 'Moving forward together',
      stickers: [
        { Icon: FaGift, color: '#BB8FCE', position: 'top-left' },
        { Icon: FaMusic, color: '#85C1E2', position: 'bottom-right' }
      ]
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-slider-wrapper">
        <Slider.Root 
          min={0} 
          max={events.length - 1} 
          value={[sliderValue]}
          onValueChange={(e) => setSliderValue(e.value[0])}
          colorPalette="teal"
          width="80%"
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
            {events.map((event, index) => (
              <Slider.Marker key={event.id} value={index}>
                {event.year}
              </Slider.Marker>
            ))}
          </Slider.MarkerGroup>
        </Slider.Root>
      </div>
      <div className="timeline-scroll">
        {events.map((event, index) => (
            <Card.Root 
              key={event.id} 
              className="timeline-card"
              style={{ 
                borderColor: borderColors[index % borderColors.length]
                // ,
                // '--washi-color': washiTapeColors[index % washiTapeColors.length]
              }}
            >
              {/* {event.stickers && event.stickers.map((sticker, stickerIndex) => (
                <sticker.Icon 
                  key={stickerIndex}
                  className={`sticker sticker-${sticker.position}`}
                  style={{ color: sticker.color }}
                />
              ))} */}
              <Card.Header className="timeline-year">{event.year}</Card.Header>
              <Card.Body>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </Card.Body>
            </Card.Root>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
