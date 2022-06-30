import { Container, Row } from "react-bootstrap"
import './Header.css';
import house from '../../assets/foundation/fundament_dom.png'

const Header = () => {
  return (
    <Container className="mb-5 header">
      <h1>Фундамент под ключ в Тюмени и Тюменской области</h1>
      <Row>
        <div>
          <img src={house} alt="house" />
        </div>
      <div>
      Закладка фундамента – первый и наиболее важный этап строительства дома. 
      От качества основания зависят долговечность и надежность всего здания. 
      Наша компания предлагает услуги по строительству фундаментов под ключ.
      </div>
      </Row>
      <p>
      Если Вы сомневаетесь в выборе оптимального фундамента для Вашего дома, 
      бани, гаража, забора или другого строения, 
      рекомендуем обратиться к нам за консультацией.
      </p>
    </Container>
  )
}

export default Header;
