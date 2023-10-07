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

export const carInputs = [
  {
    type: 'text',
    name: 'plate',
    label: 'Placa',
    placeholder: 'ABC123'
  },
  {
    type: 'number',
    name: 'model',
    label: 'Modelo',
    placeholder: '2020'
  },
  {
    type: 'text',
    name: 'line',
    label: 'Linea',
    placeholder: 'Captiva Sport'
  },
  {
    type: 'text',
    name: 'color',
    label: 'Color',
    placeholder: 'Rojo'
  },
  {
    type: 'number',
    name: 'kilometers',
    label: 'Kilómetros',
    placeholder: '12000'
  },
  {
    type: 'number',
    name: 'owners',
    label: 'Dueños',
    placeholder: '1'
  },
  {
    type: 'string',
    name: 'description',
    label: 'Descripción',
    placeholder: 'Carro en buen estado y ...'
  },
  {
    type: 'number',
    name: 'price',
    label: 'Precio',
    placeholder: '20.000.000'
  }
]

export const tableHeaders = ['ID', 'Placa', 'Marca', 'Modelo', 'Linea', 'Kilómetros', 'CC', 'Color', 'Precio', 'Imagen', 'Acciones']

export const brandsCarrousel = [
  {
    name: 'Kia',
    urlimg: `${kia.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.motor.com.co/__export/1691096656490/sites/motor/img/2022/11/15/2022-kia-seltos-facelift-1s_1.jpg_242310155.jpg'
  },
  {
    name: 'toyota',
    urlimg: `${toyota.src}`,
    width: 'w-[90px]',
    height: 'h-[60px]',
    imgUrl: 'https://www.motor.com.co/__export/1655140404919/sites/motor/img/2022/06/13/toyota-compact-cruiser-ev-1.jpg_554688468.jpg'
  },
  {
    name: 'suzuki',
    urlimg: `${suzuki.src}`,
    width: 'w-20',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/01/20230112-SUZUKI-FRONX-SUV-2024-01.jpg'
  },
  {
    name: 'chevrolet',
    urlimg: `${chevrolet.src}`,
    width: 'w-[100px] h-[50px]',
    height: 'h-[60px]',
    imgUrl: 'https://www.motor.com.co/__export/1684343462969/sites/motor/img/2023/01/22/chevrolet-montana-1464762_1.jpg_2006041591.jpg'
  },
  {
    name: 'bmw',
    urlimg: `${bmw.src}`,
    width: 'w-20',
    height: 'h-20',
    imgUrl: 'https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg'
  },
  {
    name: 'nissan',
    urlimg: `${nissan.src}`,
    width: 'w-[95px]',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/05/20220512-NISSAN-QASHQAI-2022-TURBO-NUEVA-GENERACION-COLOMBIA-PRECIO-CARACTERISTICAS-VERSIONES-VIDEO-01.jpg'
  },
  {
    name: 'mitsubishi',
    urlimg: `${mitsubishi.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-outlander-launch-hero-image-source-1-1613556399.jpg?crop=0.7501090274749237xw:1xh;center,top&resize=1200:*'
  },
  {
    name: 'renault',
    urlimg: `${renault.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://i.blogs.es/e9ae78/megane-e-tech3/1366_2000.jpg'
  },
  {
    name: 'mercedez',
    urlimg: `${mercedez.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.motor.com.co/__export/1670344366498/sites/motor/img/2022/12/06/mercedes-amg-s-63-e-performance-00019_1.jpg_554688468.jpg'
  },
  {
    name: 'jeep',
    urlimg: `${jeep.src}`,
    width: 'w-[110px]',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/12/20221212-JEEP-GRAND-CHEROKEE-L-2023-COLOMBIA-PRECIO-FICHA-TECNICA-SUV-7-PASAJEROS-01.jpg'
  },
  {
    name: 'hyundai',
    urlimg: `${hyundai.src}`,
    width: 'w-[110px]',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/04/18-03-2023-PORTADA-Hyundai-Elantra-N-2024.jpg'
  },
  {
    name: 'ford',
    urlimg: `${ford.src}`,
    width: 'w-32',
    height: 'h-28',
    imgUrl: 'https://i1.wp.com/tiempomotor.com/wp-content/uploads/2022/01/Hennessey_VelociRaptor_600_1-1.jpg?resize=1170%2C610&ssl=1'
  },
  {
    name: 'mazda',
    urlimg: `${mazda.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.hibridosyelectricos.com/uploads/s1/38/77/88/2022122010350393354.jpeg'
  },
  {
    name: 'subaru',
    urlimg: `${subaru.src}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://fuelcarmagazine.com/wp-content/uploads/2021/11/Subaru-WRX-S4.jpg'
  }
]
