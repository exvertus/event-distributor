// TODO: Fine as a job for now, but should run server code later to run as svc.

// Get single event from Dojour and distribute it to other platforms.
import Dojour from "./lib/dojour";
import Dabble from "./lib/dabble";
import Do512 from "./lib/do-512";
import EventBrite from "./lib/event-brite";
import Facebook from "./lib/facebook";
import Google from "./lib/google";
import Verlocal from "./lib/verlocal";

const dojour = new Dojour(process.env.EVENT_ID);
const dabble = new Dabble(dojour).postEvent();
const do512 = new Do512(dojour).postEvent();
const eventBrite = new EventBrite(dojour).postEvent();
const facebook = new Facebook(dojour).postEvent();
const google = new Google(dojour).postEvent();
const verlocal = new Verlocal(dojour).postEvent();
