export interface IOrder {
  orderNumber: string,
  buyerId: number,
  providerId: number,
  value: string,
  orderStatusBuyer: string,
  emissionDate: string,
}

export interface INotaFiscal {
  orderNumber: string,
  buyerName: string,
  providerName: string,
  emissionDate: string,
  value: string,
  orderStatus: string,
}