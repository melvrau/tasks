import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAns] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<string>("❌");
    function updateGivenAns(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAns(event.target.value);
    }
    if (givenAnswer === expectedAnswer && isCorrect === "❌") {
        setIsCorrect("✔️");
    }
    if (givenAnswer !== expectedAnswer && isCorrect === "✔️") {
        setIsCorrect("❌");
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateGivenAns} />
            </Form.Group>
            <div>{isCorrect}</div>
        </div>
    );
}
