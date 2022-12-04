import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1C1C1C;
    color: #f1f1f1;
    font-weight: 500;
    height: 2.5em;
`;

function ContainerFooter() {
    let smaller = '<';
    let biggest = '/>';

    return(
        <Footer>Powered by {smaller}RodrigoSouza{biggest} © 2022</Footer>
    )
}

export default ContainerFooter;