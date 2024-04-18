const urlProductsBase = 'https://dummyjson.com/products';

const getAllProducts = async () => {
    const response = await fetch(urlProductsBase);
    const result = await response.json();
    return result.products;
};

const getProductById = (id: number) => {
    return fetch(`${urlProductsBase}/${id}`);
}

export {
    getAllProducts,
    getProductById
}