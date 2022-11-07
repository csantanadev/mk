import { Product } from './Product';

test('Should create a product instance', function () {

    const prd = new Product({ name: 'Monitor LG', brand: 'LG', seller: 'Magalu', slug: 'monitor-lg-xtr14', price: 690.50 });

    expect(prd).toMatchObject<Product>({ ...prd });


});