import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.data = {};
    }
    
    getEvent(eventId) {
        const eventPromise = async function() {
            await got.get('https://httpbin.org/anything').json();
        }();
        eventPromise.then(
            function(value) {
                console.log("never seem to hit this");
            },
            function(error) {
                console.log("never hit this either");
            }
        );
        console.log('end of get event');
    }
}

export default Dojour;
