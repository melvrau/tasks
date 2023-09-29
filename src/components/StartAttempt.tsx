import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, reduceAttemptNum] = useState<number>(4);
    const [inProgress, changeInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (numAttempts !== 0) {
            reduceAttemptNum(numAttempts - 1);
            changeInProgress(true);
        }
    }
    function stopQuiz(): void {
        changeInProgress(false);
    }
    function addOne(): void {
        reduceAttemptNum(numAttempts + 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addOne} disabled={inProgress}>
                Mulligan
            </Button>
            <span>Attempts: {numAttempts}</span>
        </div>
    );
}
