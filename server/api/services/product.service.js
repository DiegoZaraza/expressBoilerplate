import l from '../../common/logger';
import ClassificationService from '../services/classification.service';
import InventoryService from '../services/inventory.service';

const _ = require('underscore');

const products = require('../../jsons/products.json')

let id_product = products .length + 1000;

export class ProductService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(products);
  }

  create(name_product, value, id_classification, id_inventory) {
    const product = {
      id_product: id_product++,
      name_product,
      value, 
      id_classification, 
      id_inventory
    };
    _.each(ClassificationService.classifications, (classification, i) => {
      console.log(ClassificationService.classifications)
      if(classification.id_classification == id_classification) {
        validationClasification = true;
      }
    });

    _.each(InventoryService.inventories, (inventory, i) => {
      console.log(inventory)
      if(inventory.id_inventory == id_inventory) {
        validationInventory = true;
      }
    });
    
    products.push(product);
    l.info(product, `${this.constructor.name}.create()`);
    return Promise.resolve(products);
  }

  put(id, name_product, value, id_classification, id_inventory) {    
    _.each(products, (product, i) => {
      if(product.id_product == id) {
        product.name_product = name_product;
        product.value = value;
        product.id_classification = id_classification;
        product.id_inventory = id_inventory
      }
    });
    l.info(id, `${this.constructor.name}.put()`);
    return Promise.resolve(products);
  }

  delete(id) {
    _.each(products, (product, i) => {
      if(product.id_product == id) {
        products.splice(i, 1);
      }
    });
    l.info(id, `${this.constructor.name}.delete()`);
    return Promise.resolve(products);
  }
}

export default new ProductService ();
