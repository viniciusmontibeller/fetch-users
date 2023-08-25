import { useState, useEffect } from 'react'
import { SearchUser } from '../components/SearchUser'
import { UserList } from '../components/UserList'
import { Pagination } from '../components/Pagination'
import { getUsers } from '../services/getUsers'
import { User } from '../types'

const Home = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getUsersData = async () => {
            const data = await getUsers(page)
            setUsers(data.results)
        }
        getUsersData()
    }, [page])

    const userFilter = (users: User[]) => {
        return users.filter(user => {
            return user.name.first.toLowerCase().includes(search.toLowerCase())
        })
    }

    return (
        <>
            <h1>List Users</h1>
            <SearchUser 
                setSearch={setSearch}
                />
            <UserList 
                userFilter={userFilter}
                users={users}/>
            <Pagination 
                setPage={setPage}/>
        </>
    )
}

export { Home }