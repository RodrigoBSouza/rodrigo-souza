import profile from '../../img/profile.png';
import styled from "styled-components";

const Profile = styled.section`
    display: flex;
    background-color: #1c1c1c;
    align-items: center;
    padding: 250px;
    padding-bottom: 170px;

    @media screen and (max-width: 768px) {
        padding: 20px 0;
        height: 23em;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
        padding: 30px 0;
    }
`;

const Photo = styled.img`
    padding-left: 100px;
    position: absolute;
    width: 300px;

    @media screen and (max-width: 768px) {
        padding-left: 50px;
        margin-top: 70px;
        left: 0;
        width: 250px;
    }

    @media screen and (max-width: 420px) {
        position: relative;
        padding: 20px;
        margin: 80px auto;
        width: 200px;
    }
`;

const Paragraph = styled.p`
    font-size: 32px;
    color: #f1f1f1;
    white-space: nowrap;
    margin-left: 430px;
    overflow: hidden;
    border-right: 2px solid #f1f1f1;
    animation: cursor 600ms steps(40) infinite normal, typing 4s steps(40) 1s normal both;

    @keyframes typing {
        from {
            width: 0;
        }

        to {
            width: 13em;
        }
    }

    @keyframes cursor {
        from {
            border-right-color: #f1f1f1;
        }

        to {
            border-right-color: transparent;
        }
    }

    @media screen and (max-width: 768px) {
        margin-left: 320px;
        margin-top: 80px;
    }

    @media screen and (max-width: 420px) {
        font-size: 16px;
        margin: -80px auto;
    }
`;

function SectionProfile() {
    return(
        <Profile>
            <Photo src={profile}/>
            <Paragraph>Olá, seja bem vindo(a) =)</Paragraph>
        </Profile>
    )
}

export default SectionProfile;