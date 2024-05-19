
import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear and Favour</p>
                <p className="text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            
            
            
        </div>
    );
};

export default Header;