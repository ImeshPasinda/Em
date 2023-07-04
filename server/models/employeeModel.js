const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({

    name: { type: String, require },
    email: { type: String, require },
    age: {type: Number, require},
    portfolioLink: { type: String, require },
    jobPosition: { type: String, require },
    introduction: { type: String, require },
    
}, {

    timestamps: true,

})

module.exports = mongoose.model('employees', employeeSchema)