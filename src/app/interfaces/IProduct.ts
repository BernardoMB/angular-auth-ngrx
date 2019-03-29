export interface IProduct {
    name: string;
    productId: string;
    kind: number;
    amounts: Array<{ amount: number, description: string }>;
    providerId: string;
    paymentCurrency: string;
    icon: string;
    extra: any;
    timeout: number;
    supportsReversal: boolean;
    supportsCheckStatus: boolean;
    observation: string;
}
