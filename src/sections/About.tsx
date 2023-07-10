import { useState } from 'react';
import imagen from '../assets/casino1.png'

export const About = () => {

    const [about, setAbout] = useState('mision');
    
    const changeDescriptionAbout=(value:string) => {
      setAbout(value)
    }


	return (
		<div className=' flex justify-center'>
            <div className='max-w-7xl flex min-h-[90vh] items-center gap-10'>
           <div className='flex flex-col gap-6'>
           <h2 className='text-4xl'>Bienvenidos a nuestro casino</h2>
           <div className='flex gap-5'>
           <h3 onClick={()=>changeDescriptionAbout('mision')} className={`${about=='mision' ? 'text-green-500':''}`}>Mision</h3>
           <h3 onClick={()=>changeDescriptionAbout('vision')} className={`${about=='vision' ? 'text-green-500':''}`}>Vision</h3>
           </div>
            <p   className={`${about=='mision' ? 'block':'hidden'} text-lg `}>
				One of the most significant benefits of online casinos is their
				convenience. Players no longer have to travel to a physical casino to
				enjoy their favorite games as they can access them from anywhere with an
				internet connection. This means that players can play at any time of the
				day or night, making it a perfect option for those with busy schedules
				or those who prefer to play in the comfort. Another benefit of online
				casinos is the wide range of games on offer. From classic table games
				like roulette and blackjack to new and innovative slot titles, online
				casinos have something for everyone. Additionally, many online casinos
				offer live dealer games, which provide an immersive and interactive
				gaming experience.
			</p>
            <p   className={`${about=='vision' ? 'block':'hidden'} text-lg`}>
				One of the most significant benefits of online casinos is their
				convenience. Players no longer have to travel to a physical casino to
				enjoy their favorite games as they can access them from anywhere with an
				internet connection. This means that players can play at any time of the
				day or night, making it a perfect option for those with busy schedules
				or those who prefer to play in the comfort. Another benefit of online
				
			</p>
           </div>
            <img src={imagen} className='h-[50vh]' />
            </div>
			
		</div>
	)
}
