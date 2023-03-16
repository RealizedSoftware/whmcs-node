export interface UpdateClientAddonRequest {
  id: number;
  status?: string;
  terminationDate?: Date;
  addonid?: number;
  name?: string;
  setupfee?: number;
  recurring?: number;
  billingcycle?: string;
  nextduedate?: Date;
  nextinvoicedate?: Date;
  notes?: string;
}

export interface UpdateClientAddonResponse {
  result: string;
  id: number;
}
