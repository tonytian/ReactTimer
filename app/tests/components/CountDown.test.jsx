var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $= require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown', () => {
    it('should exist', () => {
        expect(CountDown).toExist();
    }); 

    describe('render', () => {
        it('countdown form when stopped', () => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />);
            var $el = $(ReactDOM.findDOMNode(countdown)); 
            var $secondsField = $el.find('input'); 
            expect($secondsField).toExist();
        });

        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />); 
            countdown.handleSetCountDown(10); 
            expect(countdown.state.totalSeconds).toBe(10); 
            expect(countdown.state.countDownStatus).toBe('started');
            setTimeout(()=> {
                expect(countdown.state.totalSeconds).toBe(9); 
                done();
            }, 1001); 
        });

        it('should not count to less than 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />); 
            countdown.handleSetCountDown(1); 
            expect(countdown.state.totalSeconds).toBe(1); 
            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(0);
                done();
            }, 1500); 
        }); 

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />); 
            countdown.handleSetCountDown(3); 
            countdown.handleStatusChanged('paused'); 

            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(3); 
                expect(countdown.state.countDownStatus).toBe('paused');
                done();
            }, 1100); ;
        }); 

        it('should stop countdown on stop status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<CountDown />); 
            countdown.handleSetCountDown(3); 
            countdown.handleStatusChanged('stopped')
            
            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(0); 
                expect(countdown.state.countDownStatus).toBe('stopped'); 
                done();
            }, 1100);
        })

    })
})