const assert = require('chai').assert;
const MarsRover = require('../app/MarsRover.js');

describe('rover position', function() {
    it('initial position is 0,0', function() {
        const initialPosition = new MarsRover();
        let position = [0,0];
        const result = initialPosition.getPosition();
        assert.sameDeepMembers(result, position);
    });

    it('initial direction is north', function(){
        const initialDirection = new MarsRover();
        let direction = 'north';
        const result = initialDirection.getDirection();
        assert.equal(result, direction);
    });
    
});