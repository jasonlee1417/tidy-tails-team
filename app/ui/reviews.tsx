"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

export default function Reviews() {
    const reviewSlides = [
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
        {
            reviewText: "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
            reviewAuthor: "Person Name",
            reviewDate: "11/11/2011",
        },
    ]

    return (
        <div className="bg-blue-200 pt-20 pb-14 sm:pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center pb-12">
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Hear what others say about us!
                    </p>
                </div>
                <Carousel className="w-full sm:px-4" plugins={[
                    Autoplay({
                        delay: 3500,
                    }),
                ]}>
                    <CarouselContent className="-ml-1">
                        {reviewSlides.map((slide, i) => (
                            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-blue-800 text-white">
                                        <CardContent>
                                            <span className="text-2xl font-semibold">{slide.reviewText}</span>
                                        </CardContent>
                                        <CardContent>
                                            <span className="text-xl font-semibold">{slide.reviewAuthor}</span>
                                        </CardContent>
                                        <CardFooter>
                                            <span className="text-large font-semibold">{slide.reviewDate}</span>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-x-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}