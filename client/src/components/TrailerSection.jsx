import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'

const TrailerSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [playing, setPlaying] = useState(false)

  // Get YouTube video ID from the video URL
  const getYoutubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    )

    return match ? match[1] : ''
  }

  const handleTrailerClick = (trailer) => {
    setCurrentTrailer(trailer)
    setPlaying(false)
  }

  const videoId = getYoutubeId(currentTrailer.videoUrl)

  // YouTube thumbnail
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">

      {/* Title */}
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* MAIN TRAILER */}
      <div className="relative mt-6 max-w-[960px] mx-auto aspect-video">

        <BlurCircle top="-100px" right="-100px" />

        {!playing ? (

          <div
            className="relative w-full h-full cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setPlaying(true)}
          >

            {/* YouTube thumbnail */}
            <img
              src={thumbnailUrl}
              alt="YouTube trailer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* YouTube play button */}
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[68px]
                h-[48px]
                bg-[#ff0000]
                rounded-[12px]
                flex
                items-center
                justify-center
                hover:bg-[#cc0000]
                transition
              "
            >
              <span className="text-white text-[24px] ml-1">
                ▶
              </span>
            </div>

          </div>

        ) : (

          <ReactPlayer
            src={currentTrailer.videoUrl}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />

        )}

      </div>

      {/* 4 TRAILERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">

        {dummyTrailers.map((trailer, index) => (

          <div
            key={index}
            onClick={() => handleTrailerClick(trailer)}
            className="relative group cursor-pointer"
          >

            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="
                w-full
                aspect-video
                object-cover
                rounded-lg
                group-hover:opacity-60
                transition
                duration-300
              "
            />

            {/* Small play icon */}
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-white
                text-2xl
              "
            >
              ▶
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default TrailerSection