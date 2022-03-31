
import './App.css';
// import StarRating from './components/StarRating';
// import Slider from './components/Slider/Slider';
// import CounterReducer from './components/Counter-UseReduce/CountReducer';
import Calculator from './components/calculator/Calculator';

function App() {

  return (
    <div className="App">
      {/* <div style={{width: '100%'}}> <Slider/></div> */}
      {/* <div style={{width: '100%'}}>
         {
        stars.map((star, i) => (
          <StarRating key={star} 
          rating={hover || rating} 
          id={star} 
          onClick={() => setRating(star)} 
          onMouseEnter = {() => setHover(star)} 
          onMouseLeave={() => setHover(0)}
          />
        ))
      }
      </div> */}

      {/* <CounterReducer/> */}

      <Calculator/>
     
    </div>
  );
}

export default App;
