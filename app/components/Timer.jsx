var React = require('react');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            minute: 0, 
            second: 0
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
            var {minute, second} = that.state; 
            second += 1; 
            if(second === 60) {
                second = 0; 
                minute += 1; 
            }
            if(minute === 60) {
                minute = 0; 
                second = 0; 
            }
            that.setState({minute: minute, second: second});
        }
        this.ticker = setInterval(tick, 1000);
    
        console.log('timer started'); 
    },
    onStop: function(e) {
        console.log('stopping');
        clearInterval(this.ticker);
        this.ticker = undefined; 
        this.setState({minute: 0, second: 0});
        console.log('stopped');        
    },
    render: function(){
        var {minute, second} = this.state;

        var padString = function(num) {
            return String('00' + num).slice(-2); 
        }; 
       
        
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <h3 className="text-center">{padString(minute)}:{padString(second)}</h3>
                <div>
                    <button className='button expanded hollow' onClick={this.onStart}>Start</button>
                    <button className='button expanded hollow' onClick={this.onStop}>Clear</button>
                </div>
            </div>
        ) 
    }
});

module.exports = Timer; 