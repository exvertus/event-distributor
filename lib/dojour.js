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
            url: this.events+'9999'
        }).json().then(response => {
            console.log('Harry I reached the top')
            // console.log(`Response is ${response.body}`)
            this.data = response
        });
        console.log(`The data is - ${this.data.description}`)
        console.log('end of get event');
    }
}

export default Dojour;
