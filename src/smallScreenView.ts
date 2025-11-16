export interface ISmallScreenView {
    hide(): void;
    show(): void;
}

export class SmallScreenView implements ISmallScreenView {
    labels: NodeListOf<HTMLElement>;

    constructor(selector: string) {
        this.labels = document.querySelectorAll(selector);
    }

    hide(): void {
        this.labels.forEach(l => l.style.display = 'none');
    }

    show(): void {
        this.labels.forEach(l => l.style.display = '');
    }
}