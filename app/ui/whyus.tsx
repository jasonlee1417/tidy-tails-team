const features = [
    {
        name: 'Reliable Service',
        description:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
        href: '#',
    },
    {
        name: 'Satisfaction Guaranteed',
        description:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        href: '#',
    },
    {
        name: 'Your Yard, Your Way',
        description:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        href: '#',
    },
]

export default function Whyus() {

    return (
        <div className="bg-white pt-20 pb-14 sm:pb-20" id="why-us">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Why hire a pet waste removal company?
                    </p>
                    <p className="mt-6 text-xl text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex rounded-xl lg:p-8 flex-col lg:hover:shadow-xl transition sm:p-0">
                                <dt className="flex items-center gap-x-3 text-2xl font-semibold text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-xl text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}