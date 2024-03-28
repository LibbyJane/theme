if (!customElements.get('show-more-button')) {
    customElements.define(
      'show-more-button',
      class ShowMoreButton extends HTMLElement {
        constructor() {
          super();
          const button = this.querySelector('button');
          button.addEventListener('click', (event) => {
            this.expandShowMore(event);
            const nextElementToFocus = event.target.closest('.js-parent-display').querySelector('.js-show-more-item');
            if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
              nextElementToFocus.querySelector('input').focus();
            }
          });
        }
        expandShowMore(event) {
          const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.js-parent-display');
          this.querySelectorAll('.js-label-text').forEach((element) => element.classList.toggle('hidden'));
          parentDisplay.querySelectorAll('.js-show-more-item').forEach((item) => item.classList.toggle('hidden'));
          if (!this.querySelector('.js-label-show-less')) {
            this.classList.add('hidden');
          }
        }
      }
    );
  }
