import * as express from 'express';
import controller from './controller'

export default express.Router()
    .post('/', ::controller.create)
    .get('/', ::controller.all)
    .put('/:id_classification', ::controller.put)
    .delete('/:id_classification', ::controller.delete);
