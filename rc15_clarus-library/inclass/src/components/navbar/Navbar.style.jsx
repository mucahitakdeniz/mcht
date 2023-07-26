import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
background-color: :${({ theme }) => theme.colors.navbarBgColor};
padding:1rem 2rem;
`;

export const Logo = styled(NavLink)`

`;
export const HamburgerIcon = styled.div``;
export const Menu = styled(Flex)``;

export const MenuLink = styled(NavLink)``;
