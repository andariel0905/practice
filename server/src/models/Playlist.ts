const Mongoose = require('mongoose');

const playlistSchema = new Mongoose.Schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: Array, required: true},
    image: { type: Object, required: true},
    owner: { type: String, required: true}
});

const Playlist = Mongoose.model("Playlist", playlistSchema);
export default Playlist;