import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bar, Pie } from 'react-chartjs-2';

import { loadVehicles } from "../store/actions/vehicleAction";
import { vehicleService } from '../services/vehicleService'
import { chartService } from '../services/chartService';

export const Charts = () => {

    //Connect store
    const { vehicles } = useSelector(({ vehicleReducer }) => vehicleReducer)
    const dispatch = useDispatch()

    const [classMap, setClassMap] = useState({})
    const [statusMap, setStatusMap] = useState({})
    const [barChart, setBarChart] = useState({ labels: [], datasets: [] })
    const [pieChart, setPieChart] = useState({ labels: [], datasets: [] })

    useEffect(() => {
        queryVehicles()
    }, [])

    const queryVehicles = async () => {
        if (!vehicles.length) dispatch(loadVehicles())
        setStatus()
        setClasses()
    }

    const setStatus = () => {
        const statusMap = vehicleService.getStatusMap(vehicles)
        setStatusMap(statusMap)
        setPieChart(chartService.getChartData(statusMap))
    }
    const setClasses = () => {
        const classMap = vehicleService.getClassMap(vehicles)
        setClassMap(classMap)
        setBarChart(chartService.getChartData(classMap))
    }

    return (
        <section className="charts">
            <p className="head">Gain full control on your fleet</p>
            <div className="content">
                <div>
                    <h2>Easily index your vehicles</h2>
                    <div className="chart bar">
                        <Bar
                            data={barChart}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="cards">
                        {Object.keys(classMap).sort((a, b) => a.charCodeAt() - b.charCodeAt()).map(key => {
                            return (
                                <div className="card flex col center align-center" key={vehicleService.makeId()}>
                                    <img src={vehicleService.getVehicleImg(key)} alt="car" />
                                    <h1>class {key}</h1>
                                    <p>{classMap[key]} Vehicles</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <h2>Monitor your vehicles status</h2>
                    <div className="chart pie">
                        <Pie
                            data={pieChart}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="cards">
                        {Object.keys(statusMap).map(key => {
                            return (
                                <div className="card flex col center align-center" key={vehicleService.makeId()}>
                                    <img src={vehicleService.getVehicleImg(key)} alt="car" />
                                    <h1>Vehicles {key}</h1>
                                    <p>{statusMap[key]}  Vehicles</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section >
    )
}
