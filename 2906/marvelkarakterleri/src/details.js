import React from 'react';

function Details(props){
    const  character  = props.character;
    
    if(!character) return null;
    return (
        <div className="col-md-8">
        <div className="details">
          <div className="row">
            <div className="col-md-12">
              <h1>
                {character.name}
                <hr/>
              </h1>
            </div>
            <div className="col-md-5">
              <img
                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </div>
            <div className="col-md-7">
              <p>{character.description}</p>
              <h4>Comics({character.series.available})</h4>
              <h2>LOREM IPSUM DOLOR SIT AMET</h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Details;