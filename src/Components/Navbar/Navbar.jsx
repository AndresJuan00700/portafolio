import React,{useState} from 'react'
import Logo from "../../assets/Logo.png"


const nabarlinks =[
{
  id:1,
  title:"Sobre mi",
  Link: '/'
},

{
  id:2,
  title:"Proyectos",
  Link: '/'
},

{
  id:3,
  title:"Experiencia",
  Link: '/'
},

{
  id:4,
  title:"Mi contacto",
  Link: '/'
}

]

const NarvbarRedes =[

{
  id:1,
  title:"Linkedin",
  Link: 'https://www.linkedin.com/in/andresbenitez-/',
Icon: 'bi bi-linkedin'

},
{
  id:2,
  title:"Github",
  Link: 'https://github.com/AndresJuan00700',

Icon: 'bi bi-github'
}

]

const Navbar=() => {
const [isopen, setisopen]= useState(false);

const togglemenu =()=>{
  setisopen(!isopen)
}




  return (
    <nav>
   <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
     
{/* Logo nabvar */}


<div>
<img src={Logo} alt="Logo del sitio" className="w-24 h-auto" />

</div>

{/* aqui estara el boton de hambuerguesa*/}

<button className='md:hidden text-white'   onClick={togglemenu}>

<svg
className='w-6 h-6'
fill='none'
stroke='currentColor'
viewBox='0 0 24 24' /*la caja donde se va a ver el elemento*/
>

  {isopen ? 
  (<path
strokeLinejoin='round'
strokeLinecap='round'
strokeWidth={2}
d='M6 18L18 6m6 6l12 12'
/>) : (<path
strokeLinejoin='round'
strokeLinecap='round'
strokeWidth={2}
d='M4 6H16M4 12H16M4 18H16'
/>)}




</svg>

</button>

{/* Navegacion*/}
<div className='hidden md:block'>
<ul className='flex space-x-4  sm:space-x-8'  >

{nabarlinks.map((Link)=>(
<li key={Link.id}  > 
<a 
className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 transform inline-block duration-300'
href={Link.Link}>
  {Link.title}</a>

</li>


))}
</ul>
</div>

<div>
<ul className='flex space-x-4'> 
{NarvbarRedes.map((Link)=>( /*me lea los array*/
<li key={Link.id}  > 
<a 
target='_blank' /* para que abara una pestaña nueva*/
 rel='noopener noreferrer'/* para que no sepa de que pagina venimos*/
className='inline-block transition-transform duration-300 transform hover:scale-125'
href={Link.Link}> 
<i
className={`${Link.Icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}> {Link.title}
</i>


</a>

</li>


))}

</ul>
</div>


  


      
    </div>


{/*menu mobile*/}
  <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300   ${isopen ? "opacity-100 visible" : "opacity-0 invisible"}` }  > 

<ul className='flex flex-col px-4  py-2'  >

{nabarlinks.map((Link)=>(
<li key={Link.id} className='py-2 text-center' > 
<a 
className='text-white hover:text-sky-200'
href={Link.Link} onClick={()=>setisopen(false)}>
  {Link.title}</a>

</li>


))}
</ul>

  </div> 

    </nav>
  )
}

export default Navbar

