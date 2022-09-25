import {Link} from 'react-router-dom';
const BlogCard = (props) => {
    const {title, text} = props;
    return (
<div className="card h-100">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <Link to="/" className="btn btn-primary">Read More</Link>
  </div>
</div>
    )
};
export default BlogCard;