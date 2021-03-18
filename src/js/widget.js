import { checkCardLuhn } from './functions.js';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <div class="check_card">
    <form action="submit">
      <input type="text" name="card_number">
      <button>Click to Validate</button>
    </form>
    </div>`;
  }

  static get inputSelector() {
    return '[name=card_number]';
  }

  static get submitSelector() {
    return '.check_card form';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (e) => this.onSubmit(e));
  }

  onSubmit(evt) {
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (checkCardLuhn(inputEl.value) === 0) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
  }
}
