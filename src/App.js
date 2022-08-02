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
      <Card 
        img 
        rating 
        reviewCount 
      />
    </div>
  );
}

export default App;