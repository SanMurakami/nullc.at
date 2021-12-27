import React, { useEffect } from "react"
import Article from "./Article"
import Hero from "./Hero"

const App = (): JSX.Element =>
{
	const [isHeightOver, setIsHeightOver] = React.useState(false)

	useEffect(() =>
	{
		const scrollAction = () =>
		{
			if (window.scrollY > 150)
			{
				setIsHeightOver(true)
			}
			else
			{
				setIsHeightOver(false)
			}
		}

		window.addEventListener("scroll", scrollAction, {
			capture: false,
			passive: true,
		})
		scrollAction()

		return () =>
		{
			window.removeEventListener("scroll", scrollAction)
		}
	}, [])

	return (
		<div className={`App has-blured-background${isHeightOver ? " has-blured-background__is-scrolled" : ""}`}>
			<Hero />
			<Article />
		</div>
	)
}

export default App
