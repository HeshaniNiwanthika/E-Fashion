import all_product from "../Components/Assets/all_product";





const ShopContextProvider=(props)=>{
    
    const contextValue={all_product,cartItems};

    const addToCart=(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart=(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.new_price*cartItems[item];

            }
        
            return totalAmount;
        }
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
   {
    const contextvalue={getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}

    }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )


}



export default ShopContextProvider;

