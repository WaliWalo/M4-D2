import React, { Component } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  CardDeck,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import horrors from "../data/horror.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
class Contents extends Component {
  state = {
    category: horrors,
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <DropdownButton id="dropdown-basic-button" title="Categories">
              <Dropdown.Item
                href="#/action-1"
                onClick={() => this.setState({ category: horrors })}
              >
                Horror
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => this.setState({ category: fantasy })}
              >
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => this.setState({ category: history })}
              >
                History
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => this.setState({ category: romance })}
              >
                Romance
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => this.setState({ category: scifi })}
              >
                Sci-fi
              </Dropdown.Item>
            </DropdownButton>
          </Row>
          <Row>
            <CardDeck>
              {this.state.category.map((book) => {
                return (
                  <Col className="my-2">
                    <Card style={{ width: "18rem" }} key={book.asin}>
                      <Card.Img
                        variant="top"
                        src={book.img}
                        style={{ height: "20rem" }}
                      />
                      <Card.Body style={{ height: "12rem" }}>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>Price: {book.price}</Card.Text>
                        <Button variant="primary">Buy Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </CardDeck>
          </Row>
        </Container>
      </>
    );
  }
}

export default Contents;
