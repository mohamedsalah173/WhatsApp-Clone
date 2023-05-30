const mongoose = require('mongoose');

const UserSchema= mongoose.Schema({
    iss: {
        type:String
    },
    nbf: {
        type:String,
    },
    aud: {
        type:String,
    },
    sub: {
        type:String,
    },
    email: {
        type:String,
    },

    email_verified: {
        type:Boolean,
    },

    azp: {
        type:String,
    },
    name: {
        type:String,
    },

    picture: {
        type:String,
    },
    given_name: {
        type:String,
    },
    family_name: {
        type:String,
    },
    iat: {
        type:Number,
    },
    exp: {
        type:Number,
    },
    jti: {
        type:String
    }

});

const User = mongoose.model('User',UserSchema);

module.exports = User;

