import styled from "styled-components"

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`

const HeroBody = styled.div`
	font-size: 5em;
	color: white;
	text-align: center;
	filter: drop-shadow(0 0.25rem 0.25rem #003c4b);
`

const HeroTitle = styled.p`
	font-size: 1em;
	font-family: 'Mochiy Pop One', sans-serif;
	font-weight: bold;
	margin: 0;
`

const HeroSubtitle = styled.p`
	font-size: 0.5em;
	font-family: 'Work Sans', sans-serif;
	margin: 0;
	letter-spacing: 1em;
`

const Hero = () =>
{
	return (
		<Wrapper>
			<HeroBody>
				<HeroTitle>ぬるきゃっとちゃん!</HeroTitle>
				<HeroSubtitle>- FANCLUB -</HeroSubtitle>
			</HeroBody>
		</Wrapper >
	)
}


export default Hero
