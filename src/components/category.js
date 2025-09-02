import React from "react";
import Image from "next/image";

const Category = () => {
    return (
        <div className="product-grid">
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech1</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
        </div>

    )
}

export default Category;