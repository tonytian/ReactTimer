var React = require('react');
var Clock = require('Clock'); 

var CountDown = () => {
    return (
        <div>
            <h1 className="page-title text-center">CountDown</h1>
            <Clock totalSeconds={129} />
        </div>
    )
}

module.exports = CountDown; 