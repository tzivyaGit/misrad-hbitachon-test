import { Route, Routes } from "react-router-dom"
import { FormComponent } from "../componnents/form"

export const MyRoutes = () => {
    return <>
        <Routes>
            <Route path="endOrder" element={<FormComponent />}></Route>
        </Routes>
    </>
}