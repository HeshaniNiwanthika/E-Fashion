import './Offers.css'
import pic3 from '../Assets/pic3.jpg'


const Offers=()=>{
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={pic3} alt=""></img>

            </div>
        </div>
    )
}

export default Offers