import React from 'react';

function CharacterListItem(props){
    const array=Array.from(props.character);
    return(
        <div>
            <img
            src={`${array.thumbnail.path}/portrait_medium.${array.thumbnail.extension}`}
            />
        </div>
    );
}

export default CharacterListItem;