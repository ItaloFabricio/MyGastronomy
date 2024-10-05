import express from 'express';
import OrdersControllers from '../controllers/plates.js';

const ordersRouter = express.Router();

const ordersControllers = new OrdersControllers();

ordersRouter.get('/', async (req, res) => {
    const { success, statusCode, body  } = await ordersControllers.getPlates();

    res.status(statusCode).send({ success, statusCode, body })
})


ordersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body  } = await ordersControllers.deletePlates(req.params.id);

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.post('/', async (req, res) => {
    const { success, statusCode, body  } = await ordersControllers.addPlate(req.body);

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.patch('/:id', async (req, res) => {
    const { success, statusCode, body  } = await ordersControllers.updatePlates(req.params.id, req.body);

    res.status(statusCode).send({ success, statusCode, body })
})

export default ordersRouter;