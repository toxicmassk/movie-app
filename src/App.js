import { useEffect } from "react"; 
import './App.css';
import SearchIcon from './search.svg';

// 116b5210

const API_URL = 'http://www.omdbapi.com?apikey=116b5210';

function App() {

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

useEffect(()=> {
  searchMovies('Spiderman');

},[]);

  return (
    <div className="App">
   <h1>MovieEngine</h1>

   <div className="search">
    <input
    placeholder="Search for movies"
    value='Superman'
    onChange={()=> {}}
    />
   </div>
    </div>
  );
}

export default App;


