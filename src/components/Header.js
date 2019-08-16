import React from 'react'
import { NavLink } from "react-router-dom"

class Header extends React.Component {
    render() {
        const links = this.props.header.menu
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-md navbar-light nav-header col-md-12">
                            <div className="menu-holder">
                                <NavLink to="/">
                                    <img className="logo" src={this.props.header.logoSrc} alt="Concore" />
                                </NavLink >
                            </div>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-icon">
                                    <img src={this.props.header.hamburguer} alt="Menu" />
                                </span>
                            </button>
                            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    {links.map(function (menu, index) {
                                        return (
                                            <li key={index}>
                                                <NavLink to={menu.link} activeClassName="active" className="link">{menu.title}</NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header