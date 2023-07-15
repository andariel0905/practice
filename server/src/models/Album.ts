const Mongoose = require('mongoose');

const albumSchema = new Mongoose.schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    artists: { type: Array, required: true},
    coverArt: { type: Object, required: true},
    date: { type: Number, required: true}
});

const Album = Mongoose.model("Usuario", albumSchema);
export default Album;