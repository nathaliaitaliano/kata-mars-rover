const assert = require('chai').assert;
const MarsRover = require('../app/MarsRover.js');

describe('rover position', function() {
    it('initial position is 0,0', function() {
        const marsRover = new MarsRover();
        let initialPosition = [0,0];

        const result = marsRover.getPosition();

        assert.sameDeepMembers(result, initialPosition);
    });

    it('initial direction is north', function(){
        const marsRover = new MarsRover();
        let initialDirection = 'north';

        const result = marsRover.getDirection();

        assert.equal(result, initialDirection);
    });

    it('Rover can turn 90° to the right', function () {
        const marsRover = new MarsRover();
        let spin = [{'right': 90}];

        const result = marsRover.turn();

        assert.includeDeepMembers(result, spin);
    });

    it('Rover can turn -90° to the left', function () {
        const marsRover = new MarsRover();
        let spin = [{'left': -90}];
        const result = marsRover.turn();
        assert.includeDeepMembers(result, spin);
    })
});