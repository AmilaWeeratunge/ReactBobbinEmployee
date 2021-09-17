import React from 'react';

function HeaderBar ()
{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sadow">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Bobbin Employee List</span>
                <ul className="navbar-nav">
                    <li className ="nav-item">
                        <a className ="nav-link" href="/">welcome</a>
                        </li>
                    <li className ="nav-item">
                        <a className ="nav-link"  href="About">About</a>
                        </li>
                    <li className ="nav-item">
                        <a className ="nav-link"  href="Namelist">Name List</a>
                        </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default HeaderBar;