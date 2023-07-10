import { VideoBackground } from '../components'

export const Hero = () => {
	return (
		<div className='w-full h-screen bg-red-500'>
			<div className='absolute bg-slate-950/60 w-full h-full flex justify-center'>
				<div className='w-full max-w-7xl  flex flex-col justify-center gap-5 h-full '>
					<h1 className='text-white text-7xl max-w-sm font-bold '>
						CASINO WINMEIER
					</h1>
					<p className='max-w-md text-white text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
						dignissimos ad, inventore itaque ut labore nemo aliquam vitae ab su.
					</p>
					<button className='bg-green-600 text-white text-lg py-2 px-5 rounded-md max-w-xs'>
						Conocenos
					</button>
				</div>
			</div>
			<VideoBackground />
		</div>
	)
}
