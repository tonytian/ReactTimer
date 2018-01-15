var React = require('react');

var ReactDOM = require('react-dom');

var expect = require('expect'); 
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils'); 

var Clock  = require('Clock'); 

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    }); 

    describe('format seconds', () => {
        it('0 seconds should be formated to: 00:00', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 0
            var expected = '00:20'; 
            var actual = clock.formatSeconds(20); 
            expect(actual).toBe(expected); 
        }); 
        it('20 seconds should be formated to: 00:20', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 0
            var expected = '00:00'; 
            var actual = clock.formatSeconds(0); 
            expect(actual).toBe(expected); 
        }); 
        it('60 seconds should be formated to: 01:00', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 0
            var expected = '01:00'; 
            var actual = clock.formatSeconds(60); 
            expect(actual).toBe(expected); 
        }); 
        it('3600 seconds should be formated to: 60:00', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>); 0
            var expected = '60:00'; 
            var actual = clock.formatSeconds(3600); 
            expect(actual).toBe(expected); 
        }); 
    }); 

    describe('test render', () => [
        it('test render method',  () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
            var $el = $(ReactDOM.findDOMNode(clock)); 
            var actualText = $el.find('.clock-text').text();
            
            expect(actualText).toBe('01:02');
        })
    ])
}); 

