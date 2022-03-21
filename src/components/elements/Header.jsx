import React from "react";
import { StyledHeader } from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content" >
      <a className="link-to" href="/" style={{textDecoration : 'none'}}>
        <strong>MOVIE APP</strong>
      </a>
    </div>
  </StyledHeader>
);

export default Header;
