import './Timeline.css';
import { Card } from "@chakra-ui/react"

function Timeline() {
  const events = [
    { id: 1, year: '1998', title: 'First Meeting', description: 'Vale' },
    { id: 2, year: '1997', title: 'First Trip', description: 'Toño' },
    { id: 3, year: '2022', title: 'Special Moment', description: 'A memorable day' },
    { id: 4, year: '2023', title: 'New Chapter', description: 'Moving forward together' },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-scroll">
        {events.map((event) => (
            <Card.Root key={event.id} className="timeline-card">
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
