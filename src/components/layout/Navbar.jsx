import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
/*

//mb-12 is margin-bottom shadow-lg is shadow bg-neutral is background color text-neutral-content is text color
//container is margin auto 
//flex-none is flexbox px-2 is padding x-axis mx-2 is margin x-axis
//inline is display pr-2 is padding right text-3xl is text size
//Link to is link to the home page text-lg is text size font-bold is font weight
// btn is button btn-ghost is button ghost btn-sm is button small rounded-btn is button rounded
*/


  return (
    <div className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'> 
     <div className='container mx-auto'> 
        <div className='flex-none px-2 mx-2'> 
            <FaGithub className='inline pr-2 text-3xl'/> 
            <Link to='/' className='text-lg font-bold'>{title}</Link> 
        </div>
        <div className='flex-1 px-2 mx-2'> 
        <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn '>Home</Link> 
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
        </div>
        </div>
     </div>  
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}
export default Navbar
