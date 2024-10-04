import PlatesDataAccess from '../dataAcess/plates.js';
import { ok, serverError } from '../helpers/httpResponse.js';

export default class PlatesControllers {
    constructor() {
        this.dataAcess = new PlatesDataAccess();
    }

    async getPlates() {
        try {
            const plates = await this.dataAcess.getPlates();

            return ok(plates);
        } catch (error) {
            return serverError(error);
        }
    }

    async getAvailablePlates() {
        try {
            const plates = await this.dataAcess.getAvaliablePlates();

            return ok(plates);
        } catch (error) {
            return serverError(error);
        }
    }

    async deletePlates(plateId) {
        try {
            const result = await this.dataAcess.deletePlates(plateId);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async addPlate(plateData) {
        try {
            const result = await this.dataAcess.addPlate(plateData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }

    async updatePlates(plateId, plateData) {
        try {
            const result = await this.dataAcess.updatePlates(plateId, plateData);

            return ok(result);
        } catch (error) {
            return serverError(error);
        }
    }
}