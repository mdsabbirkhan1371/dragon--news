import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="p-3 font-semi-bold">
            <h1>All Category</h1>

            <div className="m-4 space-y-6">
                {
                    categories.map(category=>
                        <Link to={`/category/${category.id}`} key={category.id} className="block">{category.name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;