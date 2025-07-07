import React from 'react'
import { properties } from "../assets/data"
import Card from './Card'
import { useInView } from 'react-intersection-observer'

const ShortProperties = () => {

    const propertiesData = properties.slice(0, 3)

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    })

  return (
    <section className='py-16' id='short-properties'>
        <div className='container mx-auto px-4'>
            <div className={`text-center mb-8 ${inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`} ref={ref}>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-12 h-[1px] bg-pink-400'></div>
                    <span className='text-sm uppercase tracking-widest text-pink-400'>
                        What we Offer
                    </span>
                    <div className='w-12 h-[1px] bg-pink-400'></div>
                </div>
                <h2 className='text-4xl font-semibold text-gray-600 mt-2'>
                    Exclusive Offer For You
                </h2>
            </div>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-20 py-5'>
        {propertiesData.map((property, idx) => {
            return (
                <div key={property.id} className={`flex flex-col items-center text-center bg-white p-6 transition-all duration-700 ${inView ? "animate-fadeInUp" : "opacity-0 translate-y-10"}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <Card property={property} />
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default ShortProperties
