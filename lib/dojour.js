import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.data = {};
    }
    
    async getEvent(eventId) {
    // TODO: Rework this part after honing test down.
    //     const eventUrl = this.events + eventId;
    //     console.log(eventUrl)
    //     try {
    //         const response = await got(eventUrl).json().then(
    //         console.log('dojour.js: past response'))
    //     } catch (error) {
    //         console.log("dojour.js: hit error condition");
    //         console.error(error.response.body);
    //     }
    }
}

export default Dojour;
