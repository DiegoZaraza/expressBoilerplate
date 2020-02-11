import ProductService from '../../services/product.service';
export class Controller {
  all(req, res) {
    ProductService
    .all()
    .then(r => res.json(r));
  }

  create(req, res) {
    ProductService
      .create(req.body.name_product, req.body.value, req.body.id_classification, req.body.id_inventory)
      .then(r => res
        .status(201)
        .location(`/api/v1/product/${r.id}`)
        .json(r))
  }

  put(req, res) {
    ProductService
      .put(req.params.id_product, req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/product/${r.id}`)
        .json(r))
  }

  delete(req, res) {
    ProductService
      .delete(req.params.id_product)
      .then(r => res
        .status(201)
        .location(`/api/v1/product/${r.id}`)
        .json(r))
  }
}
export default new Controller();
