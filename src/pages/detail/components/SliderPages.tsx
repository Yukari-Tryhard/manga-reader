import { AspectRatio } from '@/src/components/ui/aspect-ratio'
import React from 'react';
import Slider from "react-slick";

const SliderPages = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "28rem",
        className: "center",
        };

  return (
    <Slider {...settings} className='mt-8'>
        <div>
            <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md ">
                <img
                src="https://cdn.myanimelist.net/images/anime/4/78450.jpg"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
        <div>
        <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md">
                <img
                src="https://m.media-amazon.com/images/I/81UxyyLKqaL._AC_UF1000,1000_QL80_.jpg"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
        <div>
        <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md">
                <img
                src="https://s.pacn.ws/1/p/s0/hare-iro-melody-super-lovers-2-ver-super-lovers-2-intro-theme-504349.1.jpg?v=qmdqui"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
        <div>
        <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md">
                <img
                src="https://cdn.myanimelist.net/images/anime/4/78450.jpg"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
        <div>
        <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md">
                <img
                src="https://i1.sndcdn.com/artworks-000164423749-3s9qq7-t500x500.jpg"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
        <div>
        <AspectRatio ratio={16 / 9} className="bg-muted w-[90vw] rounded-md">
                <img
                src="https://darkviolence.files.wordpress.com/2017/02/25969805.jpg"
                alt="Photo by Drew Beamer"
                
                className="rounded object-fit h-full m-auto"
                />
            </AspectRatio>
        </div>
      </Slider>
  )
}

export default SliderPages