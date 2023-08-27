import { ReactComponent as Arrow} from "../../assets/vector.svg";
import { Page } from "../../types"

const Pagination = ({ page, setPage }: Page) => {
    return (
        <ul className="pagination">
            <li>
                <button 
                    disabled={page === 1}
                    className="prev arrow" onClick={() => setPage(prev => prev - 1)}>
                    <Arrow/>
                </button>
            </li>
            <li>
                <button 
                    className={`${page === 1 ? "active" : ""}`}
                    onClick={() => setPage(1)}>
                    1
                </button>
            </li>
            <li>
                <button 
                    className={`${page === 2 ? "active" : ""}`}
                    onClick={() => setPage(2)}>
                    2
                </button>
            </li>
            <li>
                <button 
                    className={`${page === 3 ? "active" : ""}`}
                    onClick={() => setPage(3)}>
                    3
                </button>
            </li>
            <li>
                <button 
                    className={`${page === 4 ? "active" : ""}`}
                    onClick={() => setPage(4)}>
                    4
                </button>
            </li>
            <li>
                <button 
                    className={`${page === 5 ? "active" : ""}`}
                    onClick={() => setPage(5)}> 
                   5
                </button>
            </li>
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