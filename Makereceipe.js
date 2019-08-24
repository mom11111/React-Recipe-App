import React from 'react';
import './maker.css';
const Makereceipe=({addreceipe})=>{
    //console.log(addreceipe);
    return (
        <div className="ninja-list">
          { 
            addreceipe.map(ninja => {
                console.log(ninja);
              return (
                <div className="ninja">
                  <div id="text">Name:{ninja.recipe.label}</div>
                  <div id="text">Calorie:{ninja.recipe.calories}</div>
                  <img src={ninja.recipe.image} alt="img"/>
                 
                </div>
              )
            })
          }
        </div>
      );
   
}
export default Makereceipe;