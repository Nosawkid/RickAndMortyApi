import { useEffect, useState } from "react";
import { Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";
import axios from "axios";

const RickAndMorty = () => {
  const [dataType, setDataType] = useState("character");
  const [items, setItems] = useState([]);

  const fetchApi = () => {
    const url = `https://rickandmortyapi.com/api/${dataType}`;
    axios
      .get(url)
      .then((res) => {
        setItems(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [dataType]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Rick And Morty</h1>
            <p className="text-center">
              Choose among Character, Episodes and Locations to get the
              repective list items
            </p>
            <Dropdown className="mb-3 text-center ">
              <Dropdown.Toggle variant="info" id="type-toggle">
                Choose DataType
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setDataType("character")}>
                  Character
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDataType("episode")}>
                  Episode
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDataType("location")}>
                  Location
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="overflow-y-scroll h-50">
              <ListGroup.Item variant="primary" className="text-center fw-bold">
                {dataType.toUpperCase() + "S"}
              </ListGroup.Item>
              {items.map((el) => (
                <ListGroup.Item key={el.name}>
                  <p>
                    <span>{el.id}</span> &nbsp; {el.name}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RickAndMorty;
