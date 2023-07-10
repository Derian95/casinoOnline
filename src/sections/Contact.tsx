
export const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
    <section className="mb-32 text-center">
      <div className="py-12 md:px-12">
        <div className="container mx-auto xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div
                className="relative z-[1] block rounded-lg bg-slate-700 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14">
                <h2 className="mb-12 text-3xl font-bold text-white">Contactenos</h2>
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border focus:border-green-500 border-green-200 border"
                      id="exampleInput90"
                      placeholder="Name" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus: peer-focus:text-primary peer-focus:bg-slate-700 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-white "
                      >Nombre
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border focus:border-green-500 border-green-200 border"
                      id="exampleInput91"
                      placeholder="Correo electronico" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-slate-700  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      >Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border focus:border-green-500 border-green-200 border"
                      id="exampleFormControlTextarea1"
                      placeholder="Your message"></textarea>
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-slate-700  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      >Mensaje
                      </label>
                  </div>
               
                  <button className='bg-green-600 text-white text-lg py-2 px-5 rounded-md max-w-xs'>
						Enviar
					</button>
					
                </form>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <div
                className="relative h-[700px] rounded-lg shadow-lg ">
                <iframe
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
