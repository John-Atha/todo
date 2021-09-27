const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const params = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb://localhost/todo",
            params,
        );
        console.log("Connected to database.");
    }
    catch (error) {
        console.log(`Could not connect to database.`);
        console.log(error);
    }
}