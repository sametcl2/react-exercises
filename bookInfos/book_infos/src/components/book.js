import React from "react";

const Book = (props) => {
    return(
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src={props.img} alt={props.alt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <h5 className="card-text">{props.subtitle}</h5>
                        <p className="card-text">{props.subtitle2}</p>
                        <p className="card-text">{props.author}</p>
                        <p className="card-text">{props.publisher}</p>
                        <p className="card-text">{props.publishedDate}</p>
                        <p className="card-text"><small>{props.pageCount + " Sayfa"}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;