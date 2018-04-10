import React from 'react';

class CoruselMap extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return(
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../public/images/hamburgesa.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../public/images/cafe.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../public/images/lugos.jpg" alt="Third slide"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoruselMap;