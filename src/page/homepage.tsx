import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center "
      style={{ backgroundColor: "#C6E5E8" }}
    >
      <Row className="w-100 justify-content-center">
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center justify-content-center text-center"
        >
          <img
            src="flower_1.svg"
            alt="main"
            className="img-fluid"
            style={{
              maxWidth: "300px",
              height: "auto",
            }}
          />
          <h1 style={{ fontFamily: "'Press Start 2P'", color:"#FFE898", textShadow:" -5px 4px 0px #FDC507" }}className="mt-5">
            TimeBuddie
          </h1>
        
          <Button
        
 as={Link as any}
  to="/todo"
  className="mt-3 border-0"
  style={{ fontFamily: "'Press Start 2P'", color:"#FDC507", backgroundColor:"#E7F1F2" }}
>
  Press Start
</Button>



        </Col>
      </Row>
    </Container>
  );
};
