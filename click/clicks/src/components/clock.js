import React from 'react';

const Clock = (props) => {
    return(
        <div className="d-flex justify-content-center mt-5">
            <div
                className="card"
                style={{width: 350}}>
                <div
                    className="card-header d-flex justify-content-center align-items-center"
                    style={{height:150, fontSize: 70}}>{props.sayi}
                </div>
                <div className="card-body ">
                    <div
                        className="btn-group"
                        style={{width: 300, height: 100}}>
                        <button
                            type="button "
                            className="btn btn-success"
                            onClick={props.arttir}>Arttır
                        </button>
                        <button
                        type="button"
                        className="btn btn-warning"
                        onClick={props.sifirla}>Sıfırla
                        </button>
                        <button
                        type="button"
                        className="btn btn-danger"
                        onClick={props.azalt}>Eksilt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;