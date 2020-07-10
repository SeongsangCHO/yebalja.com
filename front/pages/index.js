import Layout from '../components/Layout';
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import YearlyCalendar from '../components/YearlyCalendar';
import Header from "../components/Header";
import React from "react";

const Home = () => {
  return (
      <Layout>
        <Jumbotron />
          <Header>
              <h1>2020년 부트캠프</h1>
              <p>무료 부트캠프 일정을 한 눈에 확인하세요</p>
          </Header>
          <YearlyCalendar />
          <Header>
              <h1>한 눈에 보는 부트캠프</h1>
              <p>주요 부트캠프 특징을 한 눈에 비교해보세요</p>
          </Header>
          <Table />
      </Layout>
  );
}

export default Home;
