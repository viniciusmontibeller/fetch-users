import { useState, useEffect } from 'react'
import { SearchUser } from '../components/SearchUser'
import { UserList } from '../components/UserList'
import { Pagination } from '../components/Pagination'
import { getUsers } from '../services/getUsers'

const Home = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)    

    useEffect(() => {
        const getUsersData = async () => {
            const data = await getUsers(page)
            setUsers(data.results)
        }
        getUsersData()
    }, [page])

    return (
        <>
            <h1>List Users</h1>
            <SearchUser />
            <UserList users={users}/>
            <Pagination 
                setPage={setPage}/>
        </>
    )
}

export { Home }