import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.data = {};
    }
    
    async getEvent(eventId) {
        // Get single dojour event and load obj for it to this.data
        // Tom TODO: Play more with async and got lib in independent sandbox
        await got({
            url: 'https://httpbin.org/anything'
        }).then(response => {
            console.log('Harry I reached the top')
            console.log(`Response is ${response.body}`)
            this.data = response.body
        });
        console.log(`The data is - ${JSON.stringify(this.data)}`)
        console.log('end of get event');
    }
}

export default Dojour;
