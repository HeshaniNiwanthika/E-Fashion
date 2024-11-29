import  './Footer.css'
import pic1 from '../Assets/pic1.jpg'/*footer logo*/
import pic3 from '../Assets/pic3.jpg'/*instergram <icon></icon>*/
import pic1 from '../Assets/pic2.jpg'/*pinterster icon*/
import pic2 from '../Assets/pic2.jpg'/*whatsapp icon*/


const Footer =()=>{
    return(
        <div className='footer'>
            <img  src={pic1} alt=""/>
            <p>SHOPPER</p>

            <ul className='footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About></li>
            <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className=footer-icons-container">
                    <img src={pic1} alt="" />
                    </div>
                <div className="footer-icons-container">
                    <img src={pic2} alt="" />
                 </div>
                 
                 </div>
                 <div className="footer-copyright">
                   <hr/>
                   <p>Copyright @ 2023-All</p>

                 </div>

                 </div>



        </div>
        
        
    )
}

export default Footer