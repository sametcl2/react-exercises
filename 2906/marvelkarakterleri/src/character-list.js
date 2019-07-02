import React from 'react';

function CharacterList(props){
        const array=Array.from(props.character);
        const listItems = array.map((item) => 
            <li key={item.id}>{item.name}</li>
        );
        console.log(array)
        return(
            <div className="col-md-4">
                {<ul>{listItems}</ul>}
            </div>
        );
}

export default CharacterList;
