import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return (
            <div>
                <h1>Bienvenidos a Burger Queen</h1>
                <button>Comenzar</button>
            </div>
        );
    };
};

//Renderizar componente 
const rootElement = document.getElementById('react-container');
const element = <Button/>;

ReactDOM.render(element, rootElement);

