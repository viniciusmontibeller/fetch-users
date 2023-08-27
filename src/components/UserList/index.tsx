import { Link } from "react-router-dom"
import { ListOfUsers, User } from "../../types"
import { transformStringToDate } from "../../utils/transformStringToDate"

const UserList = ({ currentUsers, userFilter, loading }: ListOfUsers) => {

    return (
        <section className="users-info">
        <ul className="user-list">
            <li className="list-header">
                <p>ID</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Title</p>
                <p>Date</p>
                <p>Age</p>
                <p>Actions</p>
            </li>
            { loading ? <h3>Loading...</h3> :
                userFilter(currentUsers).length > 0 ?
                userFilter(currentUsers).map((user: User, index) => {
                    return (
                        <li key={index}>
                            <p>{user.id.value}</p>
                            <p>{user.name.first}</p>
                            <p>{user.name.last}</p>
                            <p>{user.name.title}</p>
                            <p>{transformStringToDate(user.dob.date)}</p>
                            <p>{user.dob.age}</p>
                            <Link to="/details" state={user}>
                                <p>View profile</p>
                            </Link>
                        </li>
                    )
                }) : 
                <h3 >User not found</h3>
            }
        </ul>
        </section>
    )
}

export { UserList }