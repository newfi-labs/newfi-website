import React from "react"
import { Layout, Row, Col } from "antd"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import textLogo from "../images/newfi-logo-text.svg"
import logo from "../images/newfi-logo.svg"
import volatile from "../images/volatile-pool.svg"
import stable from "../images/stable-pool.svg"
import ethDiamondOne from "../images/eth-diamond-1.svg"
import ethDiamondTwo from "../images/eth-diamond-2.svg"
import ethDiamondFour from "../images/eth-diamond-4.svg"
import ethDiamondFive from "../images/eth-diamond-5.svg"
import ethDiamondSix from "../images/eth-diamond-6.svg"
import largeGraphic from "../images/large-graphic.svg"
import diamondDivider from "../images/diamond-divider.svg"
import chartViz from "../images/chart-viz.svg"
import "antd/dist/antd.css"
import "../styles/newfi-theme.css"
import "../styles/home.css"

const { Header, Content, Footer } = Layout

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NewFi - Invest with the experts</title>
      </Helmet>
      <Header
        className="home-header"
        style={{ position: "fixed", zIndex: 2, width: "100%" }}
      >
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
              <h1 style={{ margin: "0 20px" }}>
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
          <Row justify="start" className="home-content-text-box" style={{ marginTop: "135px" }}>
            <Col style={{ zIndex: 1 }} xs={24} sm={24} md={12} lg={12}>
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
              style={{
                position: "absolute",
                right: 0,
                top: "93%",
              }}
              src={ethDiamondOne}
              alt="logo"
            />
          </Row>
          <Row gutter={100} justify="center" align="middle">
            <Col xs={24} sm={24} md={12} lg={12}>
              <img
                src={volatile}
                width="100%"
                className="volatile-pool"
                alt="logo"
                style={{ zIndex: 1 }}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}
                 style={{ zIndex: 1 }}
            >
              <img
                src={stable}
                width="100%"
                className="stable-pool"
                alt="logo"
              />
            </Col>
          </Row>
        </div>
        <div
          className="home-content-section"
          style={{ width: "100%", padding: "0" }}
        >
          <Row align="middle" justify="center">
            <Col span={8}>
              <img
                  style={{ position: "absolute" }}
                className="image-responsive"
                src={ethDiamondTwo}
                alt="logo"
              />
            </Col>
            <Col style={{ zIndex: 1 }} className="home-divider home-center" span={8}>
              <img src={diamondDivider} alt="logo" />
            </Col>
            <Col span={8} />
            <img
              className="image-responsive"
              style={{
                position: "absolute",
                right: 0,
                paddingTop: "300px",
                maxWidth: "50%",
              }}
              src={ethDiamondFour}
              alt="logo"
            />
          </Row>
        </div>
        <div className="home-content-section">
          <Row justify="start" className="home-content-text-box">
            <Col xs={24} sm={24} md={12} lg={12}>
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
            <img
              style={{ zIndex: 1 }}
              width="100%"
              src={largeGraphic}
              alt="logo"
            />
          </div>
        </div>
        <div
          className="home-content-section"
          style={{ width: "100%", padding: "0" }}
        >
          <Row align="middle" justify="center">
            <Col span={8}>
              <img
                className="image-responsive"
                src={ethDiamondSix}
                alt="logo"
                style={{ position: "absolute", top: "-450px" }}
              />
            </Col>
            <Col style={{ zIndex: 1 }} className="home-divider home-center" span={8}>
              <img src={diamondDivider} alt="logo" />
            </Col>
            <Col span={8} />
            <img
              style={{
                position: "absolute",
                right: 0,
                paddingBottom: "200px",
                maxWidth: "50%",
              }}
              src={ethDiamondFive}
              alt="logo"
            />
          </Row>
        </div>
        <div className="home-content-section">
          <Row justify="start" className="home-content-text-box">
            <Col xs={24} sm={24} md={12} lg={12}>
              <h1>
                Track, Reposition and Make Your Way{" "}
                <b className="rainbow">to the Top</b>
                <b className="red">.</b>
              </h1>
              <h2>
                Analyze and manage your overall position. Effortlessly capture
                rewards and yield. Sell or convert your position at{" "}
                <b>any time</b>
                <b className="red">.</b>
              </h2>
            </Col>
            <Col span={12} />
          </Row>
          <div className="home-center">
            <img
              width="100%"
              src={chartViz}
              alt="logo"
              style={{ position: "absolute" }}
            />
          </div>
        </div>
      </Content>
      <Footer className="home-dark home-footer">
        <Row className="row-center" justify="center" align="middle">
          <Col xs={24} sm={24} md={8} lg={8}>
            <img src={textLogo} width={125} className="App-logo" alt="logo" />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} style={{ textAlign: "center" }}>
            Created at ETHOnline 2020
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} className="footer-icons">
            <Row
              align="middle"
              justify="center"
              gutter={50}
              style={{ textAlign: "center" }}
            >
              <Col span={8}>
                <a href="https://discord.gg/qTZSpu">
                  <FontAwesomeIcon className="home-icon" icon={faDiscord} />
                </a>
              </Col>
              <Col span={8}>
                <a href="https://twitter.com/newfiapp">
                  <FontAwesomeIcon className="home-icon" icon={faTwitter} />
                </a>
              </Col>
              <Col span={8}>
                <a href="https://medium.com/@newfi">
                  <FontAwesomeIcon className="home-icon" icon={faMedium} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
