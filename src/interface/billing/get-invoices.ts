export interface GetInvoicesRequest {
  limitstart?: number;
  limitnum?: number;
  userid?: number;
  status?: string;
  orderby?: string;
  order?: string;
}

export interface GetInvoicesResponse {
  result: string;
  totalresults: number;
  startnumber: number;
  numreturned: number;
  invoices: {
    invoice: Invoice[]
  };
}

export interface Invoice {
  id: number;
  userid: number;
  firstname: string;
  lastname: string;
  companyname: string;
  invoicenum: number;
  date: Date;
  duedate: Date;
  datepaid: Date;
  subtotal: string;
  credit: number;
  tax: number;
  tax2: number;
  total: number;
  taxrate: number;
  taxrate2: number;
  status: string;
  paymentmethod: string;
  notes: string;
  currencycode: string;
  currencyprefix: string;
  currencysuffix: string;
}
