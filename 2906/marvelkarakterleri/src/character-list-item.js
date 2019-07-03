import React from 'react';

function CharacterListItem(props){
  const character=props.character;
      return( 
        <div className="list-item" onClick={() => props.characterSelect(character)}>
          <div className="col-md-4">
            <img src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`} alt={character.name}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h3>{character.name}</h3>
                {character.description && <hr />}
                {character.description && character.description.length > 50 ? character.description.substr(0, 70) + '...' 
                : character.description}
              </div>
            </div>
          </div>
        </div>
      );
}

export default CharacterListItem;