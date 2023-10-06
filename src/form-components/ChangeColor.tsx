import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, changeColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        changeColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                style={{ backgroundColor: "red" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label="red"
                value="red"
                background-color="red"
                checked={color === "red"}
            />
            <Form.Check
                style={{ backgroundColor: "orange" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                style={{ backgroundColor: "yellow" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                style={{ backgroundColor: "green" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                style={{ backgroundColor: "cyan" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-cyan"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check
                style={{ backgroundColor: "blue" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                style={{ backgroundColor: "indigo" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-indigo"
                label="indigo"
                value="indigo"
                checked={color === "indigo"}
            />
            <Form.Check
                style={{ backgroundColor: "magenta" }}
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-magenta"
                label="magenta"
                value="magenta"
                checked={color === "magenta"}
            />
            <div>
                You have chosen
                <span> </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
