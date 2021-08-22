interface ClientAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

interface Items {
    name: string;
    price: number;
    quantity: number;
    total: number;
}

interface SenderAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

export interface Invoice {
    clientAddress: ClientAddress;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: Items[];
    paymentDue: string;
    senderAddress: SenderAddress;
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

interface ClientAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

interface Items {
    name: string;
    price: number;
    quantity: number;
    total: number;
}

interface SenderAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

export interface InvoiceCardProps {
    clientAddress: ClientAddress;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: Items[];
    paymentDue: string;
    senderAddress: SenderAddress;
    status: string;
    total: number;
}
