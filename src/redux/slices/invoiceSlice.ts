import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
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

interface Invoice {
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
    invoices: Invoice[];
}

// Define the initial state using that type
const initialState: InvoiceSlice = {
    invoices: [],
};

export const invoiceSlice = createSlice({
    name: 'invoice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setInvoices: (state, action: PayloadAction<Invoice[]>) => {
            state.invoices = [...action.payload];
        },
    },
});

export const { setInvoices } = invoiceSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default invoiceSlice.reducer;
