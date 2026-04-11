import type { ProductLightResponse } from "../../interfaces/productResponses";

// buscar un producto 
export const searchProductsLight = (query: string, mock: ProductLightResponse[]): ProductLightResponse[] => {
    if (!query) return mock;

    const lowerQuery = query.toLowerCase();

    return mock.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.productCode.toString().includes(lowerQuery)
    );
};