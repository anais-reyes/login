import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
	height: 50px;
	background-color: #a9a9a9;
	color: red;
`;

class Nav extends Component {
	render() {
		return <StyledNav />;
	}
}

export default Nav;
