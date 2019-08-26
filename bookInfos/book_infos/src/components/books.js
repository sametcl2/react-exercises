import React from "react";
import Book from "./book";

const Books = (props) => {
    return(
        <div className="d-flex justify-content-center mt-5 w-50">
          <ul className="list-group">
            {
              props.data.items.map((item, index) =>
                <li className="list-group-item" key={index}>
                  {
                    <Book 
                      title={item.volumeInfo.title}
                      subtitle={typeof item.searchInfo.textSnippet !== 'undefined' ? item.searchInfo.textSnippet : 'no information'}
                      img={typeof item.volumeInfo.imageLinks.thumbnail !== 'undefined' ? item.volumeInfo.imageLinks.thumbnail : 'no image'}
                      alt={item.volumeInfo.title}
                      publisher={typeof item.volumeInfo.publisher !== 'undefined' ? item.volumeInfo.publisher : 'no information'}
                      publishedDate={typeof item.volumeInfo.publishedDate !== 'undefined' ? item.volumeInfo.publishedDate: 'no information'}
                      author={typeof item.volumeInfo.author !== 'undefined' ? item.volumeInfo.author[0] : 'no information'}
                      pageCount={typeof item.volumeInfo.pageCount !== 'undefined' ? item.volumeInfo.pageCount : 'no information'}
                    />
                  }
                </li>
              )
            }
          </ul>
        </div>
    );
}

export default Books;