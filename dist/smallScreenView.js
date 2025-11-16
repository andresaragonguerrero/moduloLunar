export class SmallScreenView {
    constructor(selector) {
        this.labels = document.querySelectorAll(selector);
    }
    hide() {
        this.labels.forEach(l => l.style.display = 'none');
    }
    show() {
        this.labels.forEach(l => l.style.display = '');
    }
}
