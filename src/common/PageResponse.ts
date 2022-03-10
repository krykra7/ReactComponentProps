export default class PageResponse<T> {
    private _content: T[];
    private _number: number;
    private _size: number;
    private _totalElements: number;

    constructor(content: T[], number: number, size: number, totalElements: number) {
        this._content = content;
        this._number = number;
        this._size = size;
        this._totalElements = totalElements;
    }

    get content(): T[] {
        return this._content;
    }

    get number(): number {
        return this._number;
    }

    get size(): number {
        return this._size;
    }

    get totalElements(): number {
        return this._totalElements;
    }

    set content(value: T[]) {
        this._content = value;
    }

    set number(value: number) {
        this._number = value;
    }

    set size(value: number) {
        this._size = value;
    }

    set totalElements(value: number) {
        this._totalElements = value;
    }
}
