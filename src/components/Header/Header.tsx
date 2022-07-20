import React from 'react';
import {Title, Wrapper, ToggleButton, Content} from "./Header.styles";
import {IoMoonOutline} from "react-icons/io5";
import {HiOutlineSun} from "react-icons/hi";


export const Header = ({theme, toggleTheme}: any) => {
    return (
        <Wrapper>
            <Content>
                <Title to="/" style={{ textDecoration: 'none' }}>Where in the world?</Title>
                <ToggleButton onClick={() => toggleTheme()}>
                    {theme === "light" ? <IoMoonOutline/> : <HiOutlineSun/>}
                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </ToggleButton>
            </Content>
        </Wrapper>
    );
};
export default Header