const initialState = {
    vehicles: [],
    filteredVehicles: []
}

export function vehicleReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_VEHICLES':
            return { ...state, vehicles: action.vehicles };
        case 'SET_FILTERES_VEHICLES':
            return { ...state, filteredVehicles: action.vehicles };
        default:
            return state;
    }
}
