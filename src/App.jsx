import BlurImage from './components/BlurImage'

import hdImage from '../src/assets/hd.webp'
import lowImage from '../src/assets/low.webp'

function App() {
  return (
    <div className='bg-[#202020] h-screen w-full text-white'>
      <BlurImage src={hdImage} lowSrc={lowImage} />
    </div>
  )
}

export default App
