export default class Gui {
  constructor() {
    this.cardNumber = document.querySelector('[name=card_number]');
    this.form = document.querySelector('.check_card form');
    this.widget = document.querySelector('.widget');
    this.paysystem = document.querySelector('.paysystem');
    this.message = document.querySelector('.message');
  }

  drawUI() {
    this.cardNumber.value = '';
  }

  // drawCardImages(list) {
  //   list.forEach((elem) => {
  //     const img = document.createElement('img');
  //     img.src = `./assets/${elem.toLowerCase().replaceAll(' ', '')}.gif`;
  //     img.className = 'opacityimg';
  //     this.paysystem.appendChild(img);
  //   });
  // }

  getCardNumber() {
    return this.cardNumber.value.split(' ').join('');
  }

  showMessage(message) {
    this.message.innerHTML = `${message}`;
  }

  // showPaySystem(name) {
  //   const filename = `${name.toLowerCase().replaceAll(' ', '')}.gif`;
  //   const imgsArr = [...this.paysystem.children];
  //   const ind = imgsArr.findIndex((elem) => elem.src.includes(filename));
  //   imgsArr[ind].className = '';
  // }

  clear() {
    this.message.innerHTML = '';
    this.message.className = 'message';
    [...this.paysystem.children].forEach((el, ind) => {
      this.paysystem.children[ind].className = 'opacityimg';
    });
  }
}
