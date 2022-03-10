import PageResponse from "./PageResponse";
import {Item} from "./Item";

export default class Items extends PageResponse<Item> {

    constructor(
        content: Item[],
        number: number,
        size: number,
        totalElements: number
    ) {
        super(content, number, size, totalElements);
    }
}
