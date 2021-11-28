import React from 'react'
import { VehiclePreview } from './VehiclePreview'

export const VehicleList = ({ vehicles }) => {
    const infoContent = (vehicles.length) ? "Click on shape to remove it and reset filtering" : "No vehicles for display"
    return (
        <section className="vehicle-list flex col">
            <p className="head">Marked Vehicles</p>
            <p className="info">{infoContent}</p>
            {!!vehicles.length &&
                <div>
                    {vehicles.map(vehicle => {
                        return <VehiclePreview key={vehicle._id} vehicle={vehicle} />
                    })}
                </div>
            }
        </section>
    )
}
