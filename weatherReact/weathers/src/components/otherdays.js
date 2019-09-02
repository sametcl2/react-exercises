import React from 'react';

const API_KEY_FORECAST = '24a5a35bf37de518a3d496f2fb713a5f';   

class OtherDays extends React.Component {
    constructor() {
        super();
        this.state = {
            forecast: ''
        }
        
    }
    componentDidMount() {
        this.forecast();    
    }

    
    forecast = async () => {
        const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.location.name}&units=metric&appid=${API_KEY_FORECAST}`;
        const response = await fetch(FORECAST_URL);
        const json = await response.json();
        this.setState({
          forecast: json
        });
        console.log(this.state.forecast);   
    }
    
    render() {
        return(
            <div className="d-flex justify-content-center">
                {
                    this.state.forecast !== '' &&
                    <div className="card-deck mt-5">
                        <div className="card">
                            <i
                                className={`owi owi-${this.state.forecast.list[12].weather[0].icon} d-flex justify-content-center my-3`}
                                style={{fontSize: 100}}
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {this.state.forecast.list[12].weather[0].main + ", " + this.state.forecast.list[12].weather[0].description}
                                </h3>
                                <h5 className="card-text">
                                    {this.state.forecast.list[12].main.temp + ' Celcius'}
                                </h5>
                            </div>
                            <div className="card-footer">
                                <small>
                                    {this.state.forecast.list[12].dt_txt}
                                </small>
                            </div>
                        </div>
                        <div className="card">
                            <i
                                className={`owi owi-${this.state.forecast.list[20].weather[0].icon} d-flex justify-content-center my-3`}
                                style={{fontSize: 100}}
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {this.state.forecast.list[20].weather[0].main + ", " + this.state.forecast.list[20].weather[0].description}
                                </h3>
                                <h5 className="card-text">
                                    {this.state.forecast.list[20].main.temp + ' Celcius'}
                                </h5>
                            </div>
                            <div className="card-footer">
                                <small>
                                    {this.state.forecast.list[20].dt_txt}
                                </small>
                            </div>
                        </div>
                        <div className="card">
                            <i
                                className={`owi owi-${this.state.forecast.list[28].weather[0].icon} d-flex justify-content-center my-3`}
                                style={{fontSize: 100}}
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {this.state.forecast.list[28].weather[0].main + ", " + this.state.forecast.list[28].weather[0].description}
                                </h3>
                                <h5 className="card-text">
                                    {this.state.forecast.list[28].main.temp + ' Celcius'}
                                </h5>
                            </div>
                            <div className="card-footer">
                                <small>
                                    {this.state.forecast.list[28].dt_txt}
                                </small>
                            </div>
                        </div>
                        <div className="card">
                            <i
                                className={`owi owi-${this.state.forecast.list[36].weather[0].icon} d-flex justify-content-center my-3`}
                                style={{fontSize: 100}}
                            />
                            <div className="card-body">
                                <h3 className="card-title">
                                    {this.state.forecast.list[36].weather[0].main + ", " + this.state.forecast.list[36].weather[0].description}
                                </h3>
                                <h5 className="card-text">
                                    {this.state.forecast.list[36].main.temp + ' Celcius'}
                                </h5>
                            </div>
                            <div className="card-footer">
                                <small>
                                    {this.state.forecast.list[36].dt_txt}
                                </small>
                            </div>
                        </div>
                    </div>
                }     
            </div>
        );
    }
}

export default OtherDays;