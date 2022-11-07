import mongose from 'mongoose'

function omitPrivate(_, obj) {
    delete obj.__v;
    return obj;
}

let options = {
    toJSON: {
        transform: omitPrivate
    }
};

const ProductSchema = new mongose.Schema({
    name: {
        required: true,
        type: String
    },
    brand: {
        required: true,
        type: String
    },
    seller: {
        required: true,
        type: String
    },
    slug: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
}, options)

export = mongose.model('Products', ProductSchema);