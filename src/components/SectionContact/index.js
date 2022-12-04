import styled from "styled-components";
import ContactIcons from "../ContactIcons";

const Contact = styled.section`
    padding: 50px 150px;
    background-color: #1f1f1f;
    color: #f1f1f1;

    h2 {
        text-align: center;
        font-size: 5em;
        margin: 0;
        padding-bottom: 100px;
    }

    h3 {
        font-size: 1.5em;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;

        h2 {
            font-size: 4em;
            padding-bottom: 40px;
        }
    }

        
    @media screen and (max-width: 420px) {
        padding: 10px;

        h2 {
            font-size: 4em;
            padding-bottom: 40px;
        }
    }
`;

function SectionContact() {
    return(
        <Contact>
            <h2>Contatos</h2>
            <ContactIcons/>
        </Contact>
    )
}

export default SectionContact;