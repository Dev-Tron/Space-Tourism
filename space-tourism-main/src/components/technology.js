import { useState } from "react"
import data from "../data.json"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      body {
        background: url("../assets/technology/background-technology-mobile.jpg");
        padding: 5%;
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 768px) {
            background: url("./assets/technology/background-technology-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }

        @media (min-width: 768px) {
            background: url("./assets/technology/background-technology-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }
}`

const MainIdea = styled.main`
    text-align: center;
    margin-top: 5%;

    @media (min-width: 768px) {
        margin-top: 8%;
        }

    @media (min-width: 1440px) {
        display: flex;
        }
`

const TopHead = styled.header`
    width: 100%;
    font-family: 'Barlow Condensed', sans-serif;

    @media (min-width: 1440px) {
        position: absolute;
        right: 35%;
        }
    
`

const Head = styled.h1`
    margin-left: 15%;

    @media (min-width: 768px) {
           width: auto;
           margin-left: 0;
           margin-right: 30%;
        }

        @media (min-width: 1440px) {
           width: inherit;
           margin-left: 20%;
        }
`

const Tool = styled.div`
    position: absolute;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
        top: 20%;
        }

    @media (min-width: 1024px) {
        top: 30%;
        }

    @media (min-width: 1440px) {
        position: unset;
        order: 1; 
        margin-top: 6%;
        }
`

const Instrument = styled.img`
    width: inherit;

    @media (min-width: 1440px) {
           display: none;
        }
`

const Portrait = styled.img`
    @media (max-width: 1439px) {
           display: none;
        }
    
        @media (min-width: 1440px) {
           margin-left: 15%;
        }
`

const NumberList = styled.nav`
    margin-top: 60%;

    @media (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        width: 8%;
        position: absolute;
        width: 4%;
        bottom: 24%;
        left: 12%;
        }
`

const Circles = styled.button`
    background-color: transparent;
    border-radius: 50%;
    margin-left: 7%;
    color: #FFFFFF;
    padding: 2% 4%; 
    border-color: grey;
    border-style: solid;

    :hover {
        border-color: lightgray;
    }

    :active {
        background-color: #FFFFFF;
        color: black;
    }

    @media (min-width: 768px) {
        font-size: 1.5rem;
        margin-left: 3%;
        }

    @media (min-width: 1440px) {
        margin-bottom: 40%;
        padding: 20% 85% 35% 60%;
        font-size: 2rem;
        }
`

const Term = styled.span`
    color: #D0D6F9;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
`

const Segment = styled.section`
    margin-top: 4%;

    @media (min-width: 768px) {
        padding: 0 4%;
        margin-top: 6%;
        }

    @media (min-width: 1440px) {
        text-align: left;
        width: 100%;
        margin-left: 17%;
        margin-top: 12%;
        padding-right: 0;
        }
`

export default function Technology() {
    const[tech] = useState(data.technology)
    const [value, setValue] = useState(0)
    const {name, images, description} = tech[value]
    
    return (
        <MainIdea>
            <GlobalStyle />
            <TopHead>
                <Head className="heading">
                    <strong>
                        <span className="pagenumber">
                            03
                        </span>
                    </strong>
                        SPACE LAUNCH 101
                </Head>
            </TopHead>
            <Tool>
                <Instrument src={images.landscape} alt={name} title={name} />
                <Portrait src={images.portrait} alt={name} title={name} />
            </Tool>
            <NumberList>
                {tech.map((item, index) => (
                <Circles key={index} onClick={() => setValue(index)}>
                    {index + 1}
                </Circles>
                ))}
            </NumberList>
            <Segment>
                <Term>
                    THE TERMINOLOGY...
                </Term>
                <h1 className="name">
                        {name.toLocaleUpperCase()}
                    </h1>
                <p className="intel">
                    {description}
                </p>
            </Segment>
        </MainIdea>
            
    )
}