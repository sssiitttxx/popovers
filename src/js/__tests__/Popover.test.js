import Popover from "../Popover";

describe('Popover', () => {
  let button;

  beforeEach (() => {
    document.body.innerHTML = `
    <button data-toggle="popover" data-title="Заголовок" data-content="Текст">btn</button>`;
    button = document.querySelector('button');
    const popover = new Popover(button);
    button.addEventListener('click', () => popover.toggle());
  });

  test('клик показывает popover с заголовком и текстом', () => {
    button.click();

    const element = document.querySelector('.popover');
    expect(element).not.toBeNull();
    expect(element.querySelector('.popover-header').textContent).toBe('Заголовок');
    expect(element.querySelector('.popover-body').textContent).toBe('Текст');
  });

  test('повторный клик скрывает popover', () => {
    button.click();
    button.click();

    expect(document.querySelector('.popover')).toBeNull();
  });
}); 