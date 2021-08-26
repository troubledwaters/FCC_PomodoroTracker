class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLength: 5,
            breakLength: 3,
            runningTime: 5,
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
        this.pauseTimer = this.pauseTimer.bind(this);
        this.dropTimer = this.dropTimer.bind(this);
    }

    addSessionTime() {
        let newSessionLength = this.state.sessionLength + 1;
        this.setState({
            sessionLength: newSessionLength
        })
    }

    subSessionTime() {
        let newSessionLength = this.state.sessionLength - 1;
        this.setState({
            sessionLength: newSessionLength
        })
    }

    addBreakTime() {
        let newBreakLength = this.state.breakLength + 1;
        this.setState({
            breackLength: newBreakLength
        })
    }

    subBreakTime() {
        let newBreakLength = this.state.breakLength - 1;
        this.setState({
            breackLength: newBreakLength
        })
    }

    isTimerGo = false;


    decreaseSession(restart) {
        console.log(this.isTimerGo)
        if (this.isTimerGo === false) {
            // if (restart === true) {
            //     console.log("зашли в рестарт");
            //     this.setState({
            //         runningTime: this.state.sessionLength,

            //     });
            // }
            this.isTimerGo = true;
            this.startTimer();

        } else {
            if (restart) {
                this.setState({
                    runningTime: this.state.sessionLength,
                });
                this.startTimer();
            }
        }
        // else {
        // this.setState({
        //     runningTime: this.state.sessionLength,
        // });
        // this.isTimerGo = true;
        // this.startTimer();
        // }

        

    }

    decreaseBreak() {
        console.log("началось уменьшение перерыва");
        this.setState({
            runningTime: this.state.breakLength,

        });
        this.isTimerGo === true; //это вообще надо?
        this.startTimer();
    }


    startTimer() {
        console.log("запустили таймер");
        setTimeout(() => {
            console.log("kek");
            if (this.isTimerGo === true) {
                if (this.state.runningTime > 0) {
                    let newTime = this.state.runningTime - 1;
                    this.setState({
                        runningTime: newTime
                    });
                    this.startTimer();
                } else {
                    let handler = this.switchTimeType();

                    handler(true);
                }

            }
        }, 1000)
    }

    pauseTimer() {
        if (this.isTimerGo === true) {

            this.isTimerGo = false;
        } else {

            this.isTimerGo = true;
            this.startTimer();
        }
    }

    dropTimer() {
        this.isTimerGo = false;
        this.setState({
            runningTime: this.state.sessionLength,
        })
    }

    switchTimeType() {
        console.log("начали смену типа времени")
        this.state.timeType === "session" ? this.setState({ timeType: "break" }) : this.setState({ timeType: "session" });
        console.log(this.state.timeType);
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
                    <div class="col-md-3 col-12 label" id="session-label">Session Length</div>
                </div>
                <div class="row session-settings__row settings__row">
                    <div class="col-md-3 col-12 session-settings settings">
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
                    <div class="col-md-3 col-12 label" id="break-label">Break Length</div>
                </div>
                <div class="row breack-settings__row settings__row">
                    <div class="col-md-3 col-12 breack-settings settings">
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
                <div class="row main-time__row justify-content-center">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-12 main-time__col">
                        {this.state.runningTime}
                    </div>
                </div>
                <div class="row play-btns__row justify-content-center">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-12  play-btns__col">
                        <div class="play-btns__play main-btn" onClick={this.decreaseSession}>
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="play-btns__pause main-btn" onClick={this.pauseTimer}>
                            <i class="fas fa-pause" ></i>
                        </div>
                        <div class="play-btns__stop main-btn" onClick={this.dropTimer}>
                            <i class="fas fa-stop"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Tracker />, document.getElementById("tracker"))