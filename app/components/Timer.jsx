var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            totalSeconds: 0
        }; 
    },
    onStart: function(e) {
        if (this.ticker) {
            console.log('already started');
            return; 
        }
        console.log('starting');
        const that = this;       
        const tick = function(){
            console.log('clock tick');
            var {totalSeconds} = that.state; 
            totalSeconds += 1; 
            that.setState({totalSeconds: totalSeconds});
        }
        this.ticker = setInterval(tick, 1000);
    
        console.log('timer started'); 
    },
    onStop: function(e) {
        console.log('stopping');
        clearInterval(this.ticker);
        this.ticker = undefined; 
        this.setState({totalSeconds: 0});
        console.log('stopped');        
    },
    render: function(){
        var { totalSeconds } = this.state;
        
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <Clock totalSeconds={totalSeconds} />
                <div>
                    <button className='button expanded hollow' onClick={this.onStart}>Start</button>
                    <button className='button expanded hollow' onClick={this.onStop}>Clear</button>
                </div>
            </div>
        ) 
    }
});

module.exports = Timer; 