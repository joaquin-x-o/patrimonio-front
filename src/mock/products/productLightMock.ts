import type { ProductResponse, ProductLightResponse } from "../../interfaces/productResponse";
import { productsMock } from "./productDetailsMock";


function mapProductToLightResponse(product: ProductResponse): ProductLightResponse {

    const productLightResponse = {
        productCode: product.productCode,
        name: product.name,
    }

    return productLightResponse;
};

export const mockProductsLight = productsMock.map(mapProductToLightResponse);

export const totalProducts = mockProductsLight.length;

