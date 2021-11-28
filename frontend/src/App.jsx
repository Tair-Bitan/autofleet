import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadVehicles } from "./store/actions/vehicleAction";

import { AppHeader } from './cmps/AppHeader';
import { Charts } from "./pages/Charts";
import { FleetMap } from "./pages/FleetMap";

export const App = () => {

  //Connect store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadVehicles())
  }, [])

  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<FleetMap />} />
          <Route path="/about" element={<Charts />} />
        </Routes>
      </section>
    </Router >
  )
}
