const dbService = require('../services/db.service')
// const ObjectId = require('mongodb').ObjectId

const query = async (filterBy) => {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('vehicle')
        const vehicles = await collection.find(criteria).toArray()
        return vehicles
    } catch (err) {
        throw err
    }
}

const _buildCriteria = (filterBy) => {
    if (!filterBy.lat || !filterBy.lng) return {}

    const lat = JSON.parse(filterBy.lat)
    const lng = JSON.parse(filterBy.lng)

    if (filterBy.radius) {
        const radius = JSON.parse(filterBy.radius)
        return (
            {
                //find coords within a given radius, devided by the earth radius in meters (in order to convert distance to radians) 
                "location": { $geoWithin: { $centerSphere: [[lat, lng], (radius / 6378000)] } }
            }
        )
    }

    return (
        {
            //find coords within a square bounds
            "location.lat": { $gt: lat.min, $lt: lat.max },
            "location.lng": { $gt: lng.min, $lt: lng.max }
        }
    )
}

module.exports = {
    query
}