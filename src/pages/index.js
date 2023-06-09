import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode?'dark':'' }>
      <Head>
        <title>Dimitri Marco portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900 '>
        <section className="min-h-screen">
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)} className='text-2xl cursor-pointer '/>
              </li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 ml-8 text-white px-4 py-2 rounded-md'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Dimitri Marco</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer</h3>
            <p className='text-md py-5 md:text-xl leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam accusantium cumque perferendis nulla asperiores consequuntur eaque repellat sunt ullam illo, veniam fugit illum ut neque dolorum earum officia velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto praesentium dolor, atque minus dolores deserunt. Minus quae facilis enim dolore atque ratione nam distinctio! Consectetur, et illum. Ad, molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum nemo amet nihil quod unde totam, ipsam fugiat ullam cumque quia facere necessitatibus harum magnam, atque eveniet officiis molestias sed?</p>
          </div>
          <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className='md:w-96 md:h-96 relative bg-gradient-to-b overflow-hidden from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto'>
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className=' md:text-xl text-md leading-8 text-gray-800 py-2'>Lorem ipsum dolor <span className='text-teal-500'>sit amet</span> consectetur adipisicing elit. Esse corrupti numquam tenetur ex error nisi quibusdam, explicabo quisquam quaerat. Hic natus minima expedita repellat consectetur iste numquam fugiat amet qui.
            <span className='text-teal-500'>Agencies</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam omnis eaque accusantium quod dolorum facere earum, pariatur ipsa itaque sequi culpa amet laborum ea quos necessitatibus, aspernatur distinctio eius!</p>
            <p className='md:text-xl text-md leading-8 text-gray-800 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio perspiciatis quaerat, laborum nisi suscipit voluptatibus quod at non alias molestias quia numquam blanditiis soluta enim ratione voluptatem minima unde? Ex?</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src = {design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='md:text-xl py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum atque omnis quos reiciendis odit nesciunt libero eos excepturi? Maxime suscipit, facere mollitia dolore totam cupiditate doloremque ut cumque perferendis libero!</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src = {code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='md:text-xl py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum atque omnis quos reiciendis odit nesciunt libero eos excepturi? Maxime suscipit, facere mollitia dolore totam cupiditate doloremque ut cumque perferendis libero!</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='md:text-xl text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src = {consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 md:text-xl '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum atque omnis quos reiciendis odit nesciunt libero eos excepturi? Maxime suscipit, facere mollitia dolore totam cupiditate doloremque ut cumque perferendis libero!</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>

          
        </section>


        <section>
          <h3 className='text-3xl py-1'>Portofolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime error voluptatem quo vero labore quibusdam consequuntur voluptas. Quisquam, tenetur repellendus assumenda doloremque nostrum quibusdam quas. Placeat saepe tenetur harum!</p>
          <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam dolor eos dolores similique nobis necessitatibus fuga, id, aliquid qui ex hic asperiores nihil deserunt mollitia quo ipsam sapiente dolorem.</p>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} layout="responsive"/>
            </div>
          </div>
        
        </section>
      </main>
    </div>
  )
}
