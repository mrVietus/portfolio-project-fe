import { Carousel } from "flowbite-react"

type Props = {
    imageUrls: string[];
}

function CarouselComponent({imageUrls}: Props) {
    if(imageUrls === undefined || imageUrls.length == 0) {
        return <></>
    }

    return (
        <Carousel pauseOnHover>
            {
                imageUrls.map(url => (
                    <img src={url} alt='carousel-image' key={url} />
                ))
            }
        </Carousel>
    )
  }

export default CarouselComponent;