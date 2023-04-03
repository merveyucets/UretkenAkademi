import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kisiler: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      this.setState({
        kisiler: response.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({loading: true})
    }
  }

  render() {

    if(this.state.loading===true){
      return <h1>YÜKLENİYOR...</h1>;
    }

    return (
      <div className="body">
        <Container>
          <Row>
            <div className="navbar">
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                KAYITLI KULLANICILAR
              </h2>
            </div>
          </Row>
          <Row>
            <div className="card-container">
              {this.state.kisiler.map((kategori) => (
                <Card
                  key={kategori.id}
                  style={{
                    width: "15rem",
                  }}
                >
                  <CardBody>
                    <CardTitle>
                      <h6>Kullanıcı Adı: </h6>
                      <h4>{kategori.username}</h4>
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {kategori.name}
                    </CardSubtitle>
                  </CardBody>
                  <img
                    alt="Img"
                    src="https://avatars.dicebear.com/api/avataaars/36.svg"
                    width="70%"
                  />
                  <CardBody>
                    <UncontrolledAccordion defaultOpen="0">
                      <AccordionItem>
                        <AccordionHeader targetId="1">
                          Detaylı Bilgi
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                          <CardText>
                            <h6>
                              <strong>Adres: </strong>
                              {kategori.address.street} /{kategori.address.city}
                            </h6>
                            <h6>
                              <strong>Telefon: </strong>
                              {kategori.phone}
                            </h6>
                            <h6>
                              <strong>Email: </strong>
                              {kategori.email}
                            </h6>
                          </CardText>
                        </AccordionBody>
                      </AccordionItem>
                    </UncontrolledAccordion>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
