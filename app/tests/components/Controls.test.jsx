var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    }); 

    describe('render', () => {
        it('pause button', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');
            expect($pauseButton).toExist();
            var $clearButton = $el.find('button:contains(Clear)');
            expect($clearButton).toExist();
        });

        it('start button', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');
            expect($startButton).toExist();
            var $clearButton = $el.find('button:contains(Clear)');
            expect($clearButton).toExist();
        });
    }); 
}); 