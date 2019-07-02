import React from 'react';
import './App.css';
import SearchBar from './search-bar'
import CharacterList from './character-list';
import Details from './details';
import CharacterDefaultItem from './character-list-item';
import md5 from 'md5';
import CharacterListItem from './character-list-item';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = '5054a2134e04c6cf53dc55d9abf48218';
const privateKey = '3ffc295f3bd481316c05152875c7de47cfc0f13a';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`; //MARVEL API İÇİN GEREKLİ ŞEYLER


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      character:''
    }
  }

  componentDidMount = () => {
    this.getJSON();
  }

  getJSON(){
    let url = API_URL+'/characters?'+auth+'&limit=10';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let characterler = json.data.results;
      this.setState({
        character:characterler,
      })
    })
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <CharacterList character={this.state.character}/>
        <Details/>
        <CharacterListItem character={this.state.character}/>
      </div>
    );
  }
}

export default App;