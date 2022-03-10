import Items from "./Items";

export function apiCall(page: number, size: number, patientId: number): Promise<Items> {
    return new Promise<Items>((resolve) => resolve(new Items(
        [
            {id: 1, date: "2018-01-02", prescriptionCount: 1, syndrome: "test1"},
            {id: 2, date: "2018-01-02", prescriptionCount: 2, syndrome: "test2"},
            {id: 3, date: "2018-01-02", prescriptionCount: 3, syndrome: "test3"},
            {id: 4, date: "2018-01-02", prescriptionCount: 4, syndrome: "test4"}
        ],
        0,
        4,
        4)))
}
