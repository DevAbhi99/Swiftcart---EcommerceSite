import React from "react";
import './Main.css';
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Card from "./Card";
import Footer from "./Footer";

function Main(props){

    const location = useLocation();
    const { state } = location;
    const email = state ? state.email : 'User';

    return (
        <>
<div className="navbar">
<div className="navbar_heading">SwiftCart <span><ShoppingCartIcon/></span></div>
<div className="search_text"><span id="searchbox"><input type="text" placeholder="Search..." id="box_search"/></span><button id="searchicon"><SearchIcon/></button></div>
<div className="profile"><span id="welcomeuser">Welcome {email.split('@')[0]}</span><div className="profilesub"><button id="addcart"><AddShoppingCartIcon/></button><button id="profilesettings"><Person2Icon/></button><a href="http://localhost:3000/"><button id="logoutbtn"><PowerSettingsNewIcon/></button></a></div></div>
</div>

<div className="main_page">

<div className="firstrow_title">Electronics gadgets</div>

<div className="firstrow">
<Card src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505124_sd.jpg" title="Iphone 14 plus"/>
<Card src="https://files.refurbed.com/ii/samsung-galaxy-s22-ultra-5g-1653653899.jpg" title="Samsung ultra"/>
<Card src="https://3.bp.blogspot.com/-5zcbx3jzFXE/VxCgmp4x6MI/AAAAAAAAAyo/pCIbGDdCGCkXXaR4oQFQfiYCpGkelHUXACLcB/s1600/Alienware_2D00_17_2D00_Front_2D00_Reflection_2D00_1200_5F00_74014EC9.jpg" title="Dell Alienware"/>
<Card src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408463cv11d.jpg" title="Asus Rog G15" onCha/>
<Card src="http://images.samsung.com/is/image/samsung/ae_AS24UUPXSG_002_Right-Angle?$TM-Gallery$" title="Samsung split air conditioner"/>
<Card src="https://m.media-amazon.com/images/I/619BkvKW35L.jpg" title="Sony PS5"/>
</div>

<div className="secondrow_title">Shoes for men and women</div>

<div className="firstrow">
<Card src="https://i5.walmartimages.com/asr/fcb6912b-0d57-43b6-a1ac-103f4e9d5bd7_1.2dd4b7f166addfaf199debaa1580a69f.jpeg" title="Nike Men's air precision shoes"/>
<Card src="https://www.tennisnuts.com/images/product/full/nikecourt-zoom-vapor-95-tour-mens-tennis-shoe_a_new.jpg" title="Nike Vapor 9.5 tour tennis shoes"/>
<Card src="https://i5.walmartimages.com/asr/2c5b7585-6d2b-4944-aa66-5f8e69b67e9a_1.ec3987c308f012540fe725d54e81345b.jpeg" title="Nike women's hyper pink blue shoes"/>
<Card src="https://tse4.mm.bing.net/th?id=OIP.TnGdDzAS4wDYgcoAMFCb9wHaGd&pid=Api&P=0&h=180" title="Air Jordan retro 1"/>
<Card src="https://tse2.mm.bing.net/th?id=OIP.u3N0vkQqYwNLfPXG2jXtjwHaFS&pid=Api&P=0&h=180" title="Air Jordan 3"/>
<Card src="https://images-na.ssl-images-amazon.com/images/I/81MmBkoFyUL._AC_UL1500_.jpg" title="Blue Adidas original"/>
</div>

<div className="secondrow_title">Gym Equipments</div>

<div className="firstrow">
<Card src="https://i5.walmartimages.com/asr/66916b4e-6891-4d6c-82a5-aefd0d83bcee_1.f13c6c3a0a9b73b80c23934ee28d5a54.jpeg" title="Vinyl kettlebell set"/>
<Card src="https://cdn.shopify.com/s/files/1/2083/2417/products/custom-steel-dumbbells-711264.jpg?v=1665167350" title="Kustom kit gym dumbbells"/>
<Card src="https://tse4.mm.bing.net/th?id=OIP.tzDbBgaaoGARXeziYG5HNgHaHd&pid=Api&P=0&h=180" title="CIR M8 Treadmill"/>
<Card src="https://www.pinnaclefitness.org.uk/wp-content/uploads/2020/11/9F11B374-C628-4B35-89A8-C69772ED51E0-1024x1024.jpeg" title="Pinnacle fitness barbell set"/>
<Card src="https://customgymequipment.ie/wp-content/uploads/2020/07/complete-home-gym-station-HG1-scaled.jpg" title="HG1 Complete homegym station"/>
<Card src="https://tse2.mm.bing.net/th?id=OIP.SCUrmtIqet86yl4XrvGEegHaFj&pid=Api&P=0&h=180" title="Armor tech benchpress set"/>
</div>


<div className="secondrow_title">Gym Equipments</div>

<div className="firstrow">
<Card src="https://i.pinimg.com/originals/29/5a/98/295a989b3babeeddb1147c5638ba6d70.jpg" title="Rayon Embroidery Kurti"/>
<Card src="http://snehalcreation.co.in/backend/uploads/product_images/thumb_8_121509089080-1509089080-MM-131-G_CLOSE.jpg" title="Yellow Cotton Short"/>
<Card src="https://images-na.ssl-images-amazon.com/images/I/51xIbmIQ9GL._UL1024_.jpg" title="Custom Kurta Designer"/>
<Card src="https://i.pinimg.com/originals/47/02/23/470223629fef06cd55ec6fad35cee154.jpg" title="Jaipur silk kurti"/>
<Card src="https://i.etsystatic.com/25355596/r/il/2b9ff8/3213238227/il_1588xN.3213238227_qt60.jpg" title="Ethnic Kurti Sharara Design"/>
<Card src="https://images-na.ssl-images-amazon.com/images/I/81JztnfbCSL._UL1500_.jpg" title="Cotton Printed Kurti"/>
</div>


</div>

<div className="footer">
<Footer/>
</div>
        </>
    )

}

export default Main;