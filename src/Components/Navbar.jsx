import {Link} from "react-router-dom"
import "./Navbar.css"

let Navbar = () => {
    return <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shopping Cart</Link>
                <Link className="navbar-brand" to="/cart">Cart
                <span class="material-icons-outlined">shopping_cart</span>
                </Link>
            </div>
        </nav>
    </>
}

export default Navbar;