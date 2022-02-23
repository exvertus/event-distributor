import got from 'got';

class Dojour {
    constructor() {
        this.apiRoot = 'https://dojour.us/api/';
        this.events = this.apiRoot + 'events/';
        this.data = {};
    }
    
    getEvent(eventId) {
        // Get single dojour event and load obj for it to this.data
        // Tom TODO: Play more with async and got lib in independent sandbox
        async function getData() {
            let gotPromise = got({
                url: 'https://httpbin.org/anything'
            }).json();
            this.data = await gotPromise;
            console.log("end of getData");
        };
        let dataPromise = getData();
        dataPromise.then(
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
