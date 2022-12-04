import {AiOutlineMail} from 'react-icons/ai'
import {BsFillTelephoneFill, BsLinkedin, BsGithub} from 'react-icons/bs'
import styled from "styled-components";

const Icons = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 80%;
        margin: auto;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 420px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`;

const Contact = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #b9b9b9;
    
    p {
        margin: 0;
    }
    
    &:hover {
        color: #f1f1f1;
    }
`;


function ContactIcons() {
    return(
        <Icons>
            <Contact href="mailto:rodrigbsouza@gmail.com" target="_blank">
                <AiOutlineMail size={40}/>
                <p>Email</p>
                <p>rodrigbsouza@gmail.com</p>
            </Contact>
            <Contact href="https://api.whatsapp.com/send?phone=5535999601272" target="_blank" >
                <BsFillTelephoneFill size={40}/>
                <p>Telefone</p>
                <p>(35) 99960-1272</p>
            </Contact>
            <Contact href="https://www.linkedin.com/in/rodrigo-b-souza/" target="_blank">
                <BsLinkedin size={40}/>
                <p>LinkedIn</p>
                <p>@rodrigo-b-souza</p>
            </Contact>
            <Contact href="https://github.com/RodrigoBSouza" target="_blank">
                <BsGithub size={40}/>
                <p>GitHub</p>
                <p>@RodrigoBSouza</p>
            </Contact>
        </Icons>

    )
}

export default ContactIcons;