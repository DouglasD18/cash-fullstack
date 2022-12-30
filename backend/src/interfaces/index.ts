export interface IOrder {
  id: number,
  orderNumber: string,
  buyerId: number,
  providerId: number,
  value: string,
  orderStatusBuyer: string,
  emissionDate: string,
}

export interface INotaFiscal {
  id: number,
  orderNumber: string,
  buyerName: string,
  providerName: string,
  emissionDate: string,
  value: string,
  orderStatus: string,
}