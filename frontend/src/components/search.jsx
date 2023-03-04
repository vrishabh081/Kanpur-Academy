import { useEffect, useState } from "react";

export const SearchBox = ()=>{
    const [searchText, setSearchText] = useState();
    const [searchData, setSearchData] = useState([]);


    return (
        <>
        <div id="search-box">
            <input type="text" placeholder="Search records" onChange={(e)=>setSearchText(e.target.value)} />
        </div>
        </>
    )
}
