import ClassificationService from '../../services/classification.service';
export class Controller {
  all(req, res) {
    ClassificationService
    .all()
    .then(r => res.json(r));
  }

  create(req, res) {
    ClassificationService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/classification/${r.id}`)
        .json(r))
  }

  put(req, res) {
    ClassificationService
      .put(req.params.id_classification, req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/classification/${r.id}`)
        .json(r))
  }

  delete(req, res) {
    ClassificationService
      .delete(req.params.id_classification)
      .then(r => res
        .status(201)
        .location(`/api/v1/classification/${r.id}`)
        .json(r))
  }
}
export default new Controller();
