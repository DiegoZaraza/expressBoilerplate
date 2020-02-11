import InventoryService from '../../services/inventory.service';
export class Controller {
  all(req, res) {
    InventoryService
    .all()
    .then(r => res.json(r));
  }

  create(req, res) {
    InventoryService
      .create(req.body.bar_code, req.body.quantity)
      .then(r => res
        .status(201)
        .location(`/api/v1/inventory/${r.id}`)
        .json(r))
  }

  put(req, res) {
    InventoryService
      .put(req.params.id_inventory, req.body.bar_code, req.body.quantity)
      .then(r => res
        .status(201)
        .location(`/api/v1/inventory/${r.id}`)
        .json(r))
  }

  delete(req, res) {
    InventoryService
      .delete(req.params.id_inventory)
      .then(r => res
        .status(201)
        .location(`/api/v1/inventory/${r.id}`)
        .json(r))
  }
}
export default new Controller();
