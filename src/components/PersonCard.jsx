import React from 'react';

const PersonCard = props => {



    return (
        <div className="col-5 mx-auto card">
            <div className="card-body">
                <h4 class="card-title">Name: {props.lastName}, {props.firstName}</h4>
                <p class="card-text">Age: {props.age} </p>
                <p class="card-text">hairColor: {props.hairColor}</p>
            </div>
        </div>
        
            
            

        
    );
    
}

export default PersonCard;