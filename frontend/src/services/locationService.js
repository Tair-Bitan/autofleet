import { httpService } from "./httpService"


const BASE_URL = 'api/vehicle'

const query = async (filterBy) => {
    const res = await httpService.get(BASE_URL, filterBy)
    return res
}

export const locationService = {
    query
}