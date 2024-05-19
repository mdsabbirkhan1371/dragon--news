import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header";
import LeftSideNav from "../../shared/LeftSideNav";
import Navbar from "../../shared/Navbar";
import RightSideNav from "../../shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "../News/News";


const Home = () => {

    const newses = useLoaderData()
    console.log(newses)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    {
                        newses.map(news=><News key={news._id} news={news}></News>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;