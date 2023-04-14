import React, { useState, useEffect } from "react";
import './App.css';
import { AiFillFacebook } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

function App() {

    const [days, setDays] = useState(8);
    const [hours, setHours] = useState(23);
    const [minutes, setMinutes] = useState(55);
    const [seconds, setSeconds] = useState(41);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(countdown);
                        } else {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                    setFlip(!flip);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [days, hours, minutes, seconds, flip]);

    return (
        <>
            <div className="countdown">
                <h1 className="title">We're launching soon</h1>
                <div className="card">
                    <div className="circle-left"></div>
                    <div className="card-front">
                        <span>{days < 10 ? `0${days}` : days}</span>
                    </div>
                    <div className="circle-right"></div>
                    <span className="label">Days</span>
                </div>
                <div className="card">
                    <div className="circle-left"></div>
                    <div className="card-front">
                        <span>{hours < 10 ? `0${hours}` : hours}</span>
                    </div>
                    <div className="circle-right"></div>
                    <span className="label">Hours</span>
                </div>
                <div className="card">
                    <div className="circle-left"></div>
                    <div className="card-front">
                        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
                    </div>
                    <div className="circle-right"></div>
                    <span className="label">Minutes</span>
                </div>
                <div className="card">
                    <div className="circle-left"></div>
                    <div className="card-front">
                        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </div>
                    <div className="circle-right"></div>
                    <span className="label">Seconds</span>
                </div>
            </div>
            <div className="footer">
                <div className="logo">
                    <a href="#">
                        <AiFillFacebook className="icon" />
                    </a>
                    <a href="#">
                        <BsPinterest className="icon" />
                    </a>
                    <a href="#">
                        <BsInstagram className="icon" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
