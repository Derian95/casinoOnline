import video from '../assets/video.mp4'

export const VideoBackground = () => {
	return (
		<div>
			<video className='w-full h-screen object-cover' >
				<source src={video} type='video/mp4' />
			</video>
		</div>
	)
}
