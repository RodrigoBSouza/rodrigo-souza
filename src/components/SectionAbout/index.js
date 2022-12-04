import styled from "styled-components";

const About = styled.section`
    padding: 50px 150px;
    padding-bottom: 30px;
    background-color: #ffdaac;
    color: #1f1f1f;

    h2 {
        margin: 0;
        padding-top: 30px;
        font-size: 2.5em;
    }

    p {
        font-size: 1.5em;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        padding-bottom: 20px;

        h2 {
            padding-top: 10px;
            font-size: 2em;
            text-align: center;
        }

    }

    @media screen and (max-width: 420px) {
        padding: 10px;
        padding-bottom: 20px;

        h2 {
            padding-top: 10px;
            font-size: 1.8em;
            text-align: center;
        }

        p {
            font-size: 1.5em;
        }
    }
`;

function SectionAbout() {
    return(
        <About>
            <h2>
                Meu nome é Rodrigo Souza, sou estudante e desenvolvedor Front-End, meu foco é performace, 
                aprendizagem e principalmente resolução de problemas.
            </h2>
            <p>
                Entusiasta e apaixonado por tecnologia, após 07 anos trabalhando como suporte técnico na área de 
                redes eu me aventurei no mundo da programação e aqui estou há pouco mais de 01 ano! 
            </p>

            <p>
                Tenho conhecimento em HTML, CSS, Javascript e ReactJS. Continuo buscando mais e mais consolidar o que  
                tenho aprendido ao longo desta jornada. Sou casado, tenho um filho, gosto de estudar e nas horas vagas 
                curto uma gameplay! 
            </p>
        </About>
    )
}

export default SectionAbout;