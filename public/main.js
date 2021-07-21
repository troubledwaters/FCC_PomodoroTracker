"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Tracker = /*#__PURE__*/function (_React$Component) {
  _inherits(Tracker, _React$Component);

  var _super = _createSuper(Tracker);

  function Tracker(props) {
    var _this;

    _classCallCheck(this, Tracker);

    _this = _super.call(this, props);
    _this.state = {
      sessionLength: 10,
      breakLength: 5,
      runningTime: 10,
      timeType: "session"
    };
    _this.decreaseSession = _this.decreaseSession.bind(_assertThisInitialized(_this));
    _this.decreaseBreak = _this.decreaseBreak.bind(_assertThisInitialized(_this));
    _this.startTimer = _this.startTimer.bind(_assertThisInitialized(_this));
    _this.switchTimeType = _this.switchTimeType.bind(_assertThisInitialized(_this));
    _this.addSessionTime = _this.addSessionTime.bind(_assertThisInitialized(_this));
    _this.subSessionTime = _this.subSessionTime.bind(_assertThisInitialized(_this));
    _this.addBreakTime = _this.addBreakTime.bind(_assertThisInitialized(_this));
    _this.subBreakTime = _this.subBreakTime.bind(_assertThisInitialized(_this));
    return _this;
  } // timeType = "session";
  //Add time to work session


  _createClass(Tracker, [{
    key: "addSessionTime",
    value: function addSessionTime() {
      var newSessionLength = this.state.sessionLength + 1;
      this.setState({
        sessionLength: newSessionLength
      });
    } //Subtract time to worl session 

  }, {
    key: "subSessionTime",
    value: function subSessionTime() {
      var newSessionLength = this.state.sessionLength - 1;
      this.setState({
        sessionLength: newSessionLength
      });
    } //Add time to break

  }, {
    key: "addBreakTime",
    value: function addBreakTime() {
      var newBreakLength = this.state.breakLength + 1;
      this.setState({
        breackLength: newBreakLength
      });
    } //Subtract time to break

  }, {
    key: "subBreakTime",
    value: function subBreakTime() {
      var newBreakLength = this.state.breakLength - 1;
      this.setState({
        breackLength: newBreakLength
      });
    } // decreaseTime() {
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

  }, {
    key: "decreaseSession",
    value: function decreaseSession() {
      this.setState({
        runningTime: this.state.sessionLength
      });
      this.startTimer();
    }
  }, {
    key: "decreaseBreak",
    value: function decreaseBreak() {
      this.setState({
        runningTime: this.state.breakLength
      });
      this.startTimer();
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.state.runningTime > 0) {
          var newTime = _this2.state.runningTime - 1;

          _this2.setState({
            runningTime: newTime
          });

          _this2.startTimer();
        } else {
          var handler = _this2.switchTimeType();

          console.log(handler);
          handler();
        }
      }, 1000);
    }
  }, {
    key: "switchTimeType",
    value: function switchTimeType() {
      this.state.timeType === "session" ? this.setState({
        timeType: "break"
      }) : this.setState({
        timeType: "session"
      });
      console.log(this.state.timeType); // this.timeType = newTimeType;

      var handlerMap = {
        "session": this.decreaseSession,
        "break": this.decreaseBreak
      };
      return handlerMap[this.state.timeType];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        "class": "container-fluid main__container"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "row session-label__row"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-3 label",
        id: "session-label"
      }, "Session Length")), /*#__PURE__*/React.createElement("div", {
        "class": "row session-settings__row settings__row"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-3 session-settings settings"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "session-settings__btn main-btn",
        onClick: this.addSessionTime
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-plus"
      })), /*#__PURE__*/React.createElement("div", {
        id: "#",
        "class": "session-settings__time settings__time"
      }, this.state.sessionLength), /*#__PURE__*/React.createElement("div", {
        "class": "session-settings__btn main-btn",
        onClick: this.subSessionTime
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-minus"
      })))), /*#__PURE__*/React.createElement("div", {
        "class": "row break-label__row"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-3 label",
        id: "break-label"
      }, "Break Length")), /*#__PURE__*/React.createElement("div", {
        "class": "row breack-settings__row settings__row"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-3 breack-settings settings"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "breack-settings__btn main-btn",
        onClick: this.addBreakTime
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-plus"
      })), /*#__PURE__*/React.createElement("div", {
        id: "#",
        "class": "breack-settings__time settings__time"
      }, this.state.breakLength), /*#__PURE__*/React.createElement("div", {
        "class": "breack-settings__btn main-btn",
        onClick: this.subBreakTime
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-minus"
      })))), /*#__PURE__*/React.createElement("div", {
        "class": "row main-time__row justify-content-xl-center"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-xl-4 main-time__col",
        onClick: this.decreaseSession
      }, this.state.runningTime)), /*#__PURE__*/React.createElement("div", {
        "class": "row play-btns__row justify-content-xl-center"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "col-xl-4 play-btns__col"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "play-btns__play main-btn"
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-play"
      })), /*#__PURE__*/React.createElement("div", {
        "class": "play-btns__pause main-btn"
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-pause"
      })), /*#__PURE__*/React.createElement("div", {
        "class": "play-btns__stop main-btn"
      }, /*#__PURE__*/React.createElement("i", {
        "class": "fas fa-stop"
      })))));
    }
  }]);

  return Tracker;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Tracker, null), document.getElementById("tracker"));