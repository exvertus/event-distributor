console.log('dojour.js sanity')
import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.getResponse = {};
    }
    async getEvent(eventId) {
        const eventUrl = this.events + eventId;
        this.getResponse = await got(eventUrl).json();
    }
}

// module.exports = Dojour;
export default Dojour;
