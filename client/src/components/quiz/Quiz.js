import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import IMAGES from "../../assets";
import EmailModal from "../modals/EmailModal";
import './Quiz.css';


const Quiz = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(6);

  // const [pageNumberLimit, setPageNumberLimit] = useState(6);
  // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  // const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // const handleClick = (event) => {
  //   setCurrentPage(Number(event.target.id))
  // }

  // const pages = [];
  // for (let i = 1; i < Math.ceil((IMAGES.length + 2) / itemsPerPage); i++) {
  //   pages.push(i);
  // };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = IMAGES.slice(indexOfFirstItem, indexOfLastItem)

  // const renderPageNumber = pages.map((number) => {
  //   if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
  //       return (
  //       <li key={number} 
  //     id={number}
  //     onClick={handleClick}
  //     className={currentPage === number ? 'active pageNumber' : null}
  //     >
  //       {number}
  //     </li>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const handleNextBtn = () => {
  //   setCurrentPage(currentPage + 1);
  //   if (currentPage + 1 > maxPageNumberLimit) {
  //     setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
  //     setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  //   }
  // };

  // const handlePrevBtn = () => {
  //   setCurrentPage(currentPage - 1);

  //   if ((currentPage - 1) % pageNumberLimit === 0) {
  //     setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
  //     setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  //   }
  // };
  return (
  <div className="quiz">
    <div className="d-flex flex-wrap">
       
      <ul className="nav nav-tabs tabs__items">
        {IMAGES.map((el, index) => (
          <div className="tabs__items" key={index}>
            <li className="nav-item">
              <a className="nav-link tabs__item" href={`#tab-${index}`}>{el.name}</a>
            </li>
          </div>
          ))}
        <div className="tabs__items" >
            <li className="nav-item">
              <a className="nav-link tabs__item" href="#tab-2">Шаг 3</a>
            </li>
          </div>
      </ul>

      {IMAGES.map((el, index) => 
      <div className="tabs__block" id={`tab-${index}`}>
        {el.step.map((elem, ind) => (
          <Card key={ind} 
          style={{ width: '8rem', 
          margin: '10px',
          cursor: 'pointer',
          }}
          >
            <Card.Img variant="top" src={elem.img} />
            <Card.Body>
              <Card.Title style={{fontSize: '15px'}}>{elem.type}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      )}
    </div>
      <EmailModal
      id="tab-2"
      />
  </div>
  )
};

export default Quiz;
