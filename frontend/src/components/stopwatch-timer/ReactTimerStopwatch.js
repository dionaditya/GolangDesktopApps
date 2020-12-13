import React, {useState, useEffect} from 'react';
import './ReactTimerStopwatch.css';
import Circle from "./Component/Circle/Circle";
import Time from "./Component/Time/Time";

const ReactTimerStopwatch = (props) => {

    const [hint, setHint] = useState(0);
    const [isActive, setIsActive] = useState("none")

    const getHint = (h) => {
        setHint(h);
    };

    useEffect(() => {
        setIsActive(props.isOn)
        props.getCurrentTimerValue(hint)
    }, [props.isOn])

    return (
        <div className="react-stopwatch-timer__table">
            <Time isOn={isActive} hint={getHint} watchType={props.watchType} displayHours={props.displayHours}
                  displayMinutes={props.displayMinutes} displaySeconds={props.displaySeconds}
                  fromTime={props.fromTime}/>
            {(props.displayCircle === true) ?
                <Circle color={props.color} tintColor={props.hintColor} hint={hint}/> : null}
            {(props.children !== undefined) ?
                <div className="react-stopwatch-timer__container">
                    {props.children}
                </div> : null}
        </div>
    );
};

export default ReactTimerStopwatch;