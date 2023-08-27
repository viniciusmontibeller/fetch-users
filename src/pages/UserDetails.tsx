import { Link, useLocation } from "react-router-dom"
import { transformStringToDate } from "../utils/transformStringToDate"

const UserDetails = () => {

    const { state } = useLocation();
    console.log(state)

    return (
        <main>
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
                    <button>Info</button>
                    <button>Location</button>
                    <button>Login</button>
                </div>
                <div className="tab info active">
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
                <div className="tab location">
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
                <div className="tab login">
                    <p>{state.login.username}</p>
                    <p>{state.login.password}</p>
                    <p>{state.registered.age}</p>
                    <p>{transformStringToDate(state.registered.date)}</p>
                </div>
            </section>
        </main>
    )
}

export { UserDetails }