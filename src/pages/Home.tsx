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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUsersData = async () => {
            const data = await getUsers()
            setUsers(data.results)
            setLoading(false)
        }
        getUsersData()
    }, [])

    const userFilter = (users: User[]) => {
        return users.filter(user => {
            return user.name.first.toLowerCase().includes(search.toLowerCase())
        })
    }

    const usersPerPage = 10;

    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userFilter(users).slice(indexOfFirstUser, indexOfLastUser);

    return (
        <main>
            <header className='header'>
                <h1>List Users</h1>
                <SearchUser 
                    setSearch={setSearch}
                    />
            </header>
            <UserList
                loading={loading}
                currentUsers={currentUsers}/>
            <Pagination
                totalUsers={userFilter(users).length}
                usersPerPage={usersPerPage}
                page={page}
                setPage={setPage}/>
        </main>
    )
}

export { Home }