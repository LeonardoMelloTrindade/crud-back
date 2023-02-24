export default class PaginationService {
    async paginate(query, page, limitPerPage) {
        return query
            .limit(limitPerPage)
            .skip(limitPerPage * (page - 1))
            .exec()
    }
}