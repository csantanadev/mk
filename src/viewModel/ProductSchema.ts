import * as yup from 'yup';

let productSchema = yup.object().shape({
    name: yup.string().required(),
    brand: yup.string().required(),
    seller: yup.string().required(),
    slug: yup.string().required(),
    price: yup.number().required().positive()
})


export { productSchema };