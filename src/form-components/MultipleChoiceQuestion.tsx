import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, changeChoice] = useState<string>(options[0]);
    const [isCorrect, setIsCorrect] = useState<string>("❌");
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        changeChoice(event.target.value);
    }
    if (choice === expectedAnswer && isCorrect === "❌") {
        setIsCorrect("✔️");
    }
    if (choice !== expectedAnswer && isCorrect === "✔️") {
        setIsCorrect("❌");
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoice">
                <Form.Label>Options: </Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {isCorrect}
        </div>
    );
}
