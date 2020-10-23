import React from "react"
import { Layout, Row, Col } from "antd"
import { MediumSquareFilled, TwitterOutlined, MessageOutlined } from "@ant-design/icons"
import textLogo from "../images/newfi-logo-text.svg"
import logo from "../images/newfi-logo.svg"
import volatile from "../images/volatile-pool.svg"
import stable from "../images/stable-pool.svg"
import ethDiamondOne from "../images/eth-diamond-1.svg"
import ethDiamondTwo from "../images/eth-diamond-2.svg"
import ethDiamondFour from "../images/eth-diamond-4.svg"
import largeGraphic from "../images/large-graphic.svg"
import diamondDivider from "../images/diamond-divider.svg"
import "antd/dist/antd.css"
import "../styles/newfi-theme.css"
import "../styles/home.css"

const { Header, Content, Footer } = Layout

export default function Home() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <img src={textLogo} width={125} className="App-logo" alt="logo" />
      </Header>
      <Content
        className="home-page"
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
            <Col span={12} />
            <img
              style={{ position: "absolute", right: 0, top: "93%" }}
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
        <div
          className="home-content-section"
          style={{ width: "100%", padding: "0" }}
        >
          <Row align="middle" justify="center">
            <Col span={8}>
              <img src={ethDiamondTwo} alt="logo" />
            </Col>
            <Col className="home-center" span={8}>
              <img src={diamondDivider} alt="logo" />
            </Col>
            <Col span={8} />
            <img
              style={{ position: "absolute", right: 0, paddingTop: "300px" }}
              src={ethDiamondFour}
              alt="logo"
            />
          </Row>
        </div>
        <div className="home-content-section">
          <Row justify="start" className="home-content-text-box">
            <Col span={12}>
              <h1>
                Manage Your <b className="rainbow">Wealth</b> in One Simple
                Interface<b className="red">.</b>
              </h1>
              <h2>
                Match your individualized needs with the proper allocation in
                stable and volatile pools, all managed by the <b>experts</b>
                <b className="red">.</b>
              </h2>
            </Col>
            <Col span={12} />
          </Row>
          <div className="home-center">
            <Row align="center" justify="center">
              <Col span={24}>
                <img src={largeGraphic} alt="logo" />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer className="home-dark">
        <Row>
          <Col span={8}>
            <img src={textLogo} width={125} className="App-logo" alt="logo" />
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            Created at ETHOnline 2020
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent:'flex-end' }}>
            <Row
              align="middle"
              justify="center"
              gutter={50}
              style={{ textAlign: "center" }}
            >
              <Col span={8}>
                <MessageOutlined className="home-icon" />
              </Col>
              <Col span={8}>
                <a href="https://twitter.com/newfiapp">
                <TwitterOutlined className="home-icon" />
                </a>
              </Col>
              <Col span={8}>
                <a href="https://medium.com/@newfi">
                <MediumSquareFilled className="home-icon" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
