export default function Hero() {
    return (
        <div className="relative bg-blue-100">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-4 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
                    <div className="mx-auto max-w-lg lg:mx-0">
                        <img
                            alt="Tidy Tails Husky"
                            src="/husky-svgrepo-com.svg"
                            className="h-20"
                        />
                        <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-blue-900 sm:mt-10 sm:text-7xl">
                            Clean Lawns<br></br>All the Time.
                        </h1>
                        <p className="mt-8 text-xl font-medium text-pretty text-blue-700 sm:text-xl/8">
                            Tidy Tails will make sure your lawn is free of animal waste. Get your free quote now!
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="text-xl rounded-full bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-200 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Free Quote
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                        alt="Happy husky photo"
                        src="/huskyhero.jpg"
                        className="aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full p-4 rounded-[3rem]"
                    />
                </div>
            </div>
        </div>
    )
}