import Dojour from "../../lib/dojour.js";

describe("Dojour", function() {
  let dojour = {};

  const testEvent = '15464';
  const junkEvent = '1234567890000000'

  beforeEach(function() {
    dojour = new Dojour();
  });

  it(".getEvent should populate .data", async function() {
    await dojour.getEvent(testEvent);
    // TODO: Refine assertion to look for key piece of data.
    const dataLength = Object.keys(dojour.data).length;
    expect(dataLength).toBeGreaterThan(0);
  });

  // TODO: Bring this test to life... not understanding something about error handling maybe?
  it(".getEvent should raise an error if it 404s or similar", async function() {
    // TODO: We should shift this to a unit test ASAP so we aren't hitting
    // Dojour needlessly. Might take some figuring out.
    // expect(await dojour.getEvent(junkEvent)).toThrowError(HTTPError);
    dojour.events = 'https://this.is.meant.to.http.fail.for.test.com/events/none';
    expect(async function() { await dojour.getEvent(junkEvent); }).toThrowError();
  });
});
