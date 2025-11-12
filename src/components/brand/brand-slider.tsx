'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import brand1 from '../../../public/assets/img/home-04/brand/1.png';
import brand2 from '../../../public/assets/img/home-04/brand/2.png';
import brand3 from '../../../public/assets/img/home-04/brand/3.png';
import brand4 from '../../../public/assets/img/home-04/brand/4.png';
import brand5 from '../../../public/assets/img/home-04/brand/5.png';
import brand6 from '../../../public/assets/img/home-04/brand/6.png';
import brand7 from '../../../public/assets/img/home-04/brand/7.png';
import brand8 from '../../../public/assets/img/home-04/brand/8.png';

const brands = [
  { id: 1, name: 'Brand 1', img: brand1 },
  { id: 2, name: 'Brand 2', img: brand2 },
  { id: 3, name: 'Brand 3', img: brand3 },
  { id: 4, name: 'Brand 4', img: brand4 },
  { id: 5, name: 'Brand 5', img: brand5 },
  { id: 6, name: 'Brand 6', img: brand6 },
  { id: 7, name: 'Brand 7', img: brand7 },
  { id: 8, name: 'Brand 8', img: brand8 },
];

export default function BrandSlider() {
  return (
    <Marquee 
      gradient={false} 
      speed={40} 
      pauseOnHover={false}
      loop={0}
      delay={0}
    >
      {brands.map((brand) => (
        <div key={brand.id} className="tp-brand-item" style={{ margin: '0 60px' }}>
          <Image 
            src={brand.img} 
            alt={brand.name}
            width={225}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
      {brands.map((brand) => (
        <div key={`duplicate-${brand.id}`} className="tp-brand-item" style={{ margin: '0 60px' }}>
          <Image 
            src={brand.img} 
            alt={brand.name}
            width={225}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
    </Marquee>
  );
}
