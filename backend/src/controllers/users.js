import UsersDataAccess from "../dataAcess/users.js";
import { ok, serverError } from '../helpers/httpResponse.js';

export default class UsersControllers {
    constructor() {
        this.dataAcess = new UsersDataAccess();
    }

    async getUsers() {
        try {
            const users = await this.dataAcess.getUsers();

            return ok(users);
        } catch (error) {
            return serverError(error);
        }
    }
}