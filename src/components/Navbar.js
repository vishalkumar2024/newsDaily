import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsDaily</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News Category
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/General">General</Link></li>
                                        <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                    </ul>
                                </li>
                              
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}






