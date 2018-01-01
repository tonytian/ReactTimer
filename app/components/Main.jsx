var React = require('react');

var Main = (props) => {
    return (
        <div>
            <p>main.jsx rendered</p>
            {props.children}
        </div>
    );
}

module.exports = Main;
