import {BsGithub} from 'react-icons/bs';
import {BiLinkExternal} from 'react-icons/bi'
import styled from "styled-components";

const ContainerProjects = styled.section`
    background-color: #1c1c1c;
    padding: 50px 150px;
    color: #f1f1f1;

    h2 {
        font-size: 5em;
        margin: 0;
    }

    p {
        font-size: 1.5em;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 0;

        h2 {
            padding-top: 10px;
            font-size: 4em;
            text-align: center;
        }

        p {
            font-size: 1.5em;
            text-align: center;
        }
    }

    @media screen and (max-width: 420px) {
        padding: 10px;

        h2 {
            padding-top: 10px;
            font-size: 4em;
            text-align: center;
        }

        p {
            font-size: 1.3em;
            text-align: center;
        }
    }
`;

const Projects = styled.section`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 420px) {
        gap: 5px;
    }
`;

const AllProjects = styled.div`
    margin: auto;
    width: 100%;
    height: auto;
    padding: 10px 10px;
    background-color: #2a2a2a;
    margin-bottom: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: #b9b9b9;

    &:hover {
        color: #f1f1f1;
    }

    h3 {
        font-size: 1.8em;
        text-align: center;
        margin: 0;
    }

    p {
        font-size: 1.5;
        text-align: center;
        margin: 20px 0;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    @media screen and (max-width: 420px) {
        width: 90%;

        h3 {
            font-size: 1.5em;
            text-align: start;
        }

        p {
            font-size: 1em;
        }
    }
`;

const Icons = styled.div`
    display: flex;
    gap: 15px;
    position: absolute;
    right: 0;
    margin-right: 150px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 20px;
        gap: 10px;
        margin-right: 100px;
    }

    @media screen and (max-width: 420px) {
        display: flex;
        width: 20px;
        gap: 10px;
        margin-right: 75px;
    }
`;

const Icon = styled.a`
    text-decoration: none;
    color: #b9b9b9;

    &:hover {
        color: #f1f1f1;
    }
`; 

function SectionProjects() {
    const cards = [
        {
            id: 1,
            title: 'Terus Web',
            desc: 'Como estagiário na Vivo (Telefônica Brasil), desenvolvi este projeto para substituir o uso de uma API pelo SOAP. O intuito era tirar este serviço do SOAP e transformá-lo em uma aplicação web para facilitar o acesso dos usuários.',
            github: 'https://github.com/RodrigoBSouza/TerusWeb',
            live: 'https://rodrigobsouza.github.io/TerusWeb/'
        },
        {
            id: 2,
            title: 'Advice-Generator',
            desc: 'Gerador de "conselhos" utilizando Adviceslip API, este projeto foi desenvolvido com HTML, CSS e Javascript (desafio Frontend Mentor).',
            github: 'https://github.com/RodrigoBSouza/Advice-Generator-App',
            live: 'https://rodrigobsouza.github.io/Advice-Generator-App/'
        },
        {
            id: 3,
            title: 'Tip Calculator',
            desc: 'Calculadora de gorjetas com tema dark ou light, este projeto foi desenvolvido com HTML, CSS e Javascript (desafio Frontend Mentor).',
            github: 'https://github.com/RodrigoBSouza/tip-calculator',
            live: 'https://rodrigobsouza.github.io/tip-calculator/'
        },
        {
            id: 4,
            title: 'Landing Page',
            desc: 'Desafio do site Frontend Mentor, este projeto foi desenvolvido com HTML, CSS e Javascript.',
            github: 'https://github.com/RodrigoBSouza/landing-page-frontend-mentor',
            live: 'https://rodrigobsouza.github.io/landing-page-frontend-mentor/'
        },
        {
            id: 5,
            title: 'Meu Repositório',
            desc: 'Este foi o primeiro repositório que desenvolvi com HTML, CSS e Javascript. Vai ficar de lembrança!',
            github: 'https://github.com/RodrigoBSouza/eu-rodrigo',
            live: 'https://rodrigobsouza.github.io/eu-rodrigo/'
        },
        {
            id: 6,
            title: 'Card Interactive',
            desc: 'Simulador de compra com cartão de crédito, este projeto foi desenvolvido com HTML, CSS e Javascript (desafio Frontend Mentor). ',
            github: 'https://github.com/RodrigoBSouza/card-interactive',
            live: 'https://rodrigobsouza.github.io/card-interactive/'
        },
    ]

    return(
        <ContainerProjects>
            <h2>Projetos</h2>

            <p>
                Aqui estão alguns projetos que desenvolvi ao longo dessa minha caminhada de estudos, fique a vontade 
                para comentar sugestões, críticas, melhorias, etc.
            </p>

            <Projects>
                {cards.map(card => (
                    <AllProjects key={card.id} title={card.title} desc={card.desc}>
                        <Icons>
                            <Icon href={card.github} target="_blank">
                                <BsGithub size={30}/>
                            </Icon>
                            <Icon href={card.live} target="_blank">
                                <BiLinkExternal size={30}/>
                            </Icon>
                        </Icons>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </AllProjects>
                ))}
            </Projects>

        </ContainerProjects>
    )
}

export default SectionProjects;