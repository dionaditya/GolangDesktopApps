import React from 'react';
import logo from './logo.png';
import './App.css';
import HelloWorld from './components/HelloWorld';
// import ReactCountdownClock from 'react-countdown-clock'
import ReactTimerStopwatch from './components/stopwatch-timer/ReactTimerStopwatch';
import styled from 'styled-components'

import Draggable from 'react-draggable'; // The default

const BaseLayout = styled.div`
  background: #1a1a2e;
  display: flex;
  width: 100%;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  color: white;
`


function App() {

  const [timerStarted, setTimerStarted] = React.useState('none')
  const [timer, setTimer] = React.useState(0)
  const [todo, setTodo] = React.useState('')
  const [fromTime, setFromTime] = React.useState(new Date(0, 0, 0, 0, 0, 0, 0))

  const handleStartCountdown = () => {
    setTimerStarted('start')   
  }

  const handleResetTimer = () => {
    window.backend.basic('Timer stopped', 'Session has been ended');
    setTimerStarted('reset')
  }

  const handleTodoInput = (e) => {
    setTodo(e.target.value)
  }

  const handleGetCurrentTimerValue = (currentValue) => {
    setTimer(currentValue)
  }

  const StyledButton = styled.button`
    background: #e94560;
    border: none;
    margin: 10px;
    color: white;
    font-weight: bold;
    padding: 10px;
  `

  const StyledCTAContainer = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <BaseLayout>
        <h1>Todo</h1>
        {
          timerStarted === 'none' || timerStarted === 'reset' ? (
          <input value={todo} onChange={e => handleTodoInput(e)} placeholder="input todo"/>
          ) : (
            <div>
              {todo}
            </div>
          )
        }
        {/* <ReactCountdownClock 
          seconds={timer}
          color="#e94560"
          alpha={0.9}
          size={200}
          paused={!timerStarted}
          onComplete={() => console.log('complete')} /> */}
        <ReactTimerStopwatch
          isOn={timerStarted} 
          className="react-stopwatch-timer__table" 
          watchType="stopwatch"
          displayCircle={true}
          color="gray" 
          hintColor="red"
          fromTime={fromTime}
          getCurrentTimerValue={handleGetCurrentTimerValue}
          />
        <StyledCTAContainer>
          <StyledButton onClick={handleStartCountdown}>
            Start
          </StyledButton>
          <StyledButton onClick={handleResetTimer}>
            Stop
          </StyledButton>
        </StyledCTAContainer>
        {/* <Draggable>
          <div>I can now be moved around!</div>
        </Draggable> */}
    </BaseLayout>
  );
}

export default App;
