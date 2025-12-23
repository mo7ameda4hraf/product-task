import Navpar from "./Navpar"
import Rating from "./rating"
import ReviewList from "./review/ReviewList"
import SimilarItems from "./Similar Items/Items"
import ProductSlider from "./Product/ProductImage"
import Footer from "./Footer"


//icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
  return (
    <div>
      <Navpar/>
      {/* Title */}
      <div className="title">
        <h1 className="tit-desktop text-[32px]  font-semibold">Product Details</h1>
        <h1 className="tit-response hidden  text-[32px] font-semibold">T-Shirt</h1>
      </div>
      {/* BreadCrumb */}
      <div className="flex breadcrumb container justify-end">
        <a style={{color:"rgba(138, 138, 138, 1)"}} href="">Product Details</a>
        <a className="hidden" style={{color:"rgba(138, 138, 138, 1)"}} href="">T-Shirt</a>
        <ArrowForwardIosIcon/>
        <a href="">Our Category</a>
        <ArrowForwardIosIcon/>
        <a href="">Home</a>
      </div>
      {/* ProductSlider */}
      <ProductSlider/>
      {/* Statistics */}
      <Rating/>
      {/* ReviewList */}
      <ReviewList/>
      {/* SimilarItems */}
      <SimilarItems/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}
