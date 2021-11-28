import { vehicleService } from "../services/vehicleService"


export const VehiclePreview = ({ vehicle }) => {

    return (
        <section className="vehicle-preview flex align-center" title={vehicle.location.lat + ' , ' + vehicle.location.lng}>
            <img src={vehicleService.getVehicleImg(vehicle.class.name)} alt="car" />
            <div className="content flex col">
                <p className="vehicle-id">{vehicle._id}</p>
                <p className="vehicle-loc">{vehicle.location.lat + ' , ' + vehicle.location.lng}</p>
            </div>
        </section>
    )
}
