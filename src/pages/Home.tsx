// import { useState } from 'react'
import { SearchUser } from '../components/SearchUser'
import { UserList } from '../components/UserList'
import { Pagination } from '../components/Pagination'

const Home = () => {
    return (
        <>
            <h1>List Users</h1>
            <SearchUser />
            <UserList />
            <Pagination />
        </>
    )
}

export { Home }