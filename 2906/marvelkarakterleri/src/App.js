import React from 'react';
import './App.css';
import SearchBar from './search-bar'
import CharacterList from './character-list';
import Details from './details';
import md5 from 'md5';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = '5054a2134e04c6cf53dc55d9abf48218';
const privateKey = '3ffc295f3bd481316c05152875c7de47cfc0f13a';
const ts = '1';
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`; //MARVEL API İÇİN GEREKLİ ŞEYLER


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      character:'',
      selectedCharacter:''
    }
    this.getJSON=this.getJSON.bind(this);
    this.handleCharacterSelect=this.handleCharacterSelect.bind(this);   //  BIND İŞLEMLERİ 
    this.getSelectedCharacter=this.getSelectedCharacter.bind(this);
  }

  componentDidMount = () => {
    this.getJSON();
  }

  getJSON(){
    const url = API_URL+'/characters?'+auth+'&limit=5';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let characterler = json.data.results;
      console.log(characterler)
      this.setState({
        character:characterler
      })
    })
  }

  handleCharacterSelect(character){
    console.log(character)
    this.setState({
      selectedCharacter:character
    })
  }

  getSelectedCharacter(term){
    const url = API_URL+"/characters?"+auth+"&limit=5&nameStartsWith="+term;
    
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let characters=json.data.results;
      console.log(term);
      this.setState({character: characters});
    })
  }

  render(){
    return(
      <div>
        <SearchBar onSearchButtonClicked={this.getSelectedCharacter}/>
        <CharacterList character={this.state.character} characterSelect={this.handleCharacterSelect}/>
        <Details character={this.state.selectedCharacter}/>
      </div>
    );
  }
}

export default App;