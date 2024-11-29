import './Hero.css'
import pic2 from '../Assets/pic2.jpg'
import pic1 from '../Assets/pic1.jpg'
import pic3 from '../Assets/pic3.jpg'


const Hero=()=>{
    return(
        <div className='hero'>
            <div className="hero-left">
                
            </div>
            <div className="hero-right">
                <h2>NEW ARRIVVALS PNLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={pic2} alt=""/>         
                    </div>
                    <p>collection</p>
                    <p>for evryone</p>

                </div>  
                <div className="hero-latest-btn">
                     <div>Latest Collection</div>
                     <img src={pic1} alt="" />                    
                      </div>
                </div>  
                <div className="hero-right">
                    <img src={pic3} alt=""/>

                </div>
            </div>
              
        
    )
} 
export default Hero