import { useState, useEffect } from 'react'
import { SearchUser } from '../components/SearchUser'
import { UserList } from '../components/UserList'
import { Pagination } from '../components/Pagination'
import { getUsers } from '../services/getUsers'

const Home = () => {

    const [users, setUsers] = useState([])    

    useEffect(() => {
        const getUsersData = async () => {
            const data = await getUsers()
            setUsers(data.results)
        }
        getUsersData()
    }, [])

    console.log(users)

    return (
        <>
            <h1>List Users</h1>
            <SearchUser />
            <UserList users={users}/>
            <Pagination />
        </>
    )
}

export { Home }