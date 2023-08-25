import { Search } from "../../types"

const SearchUser = ({ setSearch }: Search) => {
    return (
        <div>
            <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="SearchUser"
                type="search"/>
        </div>
    )
}

export { SearchUser }