type paginate = {
    limit: number
    offset: number
}

const getPaginate = (page: number): paginate => {

    const limit = Number(process.env.LIMIT || 10);
    let offset = ((Number(limit) * page) - Number(limit));

    return {
        limit,
        offset
    }
}

export { getPaginate };