import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";
import { AppleIcon, Check, Star } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-green-50 grainy-light'>
      <div className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52'>
          <div className='px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start'>
              <h1
                className={cn(
                  'relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl'
                )}>
                <span className='whitespace-nowrap'>
                  Pas
                  <span
                  className={cn(
                    'font-scary font-bold text-red-500'
                  )}>
                  ta
                </span>
                </span>
                🍝
              </h1>
              <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap'>
                Clipboard managers for mac are
                <span
                  className={cn(
                    'font-scary font-bold text-red-500'
                  )}>
                  {" "} not great
                </span>{' '}
                and{' '}
                <span
                  className={cn(
                    'font-scary font-bold text-red-500'
                  )}>
                  not free
                </span>
                . Not anymore. Introducing a fast, free and open-source
                alternative.
              </p>

              <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap'>
                  Pasta is still in <span
                  className={cn(
                    'font-scary font-bold text-red-500'
                  )}>
                  {" "} Beta
                </span>{' '}.
                  We are also looking for <span
                  className={cn(
                    'font-scary font-bold text-red-500'
                  )}>
                  {" "} Contributors
                </span>{' '} to help us build the best clipboard manager for Mac.
              </p>

              <ul className='mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' />
                    Very fast & lightweight (less than 8MB)
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' />
                    Works offline (no stalking you)
                  </li> 
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> 100%
                    free & open-source
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800'
                    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                    alt='Image Description'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800'
                    src='https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                    alt='Image Description'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800'
                    src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
                    alt='Image Description'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800'
                    src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
                    alt='Image Description'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800'
                    src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
                    alt='Image Description'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                    <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  </div>
                  
                <p className=''>
                  <span className='font-semibold'>
                    All these imaginary people
                  </span>{' '}
                  give Pasta a 5-star rating.
                </p> 
                </div>
              </div>
            </div>
          </div>

          <div className='relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20'>
            <img
              aria-hidden='true'
              src='/try-it.png'
              className='absolute w-40 left-2/3 -top-2 select-none hidden sm:block'
            />
            <img
              src='/pasta.png'
              className='w-full mx-auto rounded-lg shadow-lg'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>

      <section className='bg-blue-100 grainy-dark px-4'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-20 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <div className='w-full flex flex-col'>
            <div className='flex justify-center text-center'>
              <h2 className='font-heading text-4xl lg:text-5xl font-bold leading-tight text-balance sm:leading-none tracking-tight'>
                "Mac Clipboards Managers{' '}
                <span className='bg-red-500 text-white font-scary px-3'>
                  f@#k!ng
                </span>{' '}
                suck"
              </h2>
            </div>
            <p className='mx-auto mt-8 text-center text-sm max-w-xl'>
              - guy from my twitter (i forgot who 💀)
            </p>
            <p></p>

            <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
              <span className='font-semibold'>
                Mac clipboard managers are not great
              </span>{' '}
              and{' '} <span className='font-semibold'>not free</span>. Not anymore. Introducing a fast, free and open-source alternative.
              It's like Time Machine for your clipboard.
            </p>

            <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' />

            <p className='mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold'>
              Download for Mac
            </p>

            <div className='grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center'>
              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t 0 from-blue-100 pointer-events-none'></div>
                  <Link href='https://github.com/katungi/pasta/releases/download/app-v0.1.2/Pasta._0.1.2_x64.dmg'>
                    <Button className='bg-blue-100 text-red-500 hover:bg-blue-200 hover:text-red-600'>
                      <AppleIcon className='h-6 w-6 mr-2' />
                      Download for Intel
                    </Button>
                  </Link>
                </div>
                <p className='font-semibold text-lg'>
                  Intel Chip
                </p>
                <p className='mt-2 text-balance'>
                  Download the latest version of Pasta for Mac with Intel chips.
                </p>
              </div>

              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none'></div>
                  <Link href='https://github.com/katungi/pasta/releases/download/app-v0.1.2/Pasta._0.1.2_aarch64.dmg'>
                    <Button className='bg-blue-100 text-black hover:bg-blue-200 hover:text-red-600'>
                      <AppleIcon className='h-6 w-6 mr-2' />
                      Download for Apple Silicon
                    </Button>
                  </Link>
                </div>
                <p className='font-semibold text-lg'>
                  Apple Silicon
                </p>
                <p className='mt-2 text-balance'>
                  Download the latest version of Pasta for Mac with Apple Silicon chips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
