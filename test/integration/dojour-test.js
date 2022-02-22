describe("Dojour", function() {
    const Doujour = require('../../lib/dojour.js');
    const client = {};

    const test_event = '15464';

    beforeEach(function() {
        client = new Doujour.Client();
    });
    it("should be able to GET an event", function() {
        client.events.get(test_event);
        console.log('break here');
    });
});
