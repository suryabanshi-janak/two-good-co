import Image from 'next/image';

export default function ShopSection() {
  return (
    <section id='shop' className='font-helvetica'>
      <div className='flex justify-between border-b border-b-black uppercase text-sm leading-6 mb-4'>
        <p>buy good</p>
        <p>do good</p>
      </div>

      <div className='grid grid-cols-3 gap-x-[1.5vw] min-h-screen relative'>
        <div className='col-span-1 relative w-full h-full overflow-hidden'>
          <Image
            src='/images/shop-home.webp'
            alt='shop-home'
            fill
            className='object-fit h-full w-full '
          />
        </div>
        <div className='col-span-1 relative w-full h-full aspect-square'>
          <Image src='/images/shop-pantry.webp' alt='shop-pantry' fill />
        </div>
        <div className='col-span-1 relative w-full h-full aspect-square'>
          <Image src='/images/shop-bath.webp' alt='shop-bath' fill />
        </div>
      </div>
    </section>
  );
}
