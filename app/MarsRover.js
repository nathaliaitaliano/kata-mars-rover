module.exports = class MarsRover {
    getPosition() {
        const initialPosition = [0, 0];
        return initialPosition;
    }

    getDirection() {
        const initialDirection = 'north';
        return initialDirection;
    }

    turn() {
        const spin = [{'right':90}, {'left':-90}];
        return spin;
    }
};