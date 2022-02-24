import Dojour from "../../lib/dojour.js";

describe("Dojour", function() {
  let dojour = {};

  const testEvent = '15464';

  beforeEach(function() {
    dojour = new Dojour();
  });

  it(".getEvent should populate .data", async function() {
    await dojour.getEvent(testEvent);
    // TODO: Refine assertion to look for key piece of data.
    const dataLength = Object.keys(dojour.data).length;
    expect(dataLength).toBeGreaterThan(0);
  });
});
