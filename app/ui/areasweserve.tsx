"use client"

import { MapPinIcon } from "@heroicons/react/24/outline"
import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect } from "react"

const features = [
    {
        name: 'Wyncote',
        icon: MapPinIcon,
    },
    {
        name: 'Elkins Park',
        icon: MapPinIcon,
    },
    {
        name: 'Oreland',
        icon: MapPinIcon,
    },
]

export default function AreasWeServe() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary('maps')

            const position = {
                lat: 40.08588,
                lng: -75.15137,
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 12,
                mapId: 'areaServed',
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const wyncotePolygon = [
                { lng: -75.167491, lat: 40.085755 },
                { lng: -75.171601, lat: 40.081813 },
                { lng: -75.154076, lat: 40.071732 },
                { lng: -75.145057, lat: 40.080807 },
                { lng: -75.142086, lat: 40.080564 },
                { lng: -75.13792, lat: 40.081622 },
                { lng: -75.137151, lat: 40.082335 },
                { lng: -75.135312, lat: 40.081512 },
                { lng: -75.132241, lat: 40.081044 },
                { lng: -75.135338, lat: 40.087669 },
                { lng: -75.131731, lat: 40.089333 },
                { lng: -75.138898, lat: 40.093428 },
                { lng: -75.13952, lat: 40.096099 },
                { lng: -75.143243, lat: 40.098345 },
                { lng: -75.145865, lat: 40.097883 },
                { lng: -75.147095, lat: 40.096867 },
                { lng: -75.150053, lat: 40.097449 },
                { lng: -75.154996, lat: 40.097017 },
                { lng: -75.160533, lat: 40.092351 },
                { lng: -75.161332, lat: 40.092831 },
                { lng: -75.163189, lat: 40.089986 },
                { lng: -75.163273, lat: 40.086241 },
                { lng: -75.164592, lat: 40.086986 },
                { lng: -75.167491, lat: 40.085755 },
            ]
            const elkinsParkPolygon = [
                { lng: -75.154076, lat: 40.071732 },
                { lng: -75.146683, lat: 40.067547 },
                { lng: -75.135193, lat: 40.061031 },
                { lng: -75.129021, lat: 40.057091 },
                { lng: -75.122147, lat: 40.053177 },
                { lng: -75.119834, lat: 40.053931 },
                { lng: -75.117996, lat: 40.053234 },
                { lng: -75.11792, lat: 40.055481 },
                { lng: -75.119249, lat: 40.057425 },
                { lng: -75.121412, lat: 40.05636 },
                { lng: -75.117201, lat: 40.062561 },
                { lng: -75.117181, lat: 40.065256 },
                { lng: -75.116083, lat: 40.064788 },
                { lng: -75.11359, lat: 40.066532 },
                { lng: -75.114462, lat: 40.067868 },
                { lng: -75.111065, lat: 40.06765 },
                { lng: -75.110712, lat: 40.06996 },
                { lng: -75.113815, lat: 40.070394 },
                { lng: -75.11339, lat: 40.070922 },
                { lng: -75.111984, lat: 40.071283 },
                { lng: -75.105793, lat: 40.070545 },
                { lng: -75.101998, lat: 40.068794 },
                { lng: -75.098543, lat: 40.070166 },
                { lng: -75.097873, lat: 40.070836 },
                { lng: -75.099478, lat: 40.071906 },
                { lng: -75.097744, lat: 40.073497 },
                { lng: -75.097306, lat: 40.075826 },
                { lng: -75.096258, lat: 40.076317 },
                { lng: -75.099657, lat: 40.078423 },
                { lng: -75.101086, lat: 40.083115 },
                { lng: -75.098503, lat: 40.085712 },
                { lng: -75.102991, lat: 40.08735 },
                { lng: -75.105358, lat: 40.089601 },
                { lng: -75.111678, lat: 40.086247 },
                { lng: -75.117145, lat: 40.084941 },
                { lng: -75.119641, lat: 40.082595 },
                { lng: -75.125742, lat: 40.085865 },
                { lng: -75.131731, lat: 40.089333 },
                { lng: -75.135338, lat: 40.087669 },
                { lng: -75.132241, lat: 40.081044 },
                { lng: -75.135312, lat: 40.081512 },
                { lng: -75.137151, lat: 40.082335 },
                { lng: -75.13792, lat: 40.081622 },
                { lng: -75.142086, lat: 40.080564 },
                { lng: -75.145057, lat: 40.080807 },
                { lng: -75.154076, lat: 40.071732 },
            ]

            const orelandPolygon = [
                { lng: -75.200435, lat: 40.124008 },
                { lng: -75.204271, lat: 40.120323 },
                { lng: -75.197833, lat: 40.106492 },
                { lng: -75.19596, lat: 40.103542 },
                { lng: -75.193625, lat: 40.101778 },
                { lng: -75.189026, lat: 40.100285 },
                { lng: -75.182838, lat: 40.100067 },
                { lng: -75.180119, lat: 40.099354 },
                { lng: -75.181672, lat: 40.100446 },
                { lng: -75.180914, lat: 40.10173 },
                { lng: -75.175809, lat: 40.106536 },
                { lng: -75.178475, lat: 40.10819 },
                { lng: -75.176267, lat: 40.108916 },
                { lng: -75.174105, lat: 40.108132 },
                { lng: -75.170852, lat: 40.111111 },
                { lng: -75.170353, lat: 40.112097 },
                { lng: -75.175259, lat: 40.114832 },
                { lng: -75.173503, lat: 40.116673 },
                { lng: -75.172697, lat: 40.116186 },
                { lng: -75.168389, lat: 40.120554 },
                { lng: -75.172034, lat: 40.122799 },
                { lng: -75.172087, lat: 40.123478 },
                { lng: -75.16859, lat: 40.127008 },
                { lng: -75.170256, lat: 40.126897 },
                { lng: -75.173312, lat: 40.125832 },
                { lng: -75.177948, lat: 40.125899 },
                { lng: -75.182477, lat: 40.124845 },
                { lng: -75.184037, lat: 40.123669 },
                { lng: -75.187171, lat: 40.12329 },
                { lng: -75.192544, lat: 40.123642 },
                { lng: -75.197925, lat: 40.122807 },
                { lng: -75.200435, lat: 40.124008 },
            ]

            const poly = new google.maps.Polygon({
                paths: [wyncotePolygon, elkinsParkPolygon, orelandPolygon],
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
            });

            poly.setMap(map)

            
        }
        initMap();
    })

    return (
        <div className="bg-blue-900 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="rounded-2xl h-[45vh]" ref={mapRef} />
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                The Areas We Serve
                            </p>
                            <p className="mt-6 text-xl text-white">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-2xl text-white lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-14">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-7 text-white" />
                                            {feature.name}
                                        </dt>{' '}
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}