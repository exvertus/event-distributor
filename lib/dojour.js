console.log('dojour.js: line 1')
import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
    }
    async getEvent(eventId) {
        const eventUrl = this.events + eventId;
        try {
            const response = await got(eventUrl);
            console.log('dojour.js: past response');
        } catch (error) {
            console.log("dojour.js: hit error condition");
            console.error(error.response.body);
        }
    }
}

export default Dojour;
