'use client';

import * as React from 'react';
import HeroSection from '@/components/home/Hero';
import ShopSection from '@/components/home/Shop';
import Product from '@/components/Products';
import Products from '@/components/Products';

export interface Product {
  name: string;
  price: number;
  color: string;
  img: string;
}

export default function Home() {
  React.useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className='container' data-scroll-container>
      <HeroSection />
      <ShopSection />

      <section className='grid grid-cols-3 gap-x-[1.5vw] justify-between my-[12vh]'>
        <h2 className='col-span-2 text-[4vw] leading-none'>
          WE BELIEVE IN PEOPLE, <br /> UNTIL THEY BELIEVE IN <br /> THEMSELVES
          AGAIN.
        </h2>

        <div className='font-helvetica col-span-1 space-y-[3vh] w-[75%] text-[1.1vw]'>
          <p>
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p>
            With every purchase you make with us, you are helping to change the
            course of someones life; youre walking alongside vulnerable women as
            they find their way home again.
          </p>

          <button className='uppercase text-base'>Shop to Support</button>
        </div>
      </section>

      <section id='products' className='w-full bg-zinc-200'>
        <Products />
      </section>
    </main>
  );
}
