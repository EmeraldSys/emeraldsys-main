import * as React from "react"
import { Helmet } from "react-helmet"
import "../styles/index.css"

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <div className="centerLogo">
        <img className="centerLogoInner" src="static/emeraldsys_new_nobg.png" />
      </div>
      <div className="centerProjects">
        <a href="https://acidity.emeraldsys.xyz">
          <img style={{ height: "48px" }} src="https://emeraldsys.github.io/images/products/concept2_transparent.png" />
        </a>
        <a href="https://pki.emeraldsys.xyz">
          <img style={{ filter: "invert(100%)" }} src="https://raw.githubusercontent.com/google/material-design-icons/master/png/communication/vpn_key/materialiconsoutlined/48dp/1x/outline_vpn_key_black_48dp.png" />
        </a>
        <a href="https://edge.cdn.emeraldsys.xyz">
          <img style={{ filter: "invert(100%)" }} src="https://raw.githubusercontent.com/google/material-design-icons/master/png/file/cloud_download/materialiconsoutlined/48dp/1x/outline_cloud_download_black_48dp.png" />
        </a>
      </div>
      <span className="mainFooter">&copy; 2022 EmeraldSys Media Ltd. All rights reserved. | <a style={{ color: "#ddd", textDecoration: "none" }} href="https://status.emeraldsys.xyz">Service Status</a></span>
    </>
  )
}

export default Index
