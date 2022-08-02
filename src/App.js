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
      {Data.map(data => (
        <Card 
          key={data.id}
          img={data.coverImg}
          rating={data.stats.rating} 
          reviewCount={data.stats.reviewCount}
          location={data.location}
          title={data.title}
          price={data.price}
        />
      ))}
    </div>
  );
}

export default App;