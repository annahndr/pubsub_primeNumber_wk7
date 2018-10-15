const PubSub = {
  publish: function(channel, payload){ //channel is the place we want to publish on, and payload is the data we want published
    console.log(`published on channel: ${channel}, payload: ${payload}`); //TEST

      const event = new CustomEvent(channel, {
        detail: payload
    });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`subscribed to channel: ${channel}`); //TEST
    document.addEventListener(channel, callback);
  }
 }

 module.exports = PubSub;
