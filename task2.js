console.log("task1 :")
const product = [
    { productName: "Laptop", price: 60000, quantity: 1 },
    { productName: "Phone", price: 50000, quantity: 2 },
    { productName: "Headphone", price: 2000, quantity: 2 }
]

console.log("task2 :")
const addProduct = (product, new_product) => {
    product.push(new_product)
}

addProduct(product, { productName: "Book", price: 500, quantity: 3 })
console.log(product)

console.log("task3 :")
const calculateTotal = (product) => {
    return product.reduce((total, product) => total + product.price * product.quantity, 0)
}

console.log(calculateTotal(product))

console.log("task4 :")
const removeProduct = (product_name) => {
    const index = product.findIndex((product) => product.productName === product_name)
    if (index !== -1) {
        product.splice(index, 1)
    }
}

removeProduct("Laptop")
console.log(product)

console.log("task5 :")
const productDetail = () => {
    product.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: ${price}, Quantity: ${quantity}`);
    });
};

productDetail()

console.log("task6 :")
product.forEach(product => {
    console.log(`Product : ${product.productName} , Price : ${product.price} , Quantity : ${product.quantity}`)
})