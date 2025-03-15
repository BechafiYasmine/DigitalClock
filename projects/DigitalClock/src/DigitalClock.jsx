import React, { useState, useEffect } from 'react';

function DigitalClock() {
    // State to store the current time
    const [time, setTime] = useState(new Date());

    // useEffect to update the clock every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update the time every second
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup when component unmounts
    }, []);

    // Function to format the time in 12-hour format with AM/PM
    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    };

    // Helper function to add a leading zero if the number is less than 10
    const padZero = (number) => (number < 10 ? "0" : "") + number;

    return (
        <div className="clock-container">
            <div className="clock">{formatTime()}</div>
        </div>
    );
}

export default DigitalClock;
