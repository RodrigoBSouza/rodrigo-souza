import styled from "styled-components";
import NavIcons from "../NavIcons";

const MenuNav = styled.ul`
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 0;
        list-style: none;
    }

    li {
        color: #b9b9b9;
        cursor: pointer;
        font-size: 18px;

        &:hover {
            color: #f1f1f1;
        }
    }

    @media screen and (max-width: 768px) {
                ul {
            display: none;
        }
    }

    @media screen and (max-width: 420px) {
        ul {
            display: none;
        }
    }
`;

function NavHeader() {
    const scrollToHome = () => window.scrollTo(0, 0);
    const scrollToAbout = () => window.scrollTo(0, 450);
    const scrollToProjects = () => window.scrollTo(0, 1150);
    const scrollToContacts = () => window.scrollTo(0, 5000);
    
    return(
        <>
            <MenuNav>
                <ul>
                    <li onClick={scrollToHome}>Home</li>
                    <li onClick={scrollToAbout}>Sobre mim</li>
                    <li onClick={scrollToProjects}>Projetos</li>
                    <li onClick={scrollToContacts}>Contato</li>
                </ul>
            </MenuNav>
            <NavIcons/>
        </>
    )
}

export default NavHeader;