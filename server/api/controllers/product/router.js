import * as express from 'express';
import controller from './controller'

export default express.Router()
    .post('/', ::controller.create)
    .get('/', ::controller.all)
    .put('/:id_product', ::controller.put)
    .delete('/:id_product', ::controller.delete);
