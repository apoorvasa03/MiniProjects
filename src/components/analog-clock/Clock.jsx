import './clock.css'
import {useState, useEffect} from 'react'
const Clock = ({props}) => {

    let [hour, setHour] = useState(0);
    let [minute, setMinute] = useState(0);
    let [second, setSecond] = useState(0);
    function setClock(){
        const currentDate = new Date()
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
        setSecond(secondsRatio * 360);
        setMinute(minutesRatio * 360);
        setHour(hoursRatio * 360);
    }

    useEffect(() => {
        setInterval(setClock, 1000);
    }, [])
    

    return (
        <div className="clock">
             <div className="hand hour" style={{ transform:`translate(-50%) rotate(${hour}deg)` }}></div>
            <div className="hand minute" style={{ transform:`translate(-50%) rotate(${minute}deg)` }}></div>
            <div className="hand second" style={{ transform:`translate(-50%) rotate(${second}deg)` }}></div>

            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    )
}

export default Clock;