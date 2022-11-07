import axios from 'axios';

test("Should update a product", async function () {

    const response = await axios({
        url: "http://localhost:3333/products/",
        method: "get"
    });

    const { _id, slug }  = response.data[0];

    await axios({
        url: `http://localhost:3333/products/${_id}`,
        method: "put",
        data: {
            name: "Celular Sansung S10 FE modificado",
        }
    });
    
    const responseProd = await axios({
        url: `http://localhost:3333/products/${slug}`,
        method: "get"
    });

    const product = responseProd.data;
    expect(product.name).toBe('Celular Sansung S10 FE modificado')

});