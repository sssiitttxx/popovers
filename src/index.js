import './style.css';
import Popover from './js/Popover';

document.querySelectorAll('[data-toggle="popover"]').forEach((button) => {
  const popover = new Popover(button);
  button.addEventListener('click', () => popover.toggle());
});