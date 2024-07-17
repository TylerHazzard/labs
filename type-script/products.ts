export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'cookie', price: 2.00 },
    {name: 'turkey sub', price: 5.00 },
    {name: 'mtn dew', price: 2.50}
];

const calcAverageProductPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }
    let total: number = 0;
    for (let product of products) {
        total += product.price;
    }
    return total / products.length;
}

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);