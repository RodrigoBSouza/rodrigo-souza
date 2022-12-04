import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 50px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
    
    @media screen and (max-width: 420px) {
        display: none;
    }
`;

const Icon = styled.a`
    color: #b9b9b9;
    text-decoration: none;

    &:hover {
        color: #f1f1f1;
    }
`;

function NavIcons() {
    return(
        <Icons>
            <Icon href="https://www.linkedin.com/in/rodrigo-b-souza/" target="_blank"> 
                <BsLinkedin size={25} cursor='pointer'/>
            </Icon>
            <Icon href="https://github.com/RodrigoBSouza" target="_blank">
                <BsGithub size={25} cursor='pointer'/>
            </Icon>
            <Icon href="mailto:rodrigbsouza@gmail.com" target="_blank">
                <AiOutlineMail size={25} cursor='pointer'/>
            </Icon>
        </Icons>

    )
}

export default NavIcons;