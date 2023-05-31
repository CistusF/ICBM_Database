import { Schema, models, model, Error } from 'mongoose'

const AccountSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

// Should add Users Post Data

export const accountModel = models.accounts || model('accounts', AccountSchema);