import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
        );
    }

    const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            The box is at: <span>{position}</span>
            <div>
                <Button onClick={() => setPosition(4 + position)}>
                    Shove the Box
                </Button>
                {box}
            </div>
        </div>
    );
}