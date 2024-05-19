import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import quzone1 from '../assets/qZone1.png'
import quzone2 from '../assets/qZone2.png'
import quzone3 from '../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 text-xl">
                <h1 className=" font-semibold mb-3">Login With</h1>

                <button className="btn btn-outline w-full">   
                <FcGoogle />
                Google
                </button>
                <button className="btn btn-outline w-full mt-2">   
                <FaGithub />
                Github
                </button>
            </div>
            <div className="p-4 text-xl">
                <h1 className=" font-semibold mb-3">Find Us On</h1>
                  
                <a className="flex items-center border-t border-x rounded-t-lg p-3" href="">
                    < FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex items-center border-t border-x p-3" href="">
                    < FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex items-center border rounded-b-lg p-3" href="">
                    < FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
                   
            </div>

            <div className="p-4 text-xl">
                <h1>Q Zone</h1>
                <img src={quzone1}alt="" />
                <img src={quzone2}alt="" />
                <img src={quzone3}alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;