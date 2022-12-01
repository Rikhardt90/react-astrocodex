import { useState } from "react";
//import "./Pagination.scss";

export default function Pagination({getData}) {

    const [actualPage, setActualPage] = useState(1);

    const changePage = (newPage) => {
        getData(newPage);
        setActualPage(newPage);
    }

    return <div className="pagination">
        <button className="pagination-btn" onClick={() => changePage(actualPage - 1)}>{"prev"}</button>
        <span className="pagination-btn">{actualPage}</span>
        <button className="pagination-btn" onClick={() => changePage( actualPage + 1)}>{"next"}</button>
    </div>
}