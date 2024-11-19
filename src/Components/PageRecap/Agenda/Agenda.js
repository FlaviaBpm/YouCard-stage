import React from 'react'
import './Agenda.css'
import carte from '../../../assets/imagesRécap/carte.png';
const Agenda = () => {
  return (
    <div>
        <div className='container-box'>
            <h1 className='texte-agenda'>Agenda</h1>
            <div className='container-recap'>
                <img className='img-agenda' src={carte} alt="Youcard" />
                <p>Ne jeter pas votre YouCard 2022-2023</p>
                <p>du 08 avril 2024 au 04 mai 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Agenda