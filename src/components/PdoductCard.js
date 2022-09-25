import {Link} from 'react-router-dom';
const PdoductCard = (props) => {
    const {id, title, price, image} = props;
    return (
<div id={id} className="card h-100">
    <div style={{height: '250px'}}>      
      <img style={{objectFit: 'contain', width: '100%', height: '100%', padding: '20px'}} src={image} alt="" />
    </div>
    <div className="card-body text-center">
      <h5 className="card-title">{title}</h5>
      <p className="card-text h3 text-danger">${price}</p>
    </div>
    <div className="card-footer pb-4 border-0 bg-transparent">      
      <Link to={`/product/${id}`} className="btn btn-primary w-100">Bye Now</Link>
    </div>
</div>
    )
};
export default PdoductCard;