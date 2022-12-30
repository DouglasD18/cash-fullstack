import { INotaFiscal } from "../../interfaces";
import ThrowError from "../../middlewares/ThrowError";
import { IOrder } from '../../interfaces/index';
import Buyer from '../../database/models/Buyers.model';
import Provider from '../../database/models/Providers.model';
import Order from "../../database/models/Orders.model";
export class NotaFiscalService {
  static decodeStatus(status: number): string {
    if (status < 0 || status > 8) ThrowError("badRequest", "Status inválid!");

    if (status === 0) {
      return "Pendente de confirmação";
    } else if (status === 1) {
      return "Pedido confirmado";
    } else if (status === 2) {
      return "Não reconhece o pedido";
    } else if (status === 3) {
      return "Mercadoria não recebida";
    } else if (status === 4) {
      return "Recebida com avaria";
    } else if (status === 5) {
      return "Devolvida";
    } else if (status === 6) {
      return "Recebida com devolução parcial";
    } else if (status === 7) {
      return "Recebida e confirmada";
    } else  {
      return "Pagamento Autorizado";
    } 
  }

  static async getProviderById(id: number): Promise<string> {
    const provider = await Provider.findOne({ where: { id }});

    if (!provider) return ThrowError("notFound", "Entity not found!");

    const { name } = provider;

    return name;
  }

  static async getBuyerById(id: number): Promise<string> {
    const buyer = await Buyer.findOne({ where: { id }});

    if (!buyer) return ThrowError("notFound", "Entity not found!");

    const { name } = buyer;

    return name;
  }

  static async getAllOrders(): Promise<IOrder[]> {
    const orders = await Order.findAll();

    const ordersValues = orders.map((order) =>({ 
      id: order.id,
      orderNumber: order.orderNumber,
      buyerId: order.buyerId,
      providerId: order.providerId,
      value: order.value,
      orderStatusBuyer: order.orderStatusBuyer,
      emissionDate: order.emissionDate,
    }));

    return ordersValues as IOrder[];
  }

  static async getAllNotaFiscal(): Promise<INotaFiscal[]> {
    const orders = await this.getAllOrders();

    const notas = Promise.all(orders.map(async (order) => {
      const statusBuyer = Number(order.orderStatusBuyer);
      const buyerId = Number(order.buyerId);
      const providerId = Number(order.providerId);
      const orderStatus = this.decodeStatus(statusBuyer);
      const buyerName = await this.getBuyerById(buyerId);
      const providerName = await this.getProviderById(providerId);
      return {
        id: order.id,
        orderNumber: order.orderNumber,
        buyerName,
        providerName,
        emissionDate: order.emissionDate,
        value: order.value,
        orderStatus,
      }
    }));

    console.log("Notas!", notas);

    return notas as unknown as INotaFiscal[];
  }
}

// orderNumber, buyer-name, provider-name, order-emissionDate, order-value, order-orderStatusBuyer(Decodificado)