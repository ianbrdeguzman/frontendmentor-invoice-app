import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Invoice, InvoiceSlice } from '../../lib/types';

const initialState: InvoiceSlice = {
    loading: false,
    error: undefined,
    invoices: [],
    invoice: undefined,
    filter: 'all',
};

export const fetchInvoices = createAsyncThunk(
    'invoice/fetchInvoices',
    async () => {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        return data as Invoice[];
    }
);

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        findInvoice: (state, action: PayloadAction<string>) => {
            state.invoice = state.invoices.find(
                (invoice) => invoice.id === action.payload
            );
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInvoices.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            state.loading = false;
            state.invoices = action.payload;
        });
        builder.addCase(fetchInvoices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { findInvoice, setFilter } = invoiceSlice.actions;

export default invoiceSlice.reducer;
