import * as express from 'express';
import controller from './controller'

export default express.Router()
    .post('/', ::controller.create)
    .get('/', ::controller.all)
    .put('/:id_inventory', ::controller.put)
    .delete('/:id_inventory', ::controller.delete);
