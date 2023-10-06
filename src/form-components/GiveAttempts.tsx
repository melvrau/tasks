import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, editAttempts] = useState<number>(3);
    const [request, editRequest] = useState<string>("");
    function startQuiz(): void {
        if (attempts !== 0) {
            editAttempts(attempts - 1);
        }
    }
    function addRequest(): void {
        editAttempts(attempts + parseInt(request));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts: <div>{attempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        editRequest(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={startQuiz} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={addRequest} disabled={isNaN(parseInt(request))}>
                gain
            </Button>
        </div>
    );
}
