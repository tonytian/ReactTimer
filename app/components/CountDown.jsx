var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var CountDown = React.createClass({
    getInitialState() {
        return {
            totalSeconds: 0,
            countDownStatus: 'stopped'
        }
    },
    componentWillMount() {
        console.log('component will mount');
    },
    componentDidMount() {
        console.log('component did mount');        
    },
    componentWillUpdate: function(nextProps, nextState) {

    }, 
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'stopped':
                    this.setState({
                        totalSeconds: 0
                    });
                    clearInterval(this.timer); 
                    this.timer = undefined; 
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }, 
    handleSetCountDown: function (seconds) {
        if (!seconds) {
            alert('Please enter a valid number');
            return;
        }
        if (!('' + seconds).match(/^[0-9]*$/)) {
            alert('Please enter a valid number');
            return;
        }
        this.setState({
            totalSeconds: seconds,
            countDownStatus: 'started'
        });

    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var { totalSeconds } = this.state;
            this.setState({
                totalSeconds: totalSeconds > 0 ? totalSeconds - 1 : 0
            })
            if (this.state.totalSeconds == 0) {
                this.setState({
                    countDownStatus: 'stopped'
                });
            }
        }, 1000);
    },
    handleStatusChanged: function (newStatus) {
        console.log(newStatus); 
        this.setState({
            countDownStatus: newStatus
        });
    },
    render: function () {
        var { totalSeconds, countDownStatus } = this.state;
        var renderControlArea = () => {
            if (countDownStatus === 'stopped') {
                return (<CountDownForm handleSetCountDown={this.handleSetCountDown} />);
            } else {
                return (<Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChanged} />);
            }
        };
        return (
            <div>
                <h1 className="page-title text-center">CountDown</h1>
                <Clock totalSeconds={totalSeconds} />
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = CountDown; 