import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275 - Melvin Rau</header>
            <h1>Does this fix my test?</h1>
            <p>Hello world! Look at this clipart!</p>
            <img
                src="https://media.istockphoto.com/id/1363941647/vector/banana-fruit-fresh-icon-vector-design-templates.jpg?s=612x612&w=0&k=20&c=H2sX6P8_EFGF489yooOnalPZY3JnMDk0IWRAnhzfjLg="
                alt="Clipart of a banana I found"
            />
            <p>What&#39;s that thing doing here??</p>
            <ol>
                <li>I am hungry</li>
                <li>I want the clipart banana</li>
                <li>Testing became permanent</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div id="rectangle">
                <Container>
                    <Row>
                        <Col>Left side?</Col>
                        <Col>Right side!</Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
