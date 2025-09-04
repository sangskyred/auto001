
import useProduct from "../hooks/useProducts"
import React from "react"

export default Product = () => {
    const {product, loading, error} = useProduct()

    if(loading) return<div>Loading...</div>
    if(error) return<div>Error: {error.message}</div>

    return(
        <section>
            <div className="product-card">
                
            </div>
        </section>
    )
}