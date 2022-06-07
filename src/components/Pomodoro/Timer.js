import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900, // 15min
        }
    }

    componentDidMount() {

        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //BUTTONS
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        });

        this.setTime(this.times.longBreak);
    }
    

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeeeep'
                }
            });
        } else {
            this.setState({
                time: this.state.time - 1
            });
        }
    }

    displayTimer(seconds) {
        const m = Math.floor(seconds/60);
        const s = seconds%60;
        
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render() {

        const {alert: { message, type}, time } = this.state;

        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className= "start"
                        onClick= {this.setTimeForWork}
                    >
                        Start Working
                    </button>

                    <button
                        className= "short"
                        onClick= {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>

                    <button
                        className= "long"
                        onClick= {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
                
                
            </div>
        )
    }
}


export default Timer;