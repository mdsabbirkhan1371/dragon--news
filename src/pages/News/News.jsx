import { Link } from "react-router-dom";


const News = ({news}) => {

    const {title,image_url,_id,details}=news
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                   
                   {
                    details.length >200 ? <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-primary font-bold">See More</Link></p>  :
                    <p>{details}</p>
                   }
                    
                
                </div>
        </div>
    );
};

export default News;