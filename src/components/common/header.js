import React from "react"

import header from "../../../static/header_glow.png"

class Header extends React.Component {
  render = () => {
    return (
      <div className="header">
        <img src={header}></img>
      </div>
    )
  }
}

export default Header
