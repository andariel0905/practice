const Mongoose = require('mongoose');

const artistSchema = new Mongoose.Schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    avatarImage: { type: Object, required: true}
});

const Artist = Mongoose.model("Artist", artistSchema);
export default Artist;