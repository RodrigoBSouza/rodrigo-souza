import styled from "styled-components";

const ContainerLogo = styled.a`
    display: flex;
    align-items: center;
    color: #b9b9b9;
    font-size: 24px;
    cursor: pointer;
    padding-left: 50px;
    text-decoration: none;

    &:hover {
        color: #f1f1f1;
    }

    @media screen and (max-width: 420px) {
        padding-left: 10px;
    }

`;

function Logo() {
    let smaller = '<';
    let biggest = '/>';

    return(
        <ContainerLogo href={<ContainerLogo/>}>
            {smaller}<p>RodrigoSouza</p>{biggest}
        </ContainerLogo>
    )
}

export default Logo;