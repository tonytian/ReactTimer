var React = require('react'); 

var Clock = React.createClass({
    getInitialProps: function() {
        return {
            totalSeconds: 0
        }
    }, 
    padLeft: function(value) {
        return ('00' + value).slice(-2); 
    },
    formatSeconds: function(totalSeconds) {
        const seconds = totalSeconds % 60; 
        const minutes = Math.floor(totalSeconds / 60); 
        return this.padLeft(minutes) + ':' + this.padLeft(seconds); 
    }, 
    render: function() {
        var {totalSeconds} = this.props; 
        return (
            <div className="clock">
                <h3 className="clock-text">{this.formatSeconds(totalSeconds)}</h3>
            </div>
        )
    }
}); 

module.exports = Clock; 