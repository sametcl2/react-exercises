import React from "react";
import Book from "./book";
import img from "./img.png"

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
                      subtitle={item.hasOwnProperty('searchInfo') ? item.searchInfo.textSnippet : ''}
                      subtitle2={item.volumeInfo.hasOwnProperty('subtitle') ? item.volumeInfo.subtitle : ''}
                      img={item.volumeInfo.hasOwnProperty('imageLinks') ? item.volumeInfo.imageLinks.thumbnail : img}
                      alt={item.volumeInfo.title}
                      publisher={ item.volumeInfo.hasOwnProperty('publisher')  ? item.volumeInfo.publisher : 'Yayınevi bilgisi yok'}
                      publishedDate={item.volumeInfo.hasOwnProperty('publishedDate') ? item.volumeInfo.publishedDate: 'Yayın tarihi bilgisi yok'}
                      author={item.volumeInfo.hasOwnProperty('authors') ? item.volumeInfo.authors[0] : 'Yazar bilgisi yok'}
                      pageCount={item.volumeInfo.hasOwnProperty('pageCount') ? item.volumeInfo.pageCount : 'Sayfa bilgisi yok'}
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