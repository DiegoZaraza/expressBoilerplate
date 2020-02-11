import l from '../../common/logger';
const _ = require('underscore');


const inventories = require('../../jsons/inventories.json')
let id_inventory = inventories.length + 10000

export class InventoryService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(inventories);
  }

  create(bar_code, quantity) {
    const inventory = {
      id_inventory: id_inventory++,
      bar_code,
      quantity
    };

    inventories.push(inventory);
    l.info(inventory, `${this.constructor.name}.create()`);

    return Promise.resolve(inventories);
  }

  put(id, bar_code, quantity) {    
    _.each(inventories, (inventory, i) => {
      if(inventory.id_inventory == id) {
        inventory.bar_code = bar_code;
        inventory.quantity = quantity;
      }
    });
    l.info(id, `${this.constructor.name}.put()`);
    return Promise.resolve(inventories);
  }

  delete(id) {
    _.each(inventories, (inventory, i) => {
      if(inventory.id_inventory == id) {
        inventories.splice(i, 1);
      }
    });
    l.info(id, `${this.constructor.name}.delete()`);
    return Promise.resolve(inventories);
  }
}

export default new InventoryService();
