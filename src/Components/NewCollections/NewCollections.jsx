import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import itemimage from '../Assets/exclusive_image.png'

const NewCollections=()=>{
    return(
        <div className='new-colllections'>
         <h1>NEW COLLECTION</h1>
         <hr/>
         <div className="collections">
            {new_collection.map((item,i)/*Item array eke ewa iterate karai*/=>{
                return <img src={itemimage} alt=""/>


            })}
            </div>   
        </div>



    )
}

export default NewCollections