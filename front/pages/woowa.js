import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Faq from "../components/Faq"

const Woowa = () => {
    return (
        <Layout>
            <Header>
                <h2>우아한 테크코스</h2>
                <p>부트캠프 상세페이지안을 짜봅시다</p>
            </Header>
            <Header>
                <h4>타임라인</h4>
                <p>추가예정</p>
            </Header>
            <Header>
              <h3>자주 묻는 질문</h3>
              <p>항목별로 더 자세한 내용을 알아보세요</p>
            </Header>
            <Faq program="woowa"/>
            <Header>
                <h4>프로그램 참여후기</h4>
                <p>추가예정</p>
            </Header>
        </Layout>
    );
}

export default Woowa;