import React from 'react'
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`} >
              <div className="container-fluid">
              <a className="navbar-brand" href='/home'>{props.title}</a>
                   
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                      <li className='nav-item'>
                      <a className="navbar-brand" href='/about'>about</a>
                        {/* <Link to="/" className="nav-link active" aria-current="page" >TextForm</Link> */}
                      </li>
                      <li className='nav-item'>
                      <a className="navbar-brand" href='/'>home</a>
                        {/* <Link to="/about" className="nav-link active" aria-current="page">About</Link> */}
                      </li>
                    </ul>
                    

                    
  
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                              <input className="form-check-input " type="checkbox"  onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">enable dark mode</label>
                    </div>

                  
               </div>
        </nav>
    </>
  )
}
