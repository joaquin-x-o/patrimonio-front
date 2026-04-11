import type { ProductLightResponse } from "../../interfaces/productResponses";
import { mockProductsList } from "../../mock/products/productListMock";

interface PaginationParams {
    page?: number,
    limit?: number
}

// obtener productos
export const getProducts = ({
    page = 1,
    limit = 5
}: PaginationParams = {}) => {


    let products = [...mockProductsList];

    // paginacion

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = products.slice(startIndex, endIndex);

    return {
        data: paginatedData,
        total: products.length,
        currentPage: page,
        totalPages: Math.ceil(products.length / limit)
    };
};


// buscar un producto 
export const searchProductsLight = (query: string, mock: ProductLightResponse[]): ProductLightResponse[] => {
    if (!query) return mock;

    const lowerQuery = query.toLowerCase();

    return mock.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.productCode.toString().includes(lowerQuery)
    );
};