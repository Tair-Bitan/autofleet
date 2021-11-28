import defaultCar from '../assets/imgs/car.png'
import car from '../assets/imgs/icon-car.svg'
import van from '../assets/imgs/icon-van.svg'
import moped from '../assets/imgs/icon-moped.svg'
import bicycle from '../assets/imgs/icon-bicycle.svg'
import online from '../assets/imgs/icon-online.svg'
import inRide from '../assets/imgs/icon-inride.svg'

const getVehicleImg = (type) => {
    switch (type) {
        case 'A':
        case 'E':
            return car
        case 'B':
            return van
        case 'C':
            return moped
        case 'D':
            return bicycle
        case 'online':
            return online
        case 'in-ride':
            return inRide
        default:
            return defaultCar
    }
}

const getClassMap = (vehicles) => {
    const classMap = {}
    vehicles.reduce((classMap, vehicle) => {
        const name = vehicle.class.name
        classMap[name] = (classMap[name]) ? classMap[name] + 1 : 1
        return classMap
    }, classMap)
    return classMap
}

const getStatusMap = (vehicles) => {
    const statusMap = {}
    vehicles.reduce((statusMap, vehicle) => {
        const status = vehicle.state
        statusMap[status] = (statusMap[status]) ? statusMap[status] + 1 : 1
        return statusMap
    }, statusMap)
    return statusMap
}

const makeId = (length = 5) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export const vehicleService = {
    getVehicleImg,
    getClassMap,
    getStatusMap,
    makeId
}

