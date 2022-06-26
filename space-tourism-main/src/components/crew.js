import { useState } from "react"
import data from "../data.json"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { BsCircleFill } from "react-icons/bs"

const GlobalStyle = createGlobalStyle`
      body {
        background: url("../assets/crew/background-crew-mobile.jpg");
        padding: 5%;
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 768px) {
            background: url("./assets/crew/background-crew-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            padding-bottom: 0;
        }

        @media (min-width: 1440px) {
            background: url("./assets/crew/background-crew-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            padding-bottom: 0;
        }
}`

const CrewHeader = styled.h1`
    font-size: 1.7rem;
    margin-left: 10%;
    color: #FFFFFF;
    font-family: 'Barlow Condensed', sans-serif;

    @media (min-width: 768px) {
        margin: 0;
        font-size: xx-large;
        width: 80%;
        padding-right: 35%;
        letter-spacing: 4px;
    }
`

const Selection = styled.section`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1440px) {
            width: 65%;
            padding-right: 10%;
        }
`

const DotSwitch = styled.button`
    background-color: transparent;
    border: none;
    color: #979797;
    padding-right: 5%;

    :hover {
        color: lightgrey;
    }

    :active {
        color: #fff;
    }

    @media (min-width: 768px) {
            padding-right: 3%;
        }
`

const ImageLine = styled.hr`
    height: 2px;
    width: auto;
    background-color: grey;
    margin-top: 0;

    @media (min-width: 768px) {
            display: none;
        }
`

const DivineDivide = styled.div`
    display: flex;
    flex-direction: row;
`

const Dots = styled.nav`
    margin-bottom: 5%;

    @media (min-width: 768px) {
        order: 1;
        margin-top: 4%;
        }

        @media (min-width: 1440px) {
            margin-top: 27%;
            position: absolute;
            width: 50%;
        }
`

const Role = styled.span`
    font-family: 'Bellefair', serif;
    color: #707070;
    font-size: 1.3rem;

    @media (min-width: 768px) {
            font-size: 2rem;
        }
`

export default function Crew() {
    const[people] = useState(data.crew)
    const [value, setValue] = useState(0)
    const {name, images, role, bio} = people[value]
    
    return (
        <main className="destiny">
            <GlobalStyle />
            <header>
                <CrewHeader>
                    <strong>
                        <span className="pagenumber">
                            02
                        </span>
                    </strong>
                        MEET YOUR CREW
                </CrewHeader>
            </header>
            <div className="flex-boy">
                <div className="switch-content">
                    <img className="photos" src={images.png} alt={name} title={name} />
                    <ImageLine />
                </div>
                <DivineDivide>
                    <Selection>
                        <Dots>
                            {people.map((item, index) => (
                                <DotSwitch key={index} onClick={() => setValue(index)}>
                                    <BsCircleFill className="circles" />
                                </DotSwitch>
                            ))}
                        </Dots>
                        <Role>
                            {role.toUpperCase()}
                        </Role>
                        <h1 className="name">
                            {name.toUpperCase()}
                        </h1>
                        <p className="intel">
                            {bio}
                        </p>
                    </Selection>
                </DivineDivide>
            </div>
        </main>
            
    )
}