export default class Paysystems {
  constructor() {
    this.list = null;
  }

  static get list() {
    return {
      'American Express': '34, 37',
      'Diners Club International': 36,
      'Discover Card': '6011, 622126 - 622925, 644, 645, 646, 647, 648, 649, 65',
      JCB: '3528–3589',
      MIR: '2200–2204',
      Mastercard: '2221-2720, 51–55',
      Visa: 4,
      'Visa Electron': '4026, 417500, 4508, 4844, 4913, 4917',
    };
  }
}
