import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import React from 'react';
const Footer = () =>{
    return(
            
        <>
            <div class="container foomter">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                     Sai Electronics
                </a>
                <p class="text-muted">&copy; 2023</p>
                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">
                <h5>Companies</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Samsung</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Lloyd</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">HP</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Lenovo</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Boat</a></li>
                </ul>
                </div>

                <div class="col mb-3">
                <h5>Products</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Mobiles</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">LED TV</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Headphones</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">refrigerator</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">AC</a></li>
                </ul>
                </div>

                <div class="col mb-3">
                <h5>Services</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Home delievery</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Repair service</a></li>
                    <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Consulting</a></li>
                </ul>
                </div>
            </footer>
            </div>
    </>
    )
}

export default Footer;