
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Blog from './components/my-blog/Blog';
import Pokemon from './components/pokemon/Pokemon';

function App(){
  return (
    <div className='App'>
        <Router>
          <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/blog' element= {<Blog/>}/>
              <Route path='/pokemon' element= {<Pokemon/>}/>
          </Routes>
        </Router>
    </div>
  )
}

function Home() {
  return (
    <div className="App">
        <h2> React Mini Projects</h2>
        <div className='title-underline'></div>
        <div className='components-container'>
          <Link to='/blog'>
            <div className='component'>
              <div className='component-body'></div>
              <footer className='component-footer'>My Blog</footer>
            </div>
          </Link>

          <Link to='/pokemon'>
            <div className='component'>
              <div className='component-body'></div>
              <footer className='component-footer'>Pokemon</footer>
            </div>
          </Link>
        </div>
        
     
    </div>
  );
}

export default App;
