console.log('dojour-test.js: line 1');
import Dojour from "../../lib/dojour.js";

describe("Dojour", function() {
  let dojour = {};

  const testEvent = '15464';

  beforeEach(function() {
    dojour = new Dojour();
  });

  it("should be able to GET an event", function() {
    let r = dojour.getEvent(testEvent);
    console.log('dojour-test.js: break here');
  });
});
