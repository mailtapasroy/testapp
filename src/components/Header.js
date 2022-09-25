import NavBar from "./NavBar";
import BannerImage from '../images/about-banner.jpg'

const Header = () =>{
    return(
        <header>
            <NavBar />
            <img className="w-100" src={BannerImage} alt="" />
        </header>
    )
}
export default Header;