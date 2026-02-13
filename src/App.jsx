import './App.css'
import Map from './components/Map'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Our Story</h1>
        <nav>
          {/* Add navigation here eventually*/}
        </nav>
      </header>
      
      <main className="app-main">
        <div className="map-section">
          <Map />
        </div>
        <div className="timeline-section">
          <Timeline />
        </div>
      </main>
    </div>
  )
}

export default App
