export interface GetProductsRequest {
    pid?: string;
    gid?: string;
    module?: string;
}

export interface GetProductsResponse {
    result: string;
    totalresults: number;
    startnumber: number;
    numreturned: number;
    products: { product: Product[] };
}

export interface Product {
    pid: number;
    gid: number;
    type: string;
    name: string;
    description: string;
    module: string;
    paytype: string;
    pricing: Pricing;
    customfields: object;
    configoptions: object;
}

export interface Pricing {
    USD: {
        "prefix": "$",
        "suffix": "USD",
        "msetupfee": string,
        "qsetupfee": string,
        "ssetupfee": string,
        "asetupfee": string,
        "bsetupfee": string,
        "tsetupfee": string,
        "monthly": string,
        "quarterly": string,
        "semiannually": string,
        "annually": string,
        "biennially": string,
        "triennially": string,
    }
}
