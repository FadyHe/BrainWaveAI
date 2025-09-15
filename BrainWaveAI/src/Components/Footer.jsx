import Section from './Section'
import { socials } from '../constants'
function Footer() {
  return (
    <Section
    crosses
    className='!px-0 !py-10'
    >
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='body-2 caption text-n-4 lg:block'>©{new Date().getFullYear()}. All rights reserved</p>
        <ul className='flex flex-wrap gap-5'>
          {socials.map((item) => (
            <a key={item.id} href={item.url}
            target='_blank'
            className='flex items-center justify-center h-10 w-10 rounded-full bg-n-7 transition-colors hover:bg-n-6'
            >
              <img src={item.iconUrl} width={16} height={16} className='' alt={item.title}/>
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
