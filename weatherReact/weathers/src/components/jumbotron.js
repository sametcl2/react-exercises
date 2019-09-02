import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = (props) => {
        return(
            <div className="d-flex justify-content-center mt-5">
                <div className="jumbotron w-25 ">
                    <h3 className="display-4">{props.data.name}</h3>
                    <hr className="my-4"/>                
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>{props.data.weather[0].main + ", " + props.data.weather[0].description}</h3>
                            <h5>{props.data.main.temp + " Celcius"}</h5>
                        </div>
                        <div>
                            <i
                                className={`owi owi-${props.data.weather[0].icon}`} //README' DE BAHSEDİLEN KÜTÜPHANE KULLANILDI
                                style={{fontSize: 65}}
                            />
                        </div>
                    </div>  
                    <Link to={{
                        pathname:'/forecast',
                        name:props.data.name
                    }}>
                        <button
                            className="btn btn-primary w-100 mt-5"
                            type="button"> Next 4 days
                        </button> 
                    </Link>            
                </div>
            </div>
        );
}

export default Jumbotron;