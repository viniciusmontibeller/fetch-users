import { Link, useLocation } from "react-router-dom"
import { transformStringToDate } from "../utils/transformStringToDate"

const UserDetails = () => {

    const { state } = useLocation();
    console.log(state)

    return (
        <>
            <Link to=".." relative="path">
                Back
            </Link>
            <div>
                <img src={state.picture.large} alt=""/>
                <p>{`${state.name.first} ${state.name.last}`}</p>
                <p>{state.name.title}</p>
            </div>
            <div>
                <p>Info</p>
                <p>Location</p>
                <p>Login</p>
            </div>
            <div className="info">
                <p>{state.gender}</p>
                <p>{state.email}</p>
                <p>{state.phone}</p>
                <p>{state.dob.age}</p>
            </div>
            <div className="location">
                <p>{state.location.city}</p>
                <p>{state.location.country}</p>
                <p>{state.location.state}</p>
                <p>{`${state.location.street.name} ${state.location.street.number}`}</p>
                <p>{state.location.postcode}</p>
            </div>
            <div className="login">
                <p>{state.login.username}</p>
                <p>{state.login.password}</p>
                <p>{state.registered.age}</p>
                <p>{transformStringToDate(state.registered.date)}</p>
            </div>
        </>
    )
}

export { UserDetails }