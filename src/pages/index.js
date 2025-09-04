import React from "react";
import Category from "../components/category";
import SwiperComponent from "../components/SwiperComponent";
import Layout from "../components/Layout";

export const Home = () => {
    return (
        <Layout>
            <section className="slide">
                <SwiperComponent />
            </section>

        </Layout>
    )
}

export default Home;