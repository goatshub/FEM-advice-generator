"use client"

import axios from 'axios';
import Image from 'next/image';
import { useQuery } from "react-query";

type Advice = {
  slip: {
    id: number,
    advice: string
  }
}

const getAdvice = async (): Promise<Advice> => {
    const advice = await axios.get('https://api.adviceslip.com/advice') 
    return advice.data
}

const Card = () => {
  const { isLoading, error, data, refetch } = useQuery<Advice, Error>({
    queryKey: ['advice'],
    queryFn: () => getAdvice()
  })
  if (isLoading) return <p className='text-white'>Loading...</p>
  if (error) return <p className='text-red-500'>An error has occurred: {error.message}</p>

  return (
    <div className="bg-dark-grayish-blue py-14 px-8 rounded-xl text-white max-w-[33.5rem] grid place-items-center gap-8 m-5 mb-12 relative">
        <h1 className='tracking-[.3rem] uppercase text-xs text-neon-green font-bold'>Advice #{data?.slip.id}</h1>
        <q  className='text-center font-bold tracking-wide text-2xl sm:text-3xl'>
          {data?.slip.advice}
        </q>
        <div className="imadeDiv mb-5 hidden min-[500px]:block h-4 w-full max-w-sm relative">
          <Image 
              src="/images/pattern-divider-desktop.svg" 
              alt='divider desktop'
              fill
              className='object-contain'
          />
        </div>
        <div className="mb-5 min-[500px]:hidden h-4 w-full relative">
          <Image 
              src="/images/pattern-divider-mobile.svg" 
              alt='divider mobile'
              fill  
              className='object-contain'
          />
        </div>

        <button 
          onClick={() => refetch()}
          className='p-5 bg-neon-green rounded-full hover:drop-shadow-[0_0_1rem_#52ffa8] transition-all absolute -bottom-8'
        >
            <Image 
                src="/images/icon-dice.svg" 
                alt='dice icon'
                height={24}
                width={24}
            />
        </button>
    </div>
  )
}
export default Card