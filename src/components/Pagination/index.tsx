import { ReactComponent as Arrow} from "../../assets/vector.svg";
import { Page } from "../../types"

const Pagination = ({ totalUsers, usersPerPage, page, setPage }: Page) => {

    const pageNumbers: number[] = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            <li>
                <button 
                    disabled={page === 1}
                    className="prev arrow" onClick={() => setPage(prev => prev - 1)}>
                    <Arrow/>
                </button>
            </li>
            {
                pageNumbers.map((number) => (
                    <li key={number}>
                        <button 
                            className={`${page === number ? "active" : ""}`}
                            onClick={() => setPage(number)}>
                        {number}
                        </button>
                    </li>
                ))
            }
            <li>
                <button 
                    disabled={page === 5}
                    className="next arrow" onClick={() => setPage(prev => prev + 1)}>
                    <Arrow/>
                </button>
            </li>
        </ul>
    )
}

export { Pagination }