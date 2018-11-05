// export function helloWorld () { // export as function
// export default function helloWorld () {
//     console.log('Hello from events!');
// };

const Events = function () {};

Events.prototype.on = function (event, callback) {
    this.callbacks || (this.callbacks = {});
    this.callbacks[event] || (this.callbacks[event] = []);
    callback.bind(this);
    this.callbacks[event].push(callback);
};

Events.prototype.trigger = function (event) {
    let localCallbacks;
    if (this.callbacks && this.callbacks[event]){
        localCallbacks = this.callbacks[event];
        localCallbacks.forEach(function (callback) {
        });
    }
};

Events.prototype.off = function () {

};


export default Events;
window.Events = Events;