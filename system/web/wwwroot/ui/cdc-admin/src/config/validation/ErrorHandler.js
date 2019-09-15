import PubSub from 'pubsub-js';

export default class ErrorHandler {
    publishError(errors) {
        errors.forEach(error => {
            PubSub.publish("form-error-validation", error);
        });
    }
}