import CardFormWidget from '../widget.js';

beforeAll(() => {
  document.body.innerHTML = '<div id="container"></div>';
});

test('should render self', () => {
  const container = document.querySelector('#container');

  const widget = new CardFormWidget(container);

  widget.bindToDOM();
  expect(container.innerHTML).toEqual(CardFormWidget.markup);
});

test('should validate input', () => {
  const container = document.querySelector('#container');
  const widget = new CardFormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(CardFormWidget.inputSelector);
  input.value = '7715964180';

  const submit = container.querySelector(CardFormWidget.submitSelector);
  submit.click();

  expect(input.classList.contains('valid')).toBeTruthy();
});
