import { Link, useLocation } from "react-router-dom"
import { transformStringToDate } from "../utils/transformStringToDate"
import { useState } from 'react'

const UserDetails = () => {

    const [tab, setTab] = useState("info");

    const { state } = useLocation();
    console.log(state)

    return (
        <section className="details-page">
            <Link to=".." relative="path">
                Back
            </Link>
            <div className="user-primary-info">
                <img src={state.picture.large} alt=""/>
                <p className="name">{`${state.name.first} ${state.name.last}`}</p>
                <p className="title">{state.name.title}</p>
            </div>
            <section className="user-info-tabs">
                <div className="tabs">
                    <button 
                        className={`${tab === "info" ? "active" : ""}`}
                        onClick={() => setTab("info")}>Info</button>
                    <button 
                        className={`${tab === "location" ? "active" : ""}`}
                        onClick={() => setTab("location")}>Location</button>
                    <button 
                        className={`${tab === "login" ? "active" : ""}`}
                        onClick={() => setTab("login")}>Login</button>
                </div>
                <div className={`tab ${tab === "info" ? "active" : ""}`}>
                    <div>
                        <p>Gender</p>
                        <p>{state.gender}</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>{state.email}</p>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>{state.phone}</p>
                    </div>
                    <div>
                        <p>Age</p>
                        <p>{state.dob.age}</p>
                    </div>
                </div>
                <div className={`tab ${tab === "location" ? "active" : ""}`}>
                    <div>
                        <p>City</p>
                        <p>{state.location.city}</p>
                    </div>
                    <div>
                        <p>Country</p>
                        <p>{state.location.country}</p>
                    </div>
                    <div>
                        <p>State</p>
                        <p>{state.location.state}</p>
                    </div>
                    <div>
                        <p>Street</p>
                        <p>{`${state.location.street.name} ${state.location.street.number}`}</p>
                    </div>
                    <div>
                        <p>Postcode</p>
                        <p>{state.location.postcode}</p>
                    </div>
                </div>
                <div className={`tab ${tab === "login" ? "active" : ""}`}>
                    <div>
                        <p>User name</p>
                        <p>{state.login.username}</p>
                    </div>
                    <div>
                        <p>Passowrd</p>
                        <p>{state.login.password}</p>
                    </div>
                    <div>
                        <p>Years of usage</p>
                        <p>{state.registered.age}</p>
                    </div>
                    <div>
                        <p>Registered date</p>
                        <p>{transformStringToDate(state.registered.date)}</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export { UserDetails }