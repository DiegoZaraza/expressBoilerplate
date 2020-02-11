import l from '../../common/logger';
const _ = require('underscore');
var Constants = require('constants');

const classifications = require('../../jsons/classifications.json')
let id_classification = classifications.length + 100;

export class InventoryService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(classifications);
  }

  create(name_classification) {
    const classification = {
      id_classification: id_classification++,
      name_classification
    };

    classifications.push(classification);
    l.info(classification, `${this.constructor.name}.create()`);

    return Promise.resolve(classifications);
  }

  put(id, name_classification) {    
    _.each(classifications, (classification, i) => {
      if(classification.id_classification == id) {
        classification.name_classification = name_classification;
      }
    });
    l.info(id, `${this.constructor.name}.put()`);
    return Promise.resolve(classifications);
  }

  delete(id) {
    _.each(classifications, (classification, i) => {
      if(classification.id_classification == id) {
        classifications.splice(i, 1);
      }
    });
    l.info(id, `${this.constructor.name}.delete()`);
    return Promise.resolve(classifications);
  }
}

export default new InventoryService();
