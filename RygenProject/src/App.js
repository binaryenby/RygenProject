import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import MovieTable from './components/MovieTable'
import SearchBar from './components/SearchBar'
import {Container, Row, Col } from 'react-bootstrap'

function App(props) {

  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([
    {
      "Response": true,
      "Title": "Crazy, Stupid, Love.",
        "Year": "2011",
        "imdbID": "tt1570728",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
    }
  ]);
  const [defaultSearchString] = useState("test")
  const [searchString, setSearchString] = useState("");
  const [apiSource] = useState("https://www.omdbapi.com/?");
  const [apiKey] = useState("apikey=ea429d89");
  const [movieNotFound] = useState("https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg");

  useEffect(() => {
    searchForFilm({searchQuery: defaultSearchString})
  }, []);

  const searchForFilm = props => {
    setLoading(true);
    let formattedSearch = props.searchQuery.replace(/ /g, '+');
    fetch(apiSource + "s=" + formattedSearch + "&" + apiKey)
      .then(response => response.json())
      .then(response => {
        if(typeof(response.Search) === 'undefined' || response.Search =='null') {
        setMovieData([{Title: "Not found",
                        Year: "N/A",
                        imdbID: "NA",
                        Type: "N/A",
                        Poster: movieNotFound}]);
      }
      else {
        setMovieData(response.Search)}
      });
      setLoading(false);

      
  };

  const handleSearchFormChange = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    setSearchString(inputValue);

    if(inputValue.length < 3) {
      return;
    }
    
    searchForFilm({searchQuery: inputValue})
  }

    return (
      <Container fluid>
        <Row>
          <Col>
          <h1 className="title-text">Rygen Project</h1>
          </Col>
        </Row>
        <Row>
          <SearchBar searchString={searchString} 
            handleChange={handleSearchFormChange} />
        </Row>
        <hr />
        <Row>
          <MovieTable movies={movieData} />
        </Row>
      </Container>
    );
}

export default App;
