'use strict';

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
// Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove i видаляє його з масиву товарів у приватній властивості items об'єкта.

class Storage {
  #item;
  constructor(item) {
    this.#item = item;
  }
  getItems() {
    return this.#item;
  }
  addItem(newItem) {
    this.#item.push(newItem);
  }
  removeItem(itemToRemove) {
    const itemToRemoveIndex = this.#item.indexOf(itemToRemove);
    if (itemToRemoveIndex !== -1) {
      this.#item.splice(itemToRemoveIndex, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
