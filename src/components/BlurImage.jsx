import { useState } from 'react'

export const useDynamicSrc = (hd, lowSrc) => {
  const [src, setSrc] = useState(lowSrc ?? '')
  //logica

  const img = new Image()
  img.src = src
  img.onload = () => {
    setSrc(hd)
  }

  return [src, src !== hd]
}

// eslint-disable-next-line react/prop-types
const BlurImage = ({ src, lowSrc }) => {
  const [srcD, blur] = useDynamicSrc(src, lowSrc)
  return (
    <div className='h-[25rem]'>
      <img
        className={` w-full  object-cover object-center ${
          blur && 'blur-md'
        } transition-all  duration-1000`}
        src={srcD}
        alt='Gohan'
      />
    </div>
  )
}
export default BlurImage
