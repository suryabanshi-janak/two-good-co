'use client';

import * as React from 'react';
import gsap from 'gsap';

import { Product } from '@/app/page';
import Image from 'next/image';

interface ProductsProps extends React.HTMLAttributes<HTMLDivElement> {}

const products = [
  {
    name: 'the love + care pack',
    price: 50,
    color: '',
    img: '/images/products/love-care-pack-expanded.png',
  },
  {
    name: 'two good tote bag',
    price: 40,
    color: '',
    img: '/images/products/tote-bag.png',
  },
  {
    name: 'nourish & soothie hand lotion',
    price: 50,
    color: '',
    img: '/images/products/hand-lotion.png',
  },
  {
    name: 'cookbook two',
    price: 45,
    color: '',
    img: '/images/products/cookbook.png',
  },
] satisfies Product[];

export default function Products({ className, ...props }: ProductsProps) {
  const cursorRef = React.useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
    });
  };

  const onMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
    });
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(cursorRef.current, {
      x: event.clientX - 140,
      y: event.clientY - 120,
    });
  };

  return (
    <div
      className='relative'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div
        ref={cursorRef}
        className='w-[14vw] h-[14vw] rounded-full bg-green-400 fixed top-0 scale-0'
      />

      <div className='grid grid-cols-2 gap-x-[2vw] gap-y-[1vw]' {...props}>
        {products.map((product) => (
          <div key={product.name}>
            <div className='h-[70vh] relative w-3/4 mx-auto'>
              <Image
                src={product.img}
                alt={product.name}
                fill
                className='h-full object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
