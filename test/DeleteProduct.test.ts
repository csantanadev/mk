import axios from 'axios';

test("Should be able to delete a product", async function () {

    const response = await axios({
        url: "http://localhost:3333/products/",
        method: "get"
    });

    const { _id, slug } = response.data[response.data.length - 1];

    await axios({ url: `http://localhost:3333/products/${_id}`, method: "delete"});

    const responseProd = await axios({
        url: `http://localhost:3333/products/${slug}`,
        method: "get"
    });

    const product = responseProd.data;
    expect(product).toBeNull();

});