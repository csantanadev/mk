import axios from 'axios';

test("Should create a product", async function () {

    const code = `${Math.floor(Math.random() * 1000)}`;

    await axios({
        url: "http://localhost:3333/products",
        method: "post",
        data: {
            name: "Celular Sansung S10 FE",
            brand: "Sansung",
            seller: "Sansung",
            slug: code,
            price: 1895
        }
    });

    const response = await axios({
        url: `http://localhost:3333/products/${code}`,
        method: "get"
    });

    const product = response.data;
    expect(product.name).toBe('Celular Sansung S10 FE')
    expect(product.brand).toBe('Sansung')
    expect(product.seller).toBe('Sansung')
    expect(product.slug).toBe(code)
    expect(product.price).toBe(1895)

});