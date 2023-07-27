export interface UpdateInvoiceRequest {
  invoiceid: number;
  status?: string;
  paymentmethod?: string;
  taxrate?: number;
  taxrate2?: number;
  credit?: number;
  date?: string;
  duedate?: string;
  datepaid?: string;
  notes?: string;
  itemdescription?: {[key: number]: string};
  itemamount?: {[key: number]: number};
  itemtaxed?: {[key: number]: boolean};
  newitemdescription?: {[key: number]: string};
  newitemamount?: {[key: number]: number};
  newitemtaxed?: {[key: number]: boolean};
  deletelineids?: number[];
  publish?: boolean;
  publichandsendemail?: boolean;
}

export interface UpdateInvoiceResponse {
  result: string;
  invoiceid: number;
}
