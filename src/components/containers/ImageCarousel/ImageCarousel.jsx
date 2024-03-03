import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import './ImageCarousel.css'

import HomepageCarouselContent from '../../../DataList/HomepageCarouselContent'

function ImageCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        HomepageCarouselContent.carousel.map((item, index) => {
                            return (
                                <>
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex items-center justify-center p-6">
                                                    <span className="flex flex-row-reverse justify-between px-12">
                                                        <img
                                                            src={item.imagePath} alt={`Carousel Photo ${index+1}`}
                                                            className="w-1/3"
                                                        />
                                                        <div className="flex flex-col items-start gap-2">
                                                            <p className="text-2xl text-green-500 text-bold">{item.title}</p>
                                                            <p className="text-7xl">{item.slug}</p>
                                                            <button
                                                                type="button"
                                                                className="px-6 py-3 mt-10 bg-yellow-300 border-yellow-500 shadow font-semibold hover:translate-y-0.5 transition-all duration-35"
                                                            >
                                                                Shop Now &gt;
                                                            </button>
                                                        </div>
                                                    </span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                </>
                            )
                        })
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
      <CarouselNext /> */}
            </Carousel>
        </div>
    )
}

export default ImageCarousel