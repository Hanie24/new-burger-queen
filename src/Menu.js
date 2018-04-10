import React from "react";

class Menu extends React.Component{
    constructor(){
      super();
    }
    
   render(){
    return ( 
        <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src="./public/images/lugos.jpg" alt="Desayunos"/>
            <div class="card-body">
                <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"> <h5 class="card-title">Desayunos</h5> </a>
            </div>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body">
                            Tabla de Menu
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        )
    }
   }
   

   export default Menu
