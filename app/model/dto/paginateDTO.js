
export default class PaginateDTO {

    data = [];
    page = 1;
    limit = 10;
    total = 0

    constructor(data, page, limit, total) {
        this.data = data;
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}