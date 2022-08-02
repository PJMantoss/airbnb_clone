import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {Data.map((data, id) => (
        <Card 
          img 
          rating 
          reviewCount 
          location
          title
          price
        />
      ))}
    </div>
  );
}

export default App;