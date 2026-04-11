import type { ProductResponse, ProductShortResponse } from "../../interfaces/productResponses";
import { productsMock } from "./productDetailsMock";


function mapProductToShortResponse(product: ProductResponse): ProductShortResponse {

    const productShortResponse = {
        productCode: product.productCode,
        name: product.name,
        category: product.category,
        physicalCondition: product.physicalCondition,
        registrationDate: product.registrationDate,
        status: product.status,
        isLegacy: product.isLegacy,
        statusUpdatedAt: product.statusUpdatedAt,
        reviewDaysPending: product.reviewDaysPending,
        dateUnusable: product.dateUnusable ?? "",
        needsCheckReview: product.needsCheckReview,
        lastCheckDate: product.lastCheckDate,
        pendingReviewReason: product.pendingReviewReason,
        unusableReason: product.unusableReason,
        isRetired: product.isRetired,
        department: product.department
    }

    return productShortResponse;
};

export const mockProductsList = productsMock.map(mapProductToShortResponse);

export const totalProducts = mockProductsList.length;