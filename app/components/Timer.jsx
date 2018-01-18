var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls')

var Timer = React.createClass({
    getInitialState: function() {
        return {
            totalSeconds: 0, 
            countDownStatus: 'stopped'
        }; 
    },
    componentDidUpdate(prevProps, prevState) {
        if(this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started': 
                    this.startTimer(); 
                    break; 
                
                case 'paused': 
                    this.pauseTimer();
                    break; 
                
                case 'stopped': 
                    this.clearTimer();
                    break; 
            }
        }
    },
    handleStatusChange(newStatus) {
        this.setState({
            countDownStatus: newStatus
        }); 
    },
    startTimer: function() {
        if (this.timer) {
            console.log('already started');
            return; 
        } 
        
        this.timer = setInterval(()=> {
            var {totalSeconds} = this.state; 
            this.setState({
                totalSeconds: totalSeconds + 1, 
                countDownStatus: 'started'
            });
        }, 1000);
    },
    pauseTimer: function() {
        if(this.timer){ 
            clearInterval(this.timer); 
            this.timer = undefined; 
        }
    },
    clearTimer: function(e) {
        if(this.timer) {
            clearInterval(this.timer);
            this.timer = undefined; 
            this.setState({totalSeconds: 0});
        }
    },
    render: function(){
        var { totalSeconds, countDownStatus } = this.state;
        
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <Clock totalSeconds={totalSeconds} />
                <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        ) 
    }
});

module.exports = Timer; 