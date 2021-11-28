import { useDispatch, useSelector } from "react-redux";

import { filterVehicles } from "../store/actions/vehicleAction";
import { MapContainer } from "../cmps/MapContainer";
import { VehicleList } from "../cmps/VehicleList";

export const FleetMap = () => {

    //Connect store
    const { vehicles, filteredVehicles } = useSelector(({ vehicleReducer }) => vehicleReducer)
    const dispatch = useDispatch()

    if (!vehicles || !vehicles.length) return <h1 className="fleet-map main">Loading..</h1>
    return (
        <section className="fleet-map">
            <MapContainer vehicles={vehicles} filterVehicles={(filterBy) => dispatch(filterVehicles(filterBy))} />
            <VehicleList vehicles={filteredVehicles} />
        </section>
    )
}
