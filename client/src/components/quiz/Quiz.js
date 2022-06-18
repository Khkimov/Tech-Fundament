import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import IMAGES from "../../assets";
import './Quiz.css';


const Quiz = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const pages = [];
  for (let i = 1; i < Math.ceil((IMAGES.length + 2) / itemsPerPage); i++) {
    pages.push(i);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = IMAGES.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
        <li key={number} 
      id={number}
      onClick={handleClick}
      className={currentPage === number ? 'active pageNumber' : null}
      >
        {number}
      </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  return (
    <div className="quiz">
      
    <div className="d-flex flex-wrap">
      {currentItems.map((el) => 
      <Card style={{ width: '8rem', margin: '10px' }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title style={{fontSize: '15px'}}>{el.type}</Card.Title>
      </Card.Body>
    </Card>
      )}
    </div>
    <ul className="pageNumbers">
      <li>
        <button
        onClick={handlePrevBtn}
        disabled={currentPage === pages[0] ? true : false}
        >Назад</button>
      </li>
      {renderPageNumber}
      <li>
        <button
        onClick={handleNextBtn}
        disabled={currentPage === pages[pages.length - 1] ? true : false}
        >Вперед
        </button>
      </li>
    </ul>
    </div>
        // <Form className={"mt-4 p-2"} 
        // style={{border: '1px solid', borderRadius: '5px'}}
        // >
        //   <Dropdown className={"mt-2 mb-2"}>
        //     <Dropdown.Toggle variant="outline-dark">
        //       {device.selectedType.name || "Выберите тип"}
        //       </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //       {device.types.map(type => 
        //         <Dropdown.Item 
        //         onClick={() => device.setSelectedType(type)} 
        //         key={type.id}>
        //           {type.name}
        //         </Dropdown.Item>
        //         )}
        //     </Dropdown.Menu>
        //   </Dropdown>
        //   <Dropdown className={"mt-2 mb-2"}>
        //     <Dropdown.Toggle variant="outline-dark">
        //       {device.selectedMaterial.name || "Под ключ или без материала"}
        //       </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //       {device.materials.map(material => 
        //         <Dropdown.Item 
        //         onClick={() => device.setSelectedMaterial(material)} 
        //         key={material.id}>
        //           {material.name}
        //         </Dropdown.Item>
        //         )}
        //     </Dropdown.Menu>
        //   </Dropdown>
        //   <Dropdown className={"mt-2 mb-2"}>
        //     <Dropdown.Toggle variant="outline-dark">
        //       {device.selectedHouse.name || "Выберите размер дома"}
        //       </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //       {device.houses.map(house => 
        //         <Dropdown.Item 
        //         onClick={() => device.setSelectedHouse(house)}
        //         key={house.id}>
        //           {house.name}
        //           </Dropdown.Item>
        //         )}
        //     </Dropdown.Menu>
        //   </Dropdown>
        //   <Dropdown className={"mt-2 mb-2"}>
        //     <Dropdown.Toggle variant="outline-dark">
        //       {device.selectedSize.name || "Выберите размер фундамента"}
        //       </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //       {device.sizes.map(size => 
        //         <Dropdown.Item 
        //         onClick={() => device.setSelectedSize(size)} 
        //         key={size.id}>
        //           {size.name}
        //           </Dropdown.Item>
        //         )}
        //     </Dropdown.Menu>
        //   </Dropdown>
        //   <Form.Control
        //   className={"mt-3"}
        //   placeholder="Введите размер дома, типа(Дом 8 на 8)"
        //   />
        //   <Form.Control
        //   className={"mt-3"}
        //   placeholder="Введите размер фундамента, типа(400/600)"
        //   />
        //   <Button className={"mt-2"} 
        //   variant="outline-dark"
        //   style={{width: '100%'}}
        //   >
        //     Отправить
        //     </Button>
        // </Form>
  )
};

export default Quiz;
