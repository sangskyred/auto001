
import useProduct from "../hooks/useProducts"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const Product = () => {
    const { product, loading, error } = useProduct()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (

        <div className="product-container">
            <div className="product-row">
                {product && product.products.map((item, key) =>
                    <div key={key} className="product-card">
                        <Link href=""><Image src={item.images[0]} width={200} height={200} /></Link>
                        <div className="product-info">
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default Product;