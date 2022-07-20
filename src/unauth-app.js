import { Routes, Route } from "react-router-dom"
import Login from "./pages/login/login"
import NotFound from "./pages/not-found/not-found"
const UnAuthApp = () => {
    return (
        <Routes >
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}
export default UnAuthApp