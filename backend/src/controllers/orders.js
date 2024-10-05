import { ok, serverError } from '../helpers/httpResponse.js';

export default class PlatesControllers {
    constructor() {
        this.dataAcess = new OrdersDataAccess();
    }

    async getOrders() {
        try {
            const orders = await this.dataAcess.getOrders();

            return ok(orders);
        } catch (error) {
            return serverError(error);
        }
    }

    async deleteOrders(orderId) {
        try {
            const result = await this.dataAcess.deleteOrders(orderId);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async addOrder(orderData) {
        try {
            const result = await this.dataAcess.addOrder(orderData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async updateOrders(orderId, orderData) {
        try {
            const result = await this.dataAcess.updateOrders(orderId, orderData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}