import './NewCollections.css'
import pic1 from '../Assets/pic1.png'

const NewCollections=()=>{
    return(
        <div className='new-colllections'>
         <h1>NEW COLLECTION</h1>
         <hr/>
         <div className="collections">
            {new_collection.map((item,i)/*Item array eke ewa iterate karai*/=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price={item.new_price} old_price={item.old_price}/>


            })}
            </div>   
        </div>



    )
}

export default NewCollections