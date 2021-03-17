// тесты на функции проверки номера карты и принадлежности платёжной системе.
import { checkCardLuhn, checkPaySystem } from '../functions.js';

const cards = {
  VISA: [
    '4024007103059415',
    '4272752548841039',
    '4716659732475238035',
  ],
  MasterCard: [
    '5328239718069675',
    '2221000561646497',
    '5292936858307565',
  ],
  'American Express (AMEX)': [
    '378730202602443',
    '346942136785785',
    '373813288639938',
  ],
};

const iin = {
  'American Express': '34, 37',
  'Diners Club International': 36,
  'Discover Card': '6011, 622126 - 622925, 644, 645, 646, 647, 648, 649, 65',
  JCB: '3528–3589',
  MIR: '2200–2204',
  Mastercard: '2221-2720, 51–55',
  Visa: 4,
  'Visa Electron': '4026, 417500, 4508, 4844, 4913, 4917',
};

for (let i = 0; i < 3; i += 1) {
  test(`CardLuhn ${i}`, () => {
    expect(checkCardLuhn(cards.VISA[i])).toBe(0);
  });
}

for (let i = 0; i < 3; i += 1) {
  test(`PaySystem ${i}`, () => {
    expect(checkPaySystem(iin, cards.VISA[i])).toBe('Visa');
  });
}
