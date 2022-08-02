import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cardList'>
        {Data.map(data => (
          <Card 
            key={data.id}
            data={data}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;