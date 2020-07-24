import Layout from "../components/Layout";
import Header from "../components/Header";
import About5E from "../components/About5E";
import React from "react";

const About = () => {
  return (
    <Layout>
        {/* <Header>
            <h2>5E 그들의 개발 히스토리</h2>
            <p>솔직히 저희도 이렇게 잘될 줄 몰랐어요</p>
        </Header> */}
        <About5E></About5E>
    </Layout>
  );
}

export default About;