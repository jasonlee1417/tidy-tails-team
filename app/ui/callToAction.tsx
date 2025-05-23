export default function CallToAction() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 p-0 pt-20 md:pt-14 lg:pt-0 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Ready to dive in? <br />
                    Get your free quote now! <br /> <br />
                    <a
                        href="#"
                        className="rounded-full pt-4 bg-blue-800 px-3.5 py-3.5 text-3xl font-semibold text-white shadow-xs hover:bg-blue-200 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Free Quote
                    </a>
                </h2>
                <div className="flex justify-center">
                    <img
                        alt="Happy husky photo"
                        src="/cta.png"
                        className="h-[35vh] aspect-square"
                    />
                </div>
            </div>
        </div>
    )
}
