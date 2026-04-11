import type { ProductResponse } from "../../interfaces/productResponses";
import { ProductStatus, ProductCategory, ProductCondition } from "../../types/product.type";
import { getDepartmentByCode } from "../../services/departments/department.service.mock";

export const productsMock: ProductResponse[] = [

    //PAGINA UNO

    {
        productCode: 109,
        name: "Handy Motorola EP450",
        description: "Equipo de comunicación portátil utilizado por Guardia Urbana.",
        observation: "Se le acaba la batería muy rápido.",
        department: getDepartmentByCode("G1"),

        category: ProductCategory.ELECTRONICS,
        physicalCondition: ProductCondition.REGULAR,

        isLegacy: false,

        status: ProductStatus.LOST,
        statusUpdatedAt: "2026-02-20",

        reviewDaysPending: 0,

        registrationDate: "2025-05-10",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2026-01-15",
        pendingReviewReason: "Extraviado en operativo",

        createdAt: "2025-05-10T10:00:00",
        updatedAt: "2026-02-20T09:30:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 108,
        name: "Notebook Lenovo ThinkPad E14",
        description: "Notebook institucional para uso laboral.",
        observation: "Equipo en perfecto estado.",
        department: getDepartmentByCode("H3"),

        category: ProductCategory.IT,
        physicalCondition: ProductCondition.NEW,

        isLegacy: false,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-03-04",

        reviewDaysPending: 0,

        registrationDate: "2025-11-02",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2026-01-15",
        pendingReviewReason: null,

        createdAt: "2025-11-02T14:20:00",
        updatedAt: "2026-03-04T08:00:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 107,
        name: "Conos Reflectivos (Lote 50)",
        description: "Elementos de señalización vial.",
        observation: "",
        department: getDepartmentByCode("T1"),

        category: ProductCategory.URBAN_ELEMENTS,
        physicalCondition: ProductCondition.EXCELLENT,

        isLegacy: false,

        status: ProductStatus.IN_REVIEW,
        statusUpdatedAt: "2026-03-03",

        reviewDaysPending: 2,

        registrationDate: "2024-09-18",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: true,
        lastCheckDate: null,
        pendingReviewReason: "Reemplazar sus cintas reflectantes.",

        createdAt: "2024-09-18T09:15:00",
        updatedAt: "2026-03-03T11:00:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 106,
        name: "Generador Eléctrico Honda",
        description: "Generador utilizado para operativos municipales.",
        observation: "Motor quemado.",
        department: getDepartmentByCode("A1"),

        category: ProductCategory.MACHINERY,
        physicalCondition: ProductCondition.BROKEN,

        isLegacy: false,

        status: ProductStatus.UNUSABLE,
        statusUpdatedAt: "2026-03-01",

        reviewDaysPending: 0,

        registrationDate: "2023-06-12",

        dateUnusable: "2026-03-01",
        unusableReason: "Motor fundido",

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2026-02-22",
        pendingReviewReason: null,

        createdAt: "2023-06-12T10:00:00",
        updatedAt: "2026-03-01T16:00:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 105,
        name: "Bandera Argentina de Ceremonia",
        description: "Bandera utilizada en actos oficiales.",
        observation: "Defectos mínimos en el bordado del sol",
        department: getDepartmentByCode("C4"),

        category: ProductCategory.TEXTILES,
        physicalCondition: ProductCondition.GOOD,

        isLegacy: false,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-03-04",

        reviewDaysPending: 0,

        registrationDate: "2022-04-10",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: true,
        lastCheckDate: null,
        pendingReviewReason: null,

        createdAt: "2022-04-10T08:30:00",
        updatedAt: "2026-03-04T09:10:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    // PAGINA 2

    {
        productCode: 114,
        name: "Cuadro Óleo 'Paisaje Salteño'",
        description: "Obra artística utilizada para decoración institucional.",
        observation: "Muy frágil.",
        department: getDepartmentByCode("C4"),

        category: ProductCategory.ARTWORK,
        physicalCondition: ProductCondition.EXCELLENT,

        isLegacy: true,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-02-10",

        reviewDaysPending: 0,

        registrationDate: "2019-03-12",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2025-12-20",
        pendingReviewReason: null,

        createdAt: "2019-03-12T10:10:00",
        updatedAt: "2026-02-10T08:00:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 113,
        name: "Arco de Fútbol 11",
        description: "Arco reglamentario para cancha municipal.",
        observation: "",
        department: getDepartmentByCode("S5"),

        category: ProductCategory.SPORTS,
        physicalCondition: ProductCondition.BROKEN,

        isLegacy: false,

        status: ProductStatus.UNUSABLE,
        statusUpdatedAt: "2026-03-01",

        reviewDaysPending: 20,

        registrationDate: "2021-08-10",

        dateUnusable: "2026-03-01",
        unusableReason: "Estructura oxidada y cedida",

        retirementDate: null,
        isRetired: false,

        needsCheckReview: true,
        lastCheckDate: null,
        pendingReviewReason: null,

        createdAt: "2021-08-10T12:00:00",
        updatedAt: "2026-03-01T15:20:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 112,
        name: "Camioneta Toyota Hilux",
        description: "Vehículo asignado a operativos municipales.",
        observation: "Detalles en paragolpe",
        department: getDepartmentByCode("O2"),

        category: ProductCategory.VEHICLES,
        physicalCondition: ProductCondition.GOOD,

        isLegacy: false,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-02-28",

        reviewDaysPending: 10,

        registrationDate: "2024-05-20",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: true,
        lastCheckDate: "2025-11-20",
        pendingReviewReason: null,

        createdAt: "2024-05-20T09:40:00",
        updatedAt: "2026-02-28T17:00:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 111,
        name: "Escritorio de Madera Maciza",
        description: "Mobiliario de oficina institucional.",
        observation: "Mueble antiguo reutilizado.",
        department: getDepartmentByCode("A1"),

        category: ProductCategory.FURNITURE,
        physicalCondition: ProductCondition.REGULAR,

        isLegacy: true,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-01-15",

        reviewDaysPending: 0,

        registrationDate: "2010-07-11",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2026-01-21",
        pendingReviewReason: null,

        createdAt: "2010-07-11T08:00:00",
        updatedAt: "2026-01-15T11:30:00",

        user: {
            name: "María",
            surname: "González"
        }
    },

    {
        productCode: 110,
        name: "Impresora HP LaserJet",
        description: "Impresora láser para oficina administrativa.",
        observation: "Equipo funcionando correctamente.",
        department: getDepartmentByCode("H3"),

        category: ProductCategory.OFFICE_EQUIPMENT,
        physicalCondition: ProductCondition.GOOD,

        isLegacy: false,

        status: ProductStatus.ACTIVE,
        statusUpdatedAt: "2026-03-02",

        reviewDaysPending: 0,

        registrationDate: "2023-01-25",

        dateUnusable: null,
        unusableReason: null,

        retirementDate: null,
        isRetired: false,

        needsCheckReview: false,
        lastCheckDate: "2026-02-01",
        pendingReviewReason: null,

        createdAt: "2023-01-25T10:45:00",
        updatedAt: "2026-03-02T09:20:00",

        user: {
            name: "María",
            surname: "González"
        }
    }
];

// total productos
export const totalProducts = productsMock.length;


