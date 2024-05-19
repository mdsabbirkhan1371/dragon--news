import { useParams } from "react-router-dom";
import RightSideNav from "../../shared/RightSideNav";
import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";


const NewsDetails = () => {
    const {id}=useParams()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h4 className="text-3xl">News Details Id</h4>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;