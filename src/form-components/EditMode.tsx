import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, switchModes] = useState<boolean>(false);
    const [userName, changeUser] = useState<string>("Your Name");
    const [isStudent, changeEnrollment] = useState<boolean>(true);
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        switchModes(event.target.checked);
    }
    function switchEnrollment(event: React.ChangeEvent<HTMLInputElement>) {
        changeEnrollment(event.target.checked);
    }
    function format() {
        if (isStudent) {
            return <div>{userName} is a student.</div>;
        } else {
            return <div>{userName} is not a student.</div>;
        }
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        changeUser(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="mode-check"
                label="Mode"
                checked={mode}
                onChange={changeMode}
            />
            {mode && (
                <Form.Check
                    type="checkbox"
                    id="student"
                    label="Student"
                    checked={isStudent}
                    onChange={switchEnrollment}
                />
            )}
            {mode && (
                <Form.Group controlId="formUserName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={userName} onChange={changeName} />
                </Form.Group>
            )}
            {!mode && <div>{format()}</div>}
        </div>
    );
}
