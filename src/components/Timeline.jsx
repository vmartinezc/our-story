import './Timeline.css';

function Timeline() {
  // Sample timeline events
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
          <div key={event.id} className="timeline-event">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
