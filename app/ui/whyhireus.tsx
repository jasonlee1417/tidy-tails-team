const features = [
    {
        name: 'Trusted Employees.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: '/verify.png',
    },
    {
        name: 'Pet Safety.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: '/shovel.png',
    },
    {
        name: 'No Contracts.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: '/prohibited.png',
    },
]

export default function WhyHireUs() {
    return (
        <div className="overflow-hidden bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-xl font-semibold text-blue-800">The Best in Philadelphia</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Why the Tidy Tail Team?
                            </p>
                            <p className="mt-6 text-xl text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-2xl text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-14">
                                        <dt className="inline font-semibold text-blue-800">
                                            <img src={feature.icon} aria-hidden="true" className="absolute top-1 left-1 h-[4vh]" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Tidy Tail Team hard at work"
                        src="/whyhireus.jpeg"
                        width={2432}
                        height={1442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
