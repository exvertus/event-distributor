describe("Dojour", function() {
    const Dojour = require('../../lib/dojour.js');
    let dojour;

    const test_event = '15464';

    beforeEach(function() {
        dojour = new Dojour();
    });
    it("should be able to GET an event", function() {
        dojour.events.get(test_event);
        console.log('break here');
    });
});
