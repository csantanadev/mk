import axios from 'axios';

test("Should be able to find a product by brand", async function () {

    const response = await axios({
        url: "http://localhost:3333/products/?brand=Sansung",
        method: "get"
    });

    const product = response.data;
    expect(product[0].brand).toContain("Sansung")

});


test("Should be able to find a product by brand and price", async function () {

    const response = await axios({
        url: "http://localhost:3333/products/?brand=Sansung&price=1-2000",
        method: "get"
    });

    const product = response.data;
    expect(product.length).toBeGreaterThan(0)

});

test("Should be able to find a product by seller, brand and price", async function () {

    const response = await axios({
        url: "http://localhost:3333/products/?seller=Sansung&brand=Sansung&price=1-2000",
        method: "get"
    });

    const product = response.data;
    expect(product.length).toBeGreaterThan(0)

});
