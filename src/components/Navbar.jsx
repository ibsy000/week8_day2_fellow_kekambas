import React from 'react'
import { ReactComponent as Logo } from './images/friends.svg'

export default function Navbar() {
    const bgColor = {
        backgroundColor: '#8fc0a9'
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient mb-5" style={bgColor}>
            <div className="container-fluid">
                <Logo width="42" height="36" className="d-inline-block align-text-top me-2"/>
                <a className="navbar-brand" href="/">My Fellow Kekambas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Home</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
