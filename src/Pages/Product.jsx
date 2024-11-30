import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import{ShopContext} from '../Context/ShopContext'

const Product=() =>{
    const {sll_product}=useContext(ShopContext);
    const {prooductId}=useParams();
    const product =all_product.find((e)=>e.id===Number(productId))


    return(
        <div>
           <Breadcrum product={product}/> 
            <ProductDisplay product={product}/>
        </div>
    )
}

export default Product
