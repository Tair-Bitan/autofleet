import { locationService } from "../../services/locationService";

export const loadVehicles = () => {
    return async dispatch => {
        try {
            const vehicles = await locationService.query()
            dispatch({ type: 'SET_VEHICLES', vehicles })
        } catch (err) {
            console.log('Vehicle Actions: err in loadVehicles', err)
        }
    }
}

export const filterVehicles = (filterBy) => {
    return async dispatch => {
        if (!filterBy) {
            dispatch({ type: 'SET_FILTERES_VEHICLES', vehicles: [] })
            return
        } else {
            try {
                const vehicles = await locationService.query(filterBy)
                dispatch({ type: 'SET_FILTERES_VEHICLES', vehicles })
            } catch (err) {
                console.log('Vehicle Actions: err in filterVehicles', err)
            }
        }
    }
}
