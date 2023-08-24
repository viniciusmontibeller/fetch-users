import { ReactComponent as Arrow} from "../../assets/vector.svg";
import { Page } from "../../types"

const Pagination = ({ setPage }: Page) => {
    return (
        <ul>
            <li>
                <button onClick={() => setPage(prev => prev - 1)}>
                    <Arrow/>
                </button>
            </li>
            <li>
                <button onClick={() => setPage(1)}>
                    1
                </button>
            </li>
            <li>
                <button onClick={() => setPage(2)}>
                    2
                </button>
            </li>
            <li>
                <button onClick={() => setPage(3)}>
                    3
                </button>
            </li>
            <li>
                <button onClick={() => setPage(4)}>
                    4
                </button>
            </li>
            <li>
                <button onClick={() => setPage(5)}> 
                   5
                </button>
            </li>
            <li>
                <button onClick={() => setPage(prev => prev + 1)}>
                    <Arrow/>
                </button>
            </li>
        </ul>
    )
}

export { Pagination }