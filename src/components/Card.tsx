import img from '../assets/casino1.png'
export const Card = () => {
  return (
    <div className='flex flex-col gap-6 bg-white'>
        <img src={img} alt="" />
       <div className='p-4 flex flex-col gap-3'>
       <h3 className='text-2xl'>titulo</h3>
        <p>2 de Oct -20 de Nov</p>
        <button className='bg-green-600 text-white text-lg py-2 px-5 rounded-md max-w-xs'>
						Ver mas
					</button>
       </div>
    </div>
  )
};
