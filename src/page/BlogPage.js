import { useQuery } from "react-query";
import getNews from "../api/getNews";
import BlogCard from "../components/BlogCard";

const BlogPage = () =>{

  const {data, isLoading} = useQuery("news", ()=> getNews());

    return (
        <>
        <div className="container">
            <h1 className="text-center mb-5">Welcome to our Blog</h1>
            {isLoading ? <p className="text-center">Loding...</p> :
            <div className="row g-4">
                {data.results.map((newsItem)=>
                <div key={newsItem.episode_id} className="col-lg-4 col-md-6">
                    <BlogCard title={newsItem.title} text={newsItem.opening_crawl} />
                </div> 
                )}          
            </div>
            }
        </div>
        </>
    )
}
export default BlogPage;