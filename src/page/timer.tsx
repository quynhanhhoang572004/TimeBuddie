import { PromodoroTimer } from "../components/promodoro"
import { Container } from "react-bootstrap";

export const TimerPage = () =>{
return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#C6E5E8" }}
    >
         <img
        src="/logo.svg"          
        alt="Logo"
        style={{
          height: "60px",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      />
      <PromodoroTimer/>
      </Container>
)


}