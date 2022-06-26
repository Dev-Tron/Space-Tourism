import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
      body {
        background: url("./assets/home/background-home-mobile.jpg");
        padding: 5%;
        background-repeat: no-repeat;
        background-size: cover;

        @media (min-width: 768px) {
            background: url("./assets/home/background-home-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }

        @media (min-width: 1440px) {
            background: url("./assets/home/background-home-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
        }

}`

const MainContainer = styled.div`
    text-align: center;
    margin-top: 8%;

    @media (min-width: 768px) {
            margin-top: 20%;
        }

        @media (min-width: 1440px) {
            display: flex;
            text-align: left;
            margin-top: 25%;
        }
`

const Title = styled.h1`
    color: #D0D6F9;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    letter-spacing: 3px;
`

const Space = styled.span`
    color: #FFFFFF;
    line-height: initial;
    font-size: 5rem;
    font-family: 'Bellefair', serif;

    @media (min-width: 768px) {
            font-size: 150px;
        }
`

const Topic = styled.section`
     @media (min-width: 1440px) {
            width:  55%;
            padding: 0 10%;
        }
`

const Intro = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow', sans-serif;
    margin-top: 6%;
    line-height: revert;
    width: 97%;

    @media (min-width: 768px) {
            width: 100%;
            font-size: large;
            padding: 0 16%;
            margin-top: 1%;
            line-height: 2rem;
        }

        @media (min-width: 1440px) {
            padding: 0;
        }
`

const Wide = styled.div`
    width: 100%;

    @media (min-width: 667px) {
            width: 60%;
            margin-left: 20%;
        }

    @media (min-width: 768px) {
            width: 100%;
            margin-left: 0;
        }

    @media (min-width: 1024px) {
            width: 80%;
            margin-left: 10%;
        }

    @media (min-width: 1440px) {
            width: 100%;
            margin-left: 0;
        }

`

const Push = styled.button`
    font-family: 'Bellefair', serif;
    width: 40%;
    height: auto;
    border-radius: 50%;
    padding-top: 15%;
    padding-bottom: 15%;
    border: none;
    margin-top: 20%;
    letter-spacing: 2px;

    &:hover {
    box-shadow: 0 0 0 3rem rgba(255, 255, 255, 0.05);
    transition: all 0.5s ease;
  }

    @media (min-width: 667px) {
            margin-top: 10%;
        }

    @media (min-width: 768px) {
        width: 30%;
        padding: 12% 0;
        font-size: xx-large;
    }

    @media (min-width: 1440px) {
            width: 40%;
            padding: 14% 0;
            margin-left: 36%;
        }
`

export default function Home() {
    return (
        <main>
            <GlobalStyle />
                <MainContainer>
                    <Topic>
                        <Title>
                            SO, YOU WANT TO TRAVEL TO
                        </Title>
                        <Space>
                            SPACE
                        </Space>
                        <Intro>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </Intro>
                    </Topic>
                    <Wide>
                        <Push>
                            EXPLORE
                        </Push>
                    </Wide>
                </MainContainer>
        </main>
    )
}