export class Product {

    public readonly _id?: string
    public name: string
    public brand: string
    public seller: string
    public slug: string
    public price: number

    constructor(props: Product) {

        Object.assign(this, props);
        
    }


}

