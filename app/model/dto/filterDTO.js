
export default class FilterDTO {

    data = [];
    filter = [];
    total = 0;

    constructor(data, filter, total) {
        this.data = data;
        this.filter = filter;
        this.total = total;
    }
}