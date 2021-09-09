import React from 'react';


const SearchArea = (props) =>{

    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <div className="search">
                <input className="search-input" placeholder="ค้นหาหนังสือ..." onChange={props.handleSearch} type="text" />
                <button className="search-btn" type="submit">ค้นหา</button>
                </div>
            </form>
            <div className="container-select">
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">ลำดับ</option>
                    <option value="Newest">ใหม่ล่าสุด</option>
                    <option value="Oldest">เก่าที่สุด</option>
                </select>
                <select defaultValue="Books Type" onChange={props.handleFilter}>
                    <option disabled value="Books Type">ตัวเลือกอื่นๆ</option>
                    <option value="">All</option>
                    <option value="&filter=free-ebooks">Free-Ebooks</option>
                    <option value="&filter=paid-ebooks">Paid-Ebooks</option>
                    <option value="&filter=ebooks">Ebooks</option>
                </select>
                </div>
        </div>
    )
}

export default SearchArea;