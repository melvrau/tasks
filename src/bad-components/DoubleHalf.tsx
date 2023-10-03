import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h1>Double Half</h1>
            The current value is: <span>{dhValue}</span>
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
        </div>
    );
}
