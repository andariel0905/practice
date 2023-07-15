const Mongoose = require('mongoose');

const playlistSchema = new Mongoose.schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: Array, required: true},
    image: { type: Object, required: true},
    owner: { type: String, required: true}
});

const Playlist = Mongoose.model("Usuario", playlistSchema);
export default Playlist;