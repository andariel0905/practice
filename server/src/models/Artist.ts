const Mongoose = require('mongoose');

const artistSchema = new Mongoose.schema({
    uri: { type: String, required: true},
    name: { type: String, required: true },
    avatarImage: { type: Object, required: true}
});

const Artist = Mongoose.model("Usuario", artistSchema);
export default Artist;