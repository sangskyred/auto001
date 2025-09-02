import React from "react";
import Image from "next/image";

const Category = () => {
    return (
        <div className="product-list">

            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <div className="product-info">
                    <h3><span>Men's fashion</span></h3>
                </div>
            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NTE3Zjc1NTEt/NTE3Zjc1NTEt-N2IwYmQwNGIt-w372._SY232_CB428347147_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <div className="product-info">
                    <h3><span>Men's fashion</span></h3>
                </div>

            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <div className="product-info">
                    <h3><span>Men's fashion</span></h3>
                </div>
            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <div className="product-info">
                    <h3><span>Men's fashion</span></h3>
                </div>
            </div>
        </div>

    )
}

export default Category;