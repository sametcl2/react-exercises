import React from 'react';
import CharacterListItem from './character-list-item';

function CharacterList(props){
    const array = Array.from(props.character);
        return(
            <div className="col-md-4">
                {array.map((item) => <CharacterListItem character={item} characterSelect={props.characterSelect} key={item.id}/>)}
            </div>
        );
}  

export default CharacterList;
