import "./CountDown.css";
import { useState, useEffect } from "react";

const CountDown = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        let countDownDate = new Date("May 24, 2023 22:35:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let interval = countDownDate - now;
            let days = Math.floor(interval / (1000 * 60 * 60 * 24));
            let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((interval % (1000 * 60)) / 1000);

        setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        if(interval = 0){
            clearInterval(x);
            setTime("COUNTDOWN FINISHED! ⌛️");
        }
        }, 1000);
    }, []);
  return (
    <div className="countdown">
        <h2>COUNTDOWN 🗓</h2>
        <h2>{time}</h2>
    </div>
  )
};

export default CountDown;