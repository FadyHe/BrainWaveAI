import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../assets'

function PricingList() {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((item ,index) =>(
        <div key={item.id}
          className={`w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-18 odd:my-4 odd:py-8 ${index === 0 ? '[&>h4]:text-color-2' :
              index === 1 ? '[&>h4]:text-color-1' :
                '[&>h4]:text-color-3'
            }`}>
          <h4 className='h4 mb-4'>{item.title}</h4>
          <p className='body-2 text-n-1/50 min-h-[4rem] mb-3'>{item.description}</p>
          <div className='flex items-center h-[5.5rem] mb-6'>
            {item.price && (<>
              <div className='h3'>$</div>
              <div className='text-[5.5rem] leading-none font-bold'>{item.price}</div>
            </>
            )}
          </div>
          <Button 
          className='mt-6 w-full'
          href={item.price ? '/pricing' : 'mailto:me@example.com'}
          white={!!item.price}
          >
            {item.price ? 'Get Started' : 'Contatct Us'}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
              key={index}
              className=' flex items-start py-5 border-t border-n-6'
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className='body-2 ml-4'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PricingList
