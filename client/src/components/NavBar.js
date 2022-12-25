import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return(
        <div style={{height: '50px', width: '100%', background: '#50ff27'}}>
            <nav style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <div className="container-fluid">
                    <NavLink to='/main' style={{textDecoration: 'none', color: 'black', marginRight: '10px'}}><b>Main</b></NavLink>
                    <NavLink to='/products' style={{textDecoration: 'none', color: 'black'}}><b>Products</b></NavLink>
                </div>
            </nav>
        </div>
    )
}
