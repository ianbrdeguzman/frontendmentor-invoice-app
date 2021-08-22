export interface Address {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

export interface Items {
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export interface Invoice {
    clientAddress: Address;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: Items[];
    paymentDue: string;
    senderAddress: Address;
    status: string;
    total: number;
}

export interface InvoiceSlice {
    loading: boolean;
    error: string | unknown;
    invoices: Invoice[];
    invoice: Invoice | undefined;
    filter: string;
}

export interface InvoiceCardProps {
    clientAddress: Address;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: Items[];
    paymentDue: string;
    senderAddress: Address;
    status: string;
    total: number;
}
