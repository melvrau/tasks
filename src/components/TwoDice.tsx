import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, rollLeft] = useState<number>(1);
    const [rightDie, rollRight] = useState<number>(2);
    function left(): void {
        rollLeft(d6());
    }
    function right(): void {
        rollRight(d6());
    }

    return (
        <div>
            <Button onClick={left}>Roll Left</Button>
            <Button onClick={right}>Roll Right</Button>
            {leftDie === rightDie && leftDie !== 1 ? (
                <span>You Win!</span>
            ) : (
                <span></span>
            )}
            {leftDie === rightDie && leftDie === 1 ? (
                <span>You Lose!</span>
            ) : (
                <span></span>
            )}
            <span>
                Left Die: <span data-testid="left-die">{leftDie}</span>
            </span>
            <span>
                Right Die: <span data-testid="right-die">{rightDie}</span>
            </span>
        </div>
    );
}
