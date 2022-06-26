import { useState } from "react"
import data from "../data.json"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
      body {
        background: url("./assets/destination/background-destination-mobile.jpg");
        padding: 5%;
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 768px) {
            background: url("./assets/destination/background-destination-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }

        @media (min-width: 1440px) {
            background: url("./assets/destination/background-destination-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }
}`

const DivMaster = styled.div`
    @media (min-width: 1440px) {
       display: flex;
       text-align: left;
       margin-top: 5%;
       justify-content: space-evenly;
    }
`

const Photo = styled.img`
    height: auto;
    width: 50%;
    margin-top: 7%;

    @media (min-width: 768px) {
        width: 45%;
    }

    @media (min-width: 1440px) {
        width: 90%;
    }
`

const DivSpecialist = styled.div`
     @media (min-width: 1440px) {
            width: 35%;
        }
`

const Shift = styled.button`
    font-family: 'Barlow Condensed', sans-serif;
    color: #D0D6F9;
    background-color: transparent;
    border: none;
    padding-right: 3%;
    font-size: 1.5rem;
    line-height: 3rem;

    &:hover {
        border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    }

    &:active {
        border-color: white;
    }
`

const Navigation = styled.div`
    margin-top: 6%;
    text-align: center;
    border: none;

    @media (min-width: 768px) {
        margin-left: 5%;
    }

    @media (min-width: 1440px) {
        text-align: left;
        margin-left: 0;
    }
`

const Object = styled.h2`
    color: #FFFFFF;
    font-size: 3.5rem;
    font-family: 'Bellefair', serif;
    margin-top: 4%;

    @media (min-width: 768px) {
        margin-top: 3%;
        font-size: 4.4rem;
        margin-left: 2%;
    }

    @media (min-width: 1440px) {
        margin-left: 0;
    }
`

const LineBreak = styled.hr`
    height: 2px;
    width: auto;
    background-color: grey;
    margin-top: 10%;
`

const Divider = styled.div`
    margin-top: 7%;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        margin-top: 3%;
    }

    @media (min-width: 1440px) {
        justify-content: unset;
    }
`

const Area = styled.section`
    @media (min-width: 1440px) {
        padding-right: 10%;
    }
`

export default function Destinations() {
    const[objects] = useState(data.destinations)
    const [value, setValue] = useState(0)
    const {name, images, description, distance, travel} = objects[value]
    
    return (
        <main className="destiny">
            <GlobalStyle />
            <header>
                <h1 className="heading">
                    <strong>
                        <span className="pagenumber">
                            01
                        </span>
                    </strong>
                        PICK YOUR DESTINATION
                </h1>
            </header>
            <DivMaster>
                <div>
                    <Photo src={images.png} alt={name} title={name} />
                </div>
                <DivSpecialist>
                    <Navigation>
                        {objects.map((item, index) => (
                            <Shift key={index} onClick={() => setValue(index)}>
                                {item.name.toUpperCase()}
                            </Shift>
                        ))}
                    </Navigation>
                    <Object>
                        {name.toUpperCase()}
                    </Object>
                    <p className="intel">
                        {description}
                    </p>
                    <LineBreak />
                    <Divider>
                        <Area>
                            <h3 className="average">
                                AVG.DISTANCE
                            </h3>
                            <p className="answer">
                                {distance}
                            </p>
                        </Area>
                        <section>
                            <h3 className="average">
                                EST. TRAVEL TIME
                            </h3>
                            <p className="answer">
                                {travel}
                            </p>
                        </section>
                    </Divider>
                </DivSpecialist>
            </DivMaster>
        </main>
    )
}