const Mongoose = require('mongoose');

const trackSchema = new Mongoose.schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    album: { type: Object, required: true},
    artists: { type: Array, required: true},
    duration: { type: Number, required: true}
});

const Track = Mongoose.model("Usuario", trackSchema);
export default Track;