import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Classmates() {

    let cardStyle = {
        width: '18rem',
        backgroundColor: '#006d77',
        fontFamily: 'Special Elite, cursive'
    }
    
    let headerStyle = {
        fontFamily: 'Homemade Apple, cursive'
    }


    // const buttonStyle = {
    //     backgroundColor: '#002642'
    // }

    const [classmates, setClassmates] = useState([])

    useEffect(() => {
        console.log('useEffect callback executed')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                let classmateData = data
                setClassmates(classmateData)
            })  
    }, []) // might have issues from this being empty

    // function handleButtonClick(event){
    //     event.preventDefault()
    //     let newClassmates = event.target.button
    //     setClassmates(newClassmates)

    // }

    return (
        <>

        <div className="row text-center" style={headerStyle}>
            <h1 className='display-1'>Kekambas - 96</h1>
        </div>

        <div className="row justify-content-center text-light">

            {/* <button onClick={handleButtonClick} type="button" className="btn btn-outline text-light mt-5" 
                name="button" style={buttonStyle}>Next Classmate</button> */}

            {classmates.map((mates, idx) => {
                return(
                    <div className="card m-3" key={idx} style={cardStyle}>
                        {/* <img src="https://picsum.photos/200" className="card-img-top p-3" /> */}
                        <div className="card-body">
                            <h3 className="card-text text-center">{mates.first_name}<br></br>{mates.last_name}</h3>
                        </div>
                    </div>
                )
            })}

        </div>

        </>
    )
}
