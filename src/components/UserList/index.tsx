import { Link } from "react-router-dom"
import { ListOfUsers, User } from "../../types"

const UserList = ({ users, userFilter }: ListOfUsers) => {

    return (
        <ul className="user-list">
            <li className="header">
                <p>ID</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Title</p>
                <p>Date</p>
                <p>Age</p>
                <p>Actions</p>
            </li>
            { userFilter(users).length > 0 ?
                userFilter(users).map((user: User, index) => {
                    return (
                        <li key={index}>
                            <p>{user.id.value}</p>
                            <p>{user.name.first}</p>
                            <p>{user.name.last}</p>
                            <p>{user.name.title}</p>
                            <p>{user.dob.date}</p>
                            <p>{user.dob.age}</p>
                            <Link to="">
                                <p>View profile</p>
                            </Link>
                        </li>
                    )
                }) : <h3>User not found</h3>
            }
        </ul>
    )
}

export { UserList }