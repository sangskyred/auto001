import React from "react";
import Category from "../components/category";
import SwiperComponent from "../components/SwiperComponent";
import Layout from "../components/Layout";
import Product from "../components/products";
export const Home = () => {
    return (
        <Layout>
            <section className="slide">
                <SwiperComponent />
            </section>
            <section className="products">
                <Product/>
            </section>

        </Layout>
    )
}

export default Home;