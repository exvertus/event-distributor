import got from 'got';

class Dojour {
    constructor(eventId) {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.data = {};
        if (eventId) {
            await this.getEvent(eventId);
        };
    }
    
    async getEvent(eventId) {
        // Get single dojour event and load obj for it to this.data
        // Tom TODO: Play more with async and got lib in independent sandbox
        const options = {
            url: this.events + eventId
        }
        await got(options).json().then(response => {
            this.data = response;
            console.info(`Got data for ${options.url}`)
        }).catch(err => {
            console.error(`Could not get ${options.url}`);
            console.error(err);
            throw(err);
        });
    }
}

export default Dojour;
