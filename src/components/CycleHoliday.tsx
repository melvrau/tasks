import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "☘️" | "🐇" | "🎃" | "🎄";
const BY_DATE: Record<Holiday, Holiday> = {
    "🎉": "☘️",
    "☘️": "🐇",
    "🐇": "🎃",
    "🎃": "🎄",
    "🎄": "🎉"
};
const BY_ALPH: Record<Holiday, Holiday> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🎉",
    "🎉": "☘️",
    "☘️": "🎄"
};
export function CycleHoliday(): JSX.Element {
    const [currHoliday, changeHoliday] = useState<Holiday>("🎉");
    function advanceByDate(): void {
        const newHoliday = BY_DATE[currHoliday];
        changeHoliday(newHoliday);
    }
    function advanceByAlphabet(): void {
        const newHoliday = BY_ALPH[currHoliday];
        changeHoliday(newHoliday);
    }
    return (
        <div>
            <div>
                <Button onClick={advanceByAlphabet}>Advance By Alphabet</Button>
                <Button onClick={advanceByDate}>Advance By Year</Button>
            </div>
            <p>Holiday: {currHoliday}</p>
        </div>
    );
}
