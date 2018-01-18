var React = require('react');

var CountDownForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var {handleSetCountDown} = this.props; 
        var totalSeconds = this.refs.secondsField.value; 
        handleSetCountDown(totalSeconds);
    },
    render: function() { 
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref="secondsField" type="text" placeholder="total number of seconds" />
                    <button className="button expanded hollow">Start</button>
                </form>
            </div>
        );

    }
})

module.exports = CountDownForm; 

