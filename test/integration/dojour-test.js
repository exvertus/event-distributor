console.log('sanity debugger here');
import Dojour from "../../lib/dojour.js";

describe("Dojour", function() {
  let dojour = {};

  const testEvent = '15464';

  beforeEach(function() {
    dojour = new Dojour();
  });

  it("should be able to GET an event", function() {
    let r = dojour.getEvent(testEvent);
    r.then(
        function(value) {console.log('success');},
        function(error) {console.log('error')}
    );
    console.log('break here');
  });
});
