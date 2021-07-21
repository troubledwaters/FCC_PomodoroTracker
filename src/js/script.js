class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLength: 10,
            breakLength: 5,
            runningTime: 10,
            timeType: "session",

        }
        this.decreaseSession = this.decreaseSession.bind(this);
        this.decreaseBreak = this.decreaseBreak.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.switchTimeType = this.switchTimeType.bind(this);
        this.addSessionTime = this.addSessionTime.bind(this);
        this.subSessionTime = this.subSessionTime.bind(this);
        this.addBreakTime = this.addBreakTime.bind(this);
        this.subBreakTime = this.subBreakTime.bind(this);
    }

    // timeType = "session";
    //Add time to work session
    addSessionTime() {
        let newSessionLength = this.state.sessionLength + 1;
        this.setState({
            sessionLength: newSessionLength
        })
    }

    //Subtract time to worl session 
    subSessionTime() {
        let newSessionLength = this.state.sessionLength - 1;
        this.setState({
            sessionLength: newSessionLength
        })
    }

    //Add time to break
    addBreakTime() {
        let newBreakLength = this.state.breakLength + 1;
        this.setState({
            breackLength: newBreakLength
        })
    }

    //Subtract time to break
    subBreakTime() {
        let newBreakLength = this.state.breakLength - 1;
        this.setState({
            breackLength: newBreakLength
        })
    }


    // decreaseTime() {
    //     while (this.state.workTime > 0) {
    //         setTimeout(() => {
    //             let newTime = this.state.workTime - 1;
    //             console.log(newTime);
    //             this.setState({
    //                 workTime: newTime,
    //             })
    //         }, 1000)
    //        break
    //     }
    // }


    decreaseSession() {
        this.setState({
            runningTime: this.state.sessionLength,
        });
        this.startTimer();

    }

    decreaseBreak() {
        this.setState({
            runningTime: this.state.breakLength,
        });
        this.startTimer();
    }

    startTimer() {
        setTimeout(() => {
            if (this.state.runningTime > 0) {
                let newTime = this.state.runningTime - 1;
                this.setState({
                    runningTime: newTime
                });
                this.startTimer()
            } else {
                let handler = this.switchTimeType();
                console.log(handler);
                handler();
            }
        }, 1000)

    }

    switchTimeType() {
        this.state.timeType === "session" ? this.setState({timeType:"break" }): this.setState({timeType:"session" });
        console.log(this.state.timeType);
        // this.timeType = newTimeType;
        const handlerMap = {
            "session": this.decreaseSession,
            "break": this.decreaseBreak,
        }
        return handlerMap[this.state.timeType]
    }



    render() {
        return (
            <div class="container-fluid main__container">
                <div class="row session-label__row">
                    <div class="col-3 label" id="session-label">Session Length</div>
                </div>
                <div class="row session-settings__row settings__row">
                    <div class="col-3 session-settings settings">
                        <div class="session-settings__btn main-btn" onClick={this.addSessionTime}>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div id="#" class="session-settings__time settings__time">
                            {this.state.sessionLength}
                        </div>
                        <div class="session-settings__btn main-btn" onClick={this.subSessionTime}>
                            <i class="fas fa-minus"></i>
                        </div>
                    </div>

                </div>
                <div class="row break-label__row">
                    <div class="col-3 label" id="break-label">Break Length</div>
                </div>
                <div class="row breack-settings__row settings__row">
                    <div class="col-3 breack-settings settings">
                        <div class="breack-settings__btn main-btn" onClick={this.addBreakTime}>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div id="#" class="breack-settings__time settings__time">
                            {this.state.breakLength}
                        </div>
                        <div class="breack-settings__btn main-btn" onClick={this.subBreakTime}>
                            <i class="fas fa-minus"></i>
                        </div>
                    </div>
                </div>
                <div class="row main-time__row justify-content-xl-center">
                    <div class="col-xl-4 main-time__col" onClick={this.decreaseSession}>
                        {this.state.runningTime}
                    </div>
                </div>
                <div class="row play-btns__row justify-content-xl-center">
                    <div class="col-xl-4 play-btns__col">
                        <div class="play-btns__play main-btn">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="play-btns__pause main-btn">
                            <i class="fas fa-pause"></i>
                        </div>
                        <div class="play-btns__stop main-btn">
                            <i class="fas fa-stop"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Tracker />, document.getElementById("tracker"))