import React from "react"
import { Layout, Row, Col } from "antd"
import textLogo from "../images/newfi-logo-text.svg"
import logo from "../images/newfi-logo.svg"
import volatile from "../images/volatile-pool.svg"
import stable from "../images/stable-pool.svg"
import ethDiamondOne from "../images/eth-diamond-1.svg"
import "antd/dist/antd.css"
import "../styles/newfi-theme.css"
import "../styles/home.css"

const { Header, Content } = Layout

export default function Home() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <img src={textLogo} width={125} className="App-logo" alt="logo" />
      </Header>
      <Content
        className="connect-page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="home-content-top home-dark">
          <Row style={{ marginBottom: "48px" }}>
            <Col span={24}>
              <h1>
                Growing your <b className="green">net worth </b>
                has never been this easy<b className="red">.</b>
              </h1>
            </Col>
          </Row>
          <Row style={{ marginBottom: "48px" }}>
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
        </div>
        <div className="home-content-section">
          <Row justify="start" className="home-content-text-box">
            <Col span={12}>
              <h1>
                Create <b className="rainbow">Investor Strategies</b> For Others
                to Follow<b className="red">.</b>
              </h1>
              <h2>
                Create an investment pool as a portfolio manager that allows
                users to <b>easily join</b> your portfolio strategies
                <b className="red">.</b>
              </h2>
            </Col>
            <Col span={12}></Col>
            <img
              style={{ position: "absolute", right: 0 }}
              src={ethDiamondOne}
              alt="logo"
            />
          </Row>
          <Row gutter={100}>
            <Col span={12}>
              <img src={volatile} className="volatile-pool" alt="logo" />
            </Col>
            <Col span={12}>
              <img src={stable} className="stable-pool" alt="logo" />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
