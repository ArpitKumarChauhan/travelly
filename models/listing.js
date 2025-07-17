const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            //required: true
        },
        url: {
            type: String,
            //required: true,
            default: "https://images.pexels.com/photos/30052108/pexels-photo-30052108.jpeg",
            set: (v) =>
            v === ""
                ? "https://images.pexels.com/photos/30052108/pexels-photo-30052108.jpeg"
                : v,
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
