'use client'
import kia from '../assets/marcas/kia.png'
import toyota from '../assets/marcas/toyota.png'
import suzuki from '../assets/marcas/suzuki.png'
import chevrolet from '../assets/marcas/chevrolet.png'
import nissan from '../assets/marcas/nissan.png'
import bmw from '../assets/marcas/bmw.png'
import subaru from '../assets/marcas/subaru.png'
import renault from '../assets/marcas/renault.png'
import mitsubishi from '../assets/marcas/mitsubishi.png'
import mercedez from '../assets/marcas/mercedez.png'
import mazda from '../assets/marcas/mazda.png'
import jeep from '../assets/marcas/jeep.png'
import hyundai from '../assets/marcas/hyundai.png'
import ford from '../assets/marcas/ford.png'
import { Kia } from './fondos'
import { motion } from 'framer-motion'
// import { brandsCarrousel } from '@/helpers/inputs'

export default function Carrusel () {
  return (
    <>
      <motion.div id='slider-conteiner' className='w-[80%] overflow-x-hidden border-x-2 borderx-solid border-black'> {/* slider-conteiner */}
        <motion.div className='flex cursor-grab' drag='x' dragConstraints={{ right: 0, left: -2000 }}> {/* slider */}

          {
            // brandsCarrousel.map((item, index) => (
            //   <motion.div
            //     key={index}
            //     className='my-0 mx-2 relative  min-w-[200px] h-[150px] p-3 hover:border-2 group hover:border-solid hover:border-blue-700 flex items-center justify-center hola'
            //   >
            //     <img className={`${item.width} ${item.height} pointer-events-none`} src={item.url} />{/* item */}
            //     <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-full opacity-50 absolute invisible group-hover:visible' src={item.videoUrl} />
            //   </motion.div>
            // ))
          }

          <motion.div
            className='my-0 mx-2  min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center hola'
          >
            <img className='w-24 h-20 pointer-events-none' src={kia.src} />{/* item */}
            <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-full opacity-50 absolute invisible group-hover:visible' src='https://cdn.pixabay.com/vimeo/304735769/calle-19627.mp4?width=1280&hash=84c8347627305ec3a01dbe5618ecde30d4c8ec6e' />
          </motion.div>

          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-[100px] h-[70px] pointer-events-none' src={toyota.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-20 h-20  pointer-events-none' src={suzuki.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-[90%] h-[60px] pointer-events-none' src={chevrolet.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-20 h-20 pointer-events-none' src={bmw.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-[95px] h-20 pointer-events-none' src={nissan.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-24 h-20 pointer-events-none' src={mitsubishi.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-24 h-20 pointer-events-none' src={renault.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-24 h-20 pointer-events-none' src={mercedez.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-24 h-20 pointer-events-none' src={mazda.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-[110px] h-20 pointer-events-none' src={jeep.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-[110px] h-20 pointer-events-none' src={hyundai.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-32 h-28 pointer-events-none' src={ford.src} />
          </motion.div>
          <motion.div
            className='my-0 mx-2 min-w-[200px] h-[150px] p-3 hover:border-2 hover:border-solid hover:border-blue-700 flex items-center justify-center'
          >
            <img className='w-24 h-20 pointer-events-none' src={subaru.src} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}