import React from "react"
import { Layout, Row, Col } from "antd"
import textLogo from "../images/newfi-logo-text.svg"
import logo from "../images/newfi-logo.svg"
import 'antd/dist/antd.css';
import '../styles/newfi-theme.css';
import '../styles/home.css';

const { Header, Content } = Layout;

export default function Home() {
  return (
    <Layout
      style={{
        height: "100%",
      }}
    >
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <img src={textLogo} width={125} className="App-logo" alt="logo" />
      </Header>
      <Content
        className="connect-page"
        style={{
          padding: "0 50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Row style={{ marginBottom: '48px' }}>
          <Col span={24}>
            <h1 >
              Growing your <b className="green">net worth </b>
              has never been this easy<b className="red">.</b>
            </h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '48px' }}>
          <Col span={24}>
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h3>
              Invest with the experts<b className="red">.</b>
            </h3>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
