

const Hero = () => {
    return (
        <div>
             <section className="dark:bg-gray-100 dark:text-gray-800 shadow-xl">
        <div className="flex flex-col-reverse justify-center p-1 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Books to freshen up your bookshelf
            </h1>

            <div className="flex flex-col space-y-4 mt-10 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a className="btn bg-[#23BE0A] text-white hover:text-black hover:border-[#23BE0A] hover:bg-transparent">
                View The List
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="./cover.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
        </div>
    );
};

export default Hero;