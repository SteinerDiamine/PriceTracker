import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';

const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24 border-2 border-red-500'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='small-text'>
            Choose product wisely:
            <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
            />
          </p>
          <h1 className='head-text'>
            Get the best prices
            <span className='text-primary'> PriceTracker</span>
          </h1>
          <p className='mt-6'>
            PriceTracker is an tool developed in order to analyze the latest prices and get you the best possible price
          </p>
          <Searchbar/>
        </div>
        <HeroCarousel/>
      </div>

    </section>
    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='flex flex-wrap gap-x-8 gap-y-16'>
        
        {['Apple iphone 15','Book','Sneaker'].map
        ((product) => (
          <div>{product}</div>
        )

        )}
       
      </div>
    </section>
    
    </>
  )
}

export default Home