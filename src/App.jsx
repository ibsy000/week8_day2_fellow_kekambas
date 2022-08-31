import React from 'react'
import Classmates from './components/Classmates'
import Navbar from './components/Navbar'

export default function App() {

    return (
        <>
            <Navbar />
            <div className="container">
                <Classmates />
            </div>
        </>
    )
}
