import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import styled from "styled-components";
import { useState } from 'react';

const MenuNavMobile = styled.div` 
    display: none;
    z-index: 1;

    h3 {
        font-size: 28px;
        color: #f1f1f1;
    }

    @media screen and (max-width: 768px) {
        display: ${({open}) => open ? 'flex' : 'none'};
        flex-direction: column;
        background-color: #1f1f1f;
        text-align: center;
        position: absolute;
        padding-top: 440px;
        width: 100vw;
        height: 520px;
        list-style: none;
        color: #f1f1f1;
        cursor: pointer;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0;
        list-style: none;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }

    @media screen and (max-width: 420px) {
        display: ${({open}) => open ? 'flex' : 'none'};

        h3 {
            margin-top: 10px;
            margin-bottom: 5px;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0;
            list-style: none;
        }

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
        }
    }
`;

const Hamburger = styled.div`
    display: none;
    color: #f1f1f1;

    @media screen and (max-width: 768px) {
        display: flex;
        padding-right: 50px;
    }

    @media screen and (max-width: 420px) {
        display: flex;
        align-items: center;
        padding-right: 10px;
        cursor: pointer;
    }
`;

const Close = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    color: #b9b9b9;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        display: flex;
        padding: 20px 50px;
    }

    @media screen and (max-width: 420px) {
        display: flex;
        padding: 20px 10px;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
    gap: 20px;
    color: #f1f1f1;

    @media screen and (max-width: 420px) {
        display: flex;
    }
`;

const Icon = styled.a`
    &:hover {
        color: #8f8f8f;
    }
`;

function ResponsiveMenu() {
    let smaller = '<';
    let biggest = '/>';

    const [open, setOpen] = useState(false);

    const scrollToHome = () => {window.scrollTo(0, 0); setOpen(!open)};
    const scrollToAbout = () => {window.scrollTo(0, 340); setOpen(!open)};
    const scrollToProjects = () => {window.scrollTo(0, 1550); setOpen(!open)};
    const scrollToContacts = () => {window.scrollTo(0, 3300); setOpen(!open)};

    return(
        <>
            <Hamburger>
                <AiOutlineMenu size={40} open={open} onClick={() => setOpen(!open)}/>
            </Hamburger>

            <MenuNavMobile open={open}>
                <Close>
                    {smaller}RodrigoSouza{biggest}
                    <AiOutlineClose size={40} open={open} onClick={() => setOpen(!open)}/>
                </Close>
                <h3>Seja bem-vindo(a) ao meu repositório!</h3>
                    <ul>
                        <li onClick={scrollToHome}>Home</li>
                        <li onClick={scrollToAbout}>Sobre mim</li>
                        <li onClick={scrollToProjects}>Projetos</li>
                        <li onClick={scrollToContacts}>Contato</li>
                    </ul>
                <Icons>
                    <Icon>
                        <BsLinkedin size={25} cursor='pointer'/>
                    </Icon>

                    <Icon>
                        <BsGithub size={25} cursor='pointer'/>
                    </Icon>
                    
                    <Icon>
                        <AiOutlineMail size={25} cursor='pointer'/>
                    </Icon>
                </Icons>
            </MenuNavMobile>
        </>
    )
}

export default ResponsiveMenu;