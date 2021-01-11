import React, { useEffect } from 'react';
import Stopwatch from './Stopwatch'


const SERVER_STATUS_ADDRESS = "http://192.168.1.3:5000/returnStatus"
const SERVER_POLL_ADDRESS = "http://192.168.1.3:5000/pollTime"

const Timerscreen = () => {
    const [remainderTime, setRemainderTime] = React.useState(1500);
    const [startTime, setStartTime] = React.useState(0);
    const [playFlag, setPlayFlag] = React.useState(0);
    const [rerenderProp, setRerender] = React.useState(0);

    

    const TimerActual = () => {
        setStartTime(71000);
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let currentSeconds = (hours * 3600) + (minutes * 60) + seconds;
        let elasped = Math.abs(startTime - currentSeconds);
        let toDisplayAny = remainderTime - elasped;
        let toDisplay = (toDisplayAny >= 0) ? toDisplayAny: 0
        console.log(toDisplay)
        console.log(seconds);
        
        {/*code here will run and compute system time, compare to stored
        api time (for elasped), update remainderTime (remainder) then render
        remainderTime*/}
        useEffect(() => {
            let switcher = (rerenderProp == 1) ? 0 : 1
            const interval = setInterval (() => {
            setRerender(switcher);  
            },1000);
        return () => clearInterval (interval);

        })

        useEffect(() => {const play = async () => {
            await fetch(SERVER_STATUS_ADDRESS.concat(code)).then(response => response.json())
                .then(resp => (setPlayflag(resp.play)))
                .catch(error => (console.log(error)))
        };
        play();})
        {/*This effect will poll the api for play/pause changes*/ }

        useEffect(() => {const update = async () => {
            await fetch(SERVER_POLL_ADDRESS.concat(code)).then(response => response.json())
                .then(resp => (setStartTime(resp.timeStart), setRemainderTime(resp.pomodoroRemainder)))
                .catch(error => console.log(error))

            {/*This effect will be dependant on play pause changes
             The effecet will update the starttime, remainder of the client */}
        }}, [playFlag])
        return (<Stopwatch time={toDisplay}> </Stopwatch>);
    }
    return (<TimerActual> </TimerActual>);
}

export default Timerscreen;

