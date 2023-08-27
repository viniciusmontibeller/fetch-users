import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home'
import { UserDetails } from '../pages/UserDetails'

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/details" element={<UserDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { Router }