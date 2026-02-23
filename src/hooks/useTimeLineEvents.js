import { useState, useContext } from 'react';
import TimelineContext from '../contexts/TimelineContext';

function useTimeLineEvents() {
  // If a TimelineContext provider is present, use it so multiple components share state
  const ctx = useContext(TimelineContext);
  if (ctx) return ctx;

  const [sliderValue, setSliderValue] = useState(0);
  const borderColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#F7DC6F'];
  const washiTapeColors = ['#FFB6C1', '#98D8C8', '#F7DC6F', '#BB8FCE'];

  // Past MVP: Add this to JSON file, then import it and use it here, past that firebase implementation?
  const events = [
    {
      id: 1,
      year: '1997',
      title: 'Anthony is Born',
      description: 'Anthony is born in Dearborn Michigan, USA',
      person: 'b',
      coordinates: [42.3222599, -83.1763145]
    },
    {
      id: 2,
      year: '1998',
      title: 'Valeria is Born',
      description: 'Valeria is born in Tegucigalpa, Honduras.',
      person: 'a',
      coordinates: [14.0607, -87.1825]
    },
    {
      id: 3,
      year: '1997',
      title: 'Big Move!',
      description: 'Anthony\'s family moves to Rockford, MI, USA.',
      person: 'b',
      coordinates: [43.1200, -85.5600]
    },
    {
      id: 6, // Adding this event in b/w to test sorting and slider functionality
      year: '2016',
      title: 'Valeria\'s Big Move!',
      description: 'Valeria moves to the United States to attend college at Calvin University.',
      person: 'a',
      coordinates: [42.963, -85.668]
    },
    {
      id: 4,
      year: '2019',
      title: 'Anthony and Valeria Meet',
      description: 'Anthony and Valeria meet for the first time at Steelcase during their internship',
      person: 'both',
      coordinates: [42.963, -85.668]
    },
    {
      id: 5,
      year: '2019',
      title: 'Anthony and Valeria Start Dating',
      description: 'Valeria and Anthony show up to the intern happy hour. This is the first time Valeria joins, and no one else but Anthony is there -lol!. They start talking and hit it off, eventually leading to their first date.',
      person: 'both',
      coordinates: [42.963, -85.668]
    },
    {
      id: 7,
      year: '2023',
      title: 'New Chapter',
      description: 'Moving forward together',
      person: 'both'
    },
  ];

  const sortedEvents = events.sort((a, b) => a.year - b.year);
  const sortedEventsNumeric = [...sortedEvents].sort((a, b) => Number(a.year) - Number(b.year));

  const selectedYear = sortedEventsNumeric[sliderValue]?.year;
  const filteredEvents = events.filter(event => event.year === selectedYear);

  // Build a mapping from year -> array of events for that year (preserves original event objects)
  const eventsByYear = sortedEventsNumeric.reduce((acc, ev) => {
    const y = String(ev.year);
    if (!acc[y]) acc[y] = [];
    acc[y].push(ev);
    return acc;
  }, {});

  // Coordinates for the currently selected year on the slider
  const selectedYearCoordinates = (eventsByYear[selectedYear] || [])
    .filter(e => Array.isArray(e.coordinates))
    .map(e => ({ id: e.id, coordinates: e.coordinates, title: e.title, description: e.description }));

  const personAEvents = filteredEvents.filter(e => e.person === 'a' || e.person === 'both');
  const personBEvents = filteredEvents.filter(e => e.person === 'b' || e.person === 'both');
  const sharedEvents = filteredEvents.filter(e => e.person === 'both');

  return {
    sortedEvents,
    filteredEvents,
    personAEvents,
    personBEvents,
    sharedEvents,
    eventsByYear,
    selectedYearCoordinates,
    sliderValue,
    setSliderValue,
    borderColors,
    washiTapeColors
  };
}

export default useTimeLineEvents;