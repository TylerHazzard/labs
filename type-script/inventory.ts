import { Product } from './products';

export interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];

const calcInventoryValue = (inventory: InventoryItem[]): number => {
    if (inventory.length === 0) {
        return 0;
    }

    let totalValue = 0;
    for (let item of inventory) {
        totalValue += item.product.price * item.quantity;
    }

    return totalValue;
}

const inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);