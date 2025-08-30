import React from "react";
import Image from "next/image";

const Category = () => {
    return (
        <div className="product-grid">
            <div className="product-card">
                <Image
                    src="https://www.codewithfaraz.com/shop_img/master-collection-of-web-and-python-projects.webp"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://www.codewithfaraz.com/shop_img/master-collection-of-web-and-python-projects.webp"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://www.codewithfaraz.com/shop_img/master-collection-of-web-and-python-projects.webp"
                    alt="Description of image"
                    width={500}
                    height={300}
                />
                <h3>Wireless Tech</h3>
            </div>
            <div className="product-card">
                <Image
                    src="https://www.codewithfaraz.com/shop_img/master-collection-of-web-and-python-projects.webp"
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