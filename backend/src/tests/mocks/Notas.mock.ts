import { INotaFiscal } from "../../interfaces";

const NotasFiscais:INotaFiscal[] = [
  {
    orderNumber: "18153",
    buyerName: "SACADO 001",
    providerName: "CEDENTE 002",
    emissionDate: "30/10/2020",
    value: "198450",
    orderStatus: "Pendente de confirmação"
  },
  {
    orderNumber: "18157",
    buyerName: "SACADO 001",
    providerName: "CEDENTE 002",
    emissionDate: "04/11/2020",
    value: "168850",
    orderStatus: "Pendente de confirmação"
  },
  {
    orderNumber: "18184",
    buyerName: "SACADO 001",
    providerName: "CEDENTE 002",
    emissionDate: "10/11/2020",
    value: "222795",
    orderStatus: "Recebida e confirmada"
  }
];

export default NotasFiscais;
