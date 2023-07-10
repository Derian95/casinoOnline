import { Card } from "../components/Card";

export const Promotion = () => {
  return (
    <div className='section-bg w-full min-h-[90vh] '>
			<div className='contain-annout h-full flex justify-center py-20 bg-gray-400/30'>
				<div className='max-w-7xl flex flex-col gap-20'>
					<h2 className='text-center text-3xl'>Promociones</h2>
					<div className='grid grid-cols-4 gap-6'>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
  )
};
