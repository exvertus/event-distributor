const got = require('got');

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = {
            get: this.#get_event
        }
    }
    async #get_event() {
        // Use got module here
    }
}

module.exports = Dojour;
