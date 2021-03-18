/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { checkCardLuhn, checkPaySystem, getPaysystemList } from './functions.js';
import Paysystems from './paysystems.js';

// const regeneratorRuntime = require('regenerator-runtime');

export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.iin = null;
    this.paySystemsList = null;
  }

  init() {
    this.gui.drawUI();
    this.fetchPaySystems();

    this.gui.form.addEventListener('submit', (e) => {
      this.gui.clear();
      this.checkNumber(e);
      this.identifyPaySystem(e);
    });
  }

  checkNumber(e) {
    e.preventDefault();
    const cardNumber = this.gui.getCardNumber().replaceAll(',', ' ');
    if (`${cardNumber}`.length < 8) {
      this.gui.showMessage('Minimum 8 digits');
      this.gui.message.classList.add('invalid');
      return;
    }
    const sum = checkCardLuhn(cardNumber);
    let result;
    if (sum === 0) result = { message: 'card is valid', class: 'valid' };
    else result = { message: 'not valid card', class: 'invalid' };

    this.gui.message.classList.add(result.class);
    this.gui.showMessage(result.message);
  }

  identifyPaySystem(e) {
    e.preventDefault();
    const cardNumber = this.gui.getCardNumber();
    const result = checkPaySystem(Paysystems.list, cardNumber);
    if (result) this.gui.showPaySystem(result);
  }

  fetchPaySystems() {
    const list = getPaysystemList(Paysystems.list);
    this.gui.drawCardImages(list);
  }

  // async fetchPaySystems() {
  //   const response = await fetch('./assets/paysystems.json');
  //   this.iin = await response.json();
  //   const list = (getPaysystemList(this.iin));
  //   this.gui.drawCardImages(list);
  // }
}
