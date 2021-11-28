import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from './Marker';

export const MapContainer = ({ vehicles, filterVehicles }) => {

    const [coords, setCoords] = useState(null)
    const [prevOverlay, setPrevOverlay] = useState(null)

    useEffect(() => {
        filterVehicles(coords)
    }, [coords])

    const extractShapeCoords = (overlay, type) => {
        let coords = {}

        if (type === 'circle') {
            const lat = overlay.center.lat()
            const lng = overlay.center.lng()
            const radius = overlay.radius
            coords = {
                lat,
                lng,
                radius
            }
        }

        if (type === 'rectangle') {
            const ne = overlay.getBounds().getNorthEast();
            const sw = overlay.getBounds().getSouthWest();

            coords = {
                lat: {
                    min: Math.min(ne.lat(), sw.lat()),
                    max: Math.max(ne.lat(), sw.lat())
                },
                lng: {
                    min: Math.min(ne.lng(), sw.lng()),
                    max: Math.max(ne.lng(), sw.lng())
                }
            }
        }

        setCoords(coords)
    }

    const defaultLocation = {
        center: {
            lat: 51.503130606915335,
            lng: -0.06902345895766882
        },
        zoom: 12
    }

    const costumizeMap = (map, maps) => {

        // Set shape options and style 
        const shapeOptions = {
            fillColor: "#aadaff",
            strokeColor: "#9fcee7",
            fillOpacity: 0.35,
            strokeWeight: 2,
            strokeOpacity: 0.9,
            clickable: true,
            editable: true,
            draggable: true,
            zIndex: 1,
        }

        // Create and customize the drawing manager 
        const drawingManager = new maps.drawing.DrawingManager({
            drawingControl: true,
            drawingControlOptions: {
                position: maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                    maps.drawing.OverlayType.CIRCLE,
                    maps.drawing.OverlayType.RECTANGLE,
                ],
            },
            circleOptions: shapeOptions,
            rectangleOptions: shapeOptions,
        })

        //Add event listeners
        maps.event.addListener(drawingManager, 'overlaycomplete', ({ overlay, type }) => {

            // Remove prev shape when creating new one. //STOPPED WORKING. WHY? 
            if (prevOverlay) prevOverlay.setMap(null)
            setPrevOverlay(overlay)

            // Switch back to non-drawing mode after drawing a shape.
            drawingManager.setDrawingMode(null)

            // Get shape coords for filtering
            extractShapeCoords(overlay, type)

            // Add listeners on created overlay
            maps.event.addListener(overlay, 'click', () => {
                //Remove overlay on click
                setCoords(null)
                overlay.setMap(null)
            })
            maps.event.addListener(overlay, 'radius_changed', () => {
                //Filter on radius change
                extractShapeCoords(overlay, type)
            })
            maps.event.addListener(overlay, 'bounds_changed', () => {
                //Filter on bounds change
                extractShapeCoords(overlay, type)
            })
            maps.event.addListener(overlay, 'dragstart', () => {
                //Prevent filtering while dragging (when dragging, the bounds change, very expensive)
                maps.event.clearListeners(overlay, 'bounds_changed', () => {
                    extractShapeCoords(overlay, type)
                })
            })
            maps.event.addListener(overlay, 'dragend', () => {
                //Filter on end of drag
                extractShapeCoords(overlay, type)
                //Return filter on bounds change
                maps.event.addListener(overlay, 'bounds_changed', () => {
                    extractShapeCoords(overlay, type)
                })
            })
        })

        // Place drawing manager on map
        drawingManager.setMap(map)
    }

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyBbmFIBNJYR3chQJIgeDLJpuACCex0uK0s',
                    libraries: 'drawing'
                }}
                defaultCenter={defaultLocation.center}
                defaultZoom={defaultLocation.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => costumizeMap(map, maps)}
            >
                {vehicles.map(vehicle => {
                    return <Marker key={vehicle._id} {...vehicle.location} />
                })}
            </GoogleMapReact>
        </div>
    )
}