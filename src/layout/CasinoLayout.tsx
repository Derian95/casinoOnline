import { FC } from 'react'
import { Navbar } from '../components'

interface Props {
	children: React.ReactNode
}
export const CasinoLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<header>
                <Navbar/>
            </header>
			<main   className='flex flex-col bg-white justify-center'>
				{children}
			</main>
				<footer></footer>

		</div>
	)
}
