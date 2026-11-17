

export default class Popover {
  constructor (trigger) {
    this.trigger = trigger;
    this.element = null;
  }

  show() {
    this.element = document.createElement('div');
    this.element.className = 'popover';
    this.element.innerHTML = `
    <div class="popover-header">${this.trigger.dataset.title}</div>
    <div class="popover-body">${this.trigger.dataset.content}</div>
    `;
    document.body.appendChild(this.element);

    const rect = this.trigger.getBoundingClientRect();
    const gap = 10;
    const top = rect.top - this.element.offsetHeight - gap;
    const left = rect.left + rect.width / 2 - this.element.offsetWidth / 2;

    this.element.style.top = `${top + window.scrollY}px`;
    this.element.style.left = `${left + window.scrollX}px`;
    }

  

  hide() {
    this.element.remove();
    this.element = null;
  }

  toggle() {
    if (this.element) {
      this.hide();
    } else {
      this.show();
    }
  }


}