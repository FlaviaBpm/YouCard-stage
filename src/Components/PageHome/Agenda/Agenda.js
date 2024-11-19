// import React from 'react'
// import './Agenda.css'
// // import imageag from '../../../assets/ag-prov.png'
// import chevronDroit from '../../assets/imagesAgenda/chevronDroit.png';
// import chevronGauche from '../../assets/imagesAgenda/chevronGauche.png';

// function Agenda () {
//   return (
//     <div className='section-ag'>
//       <h1 className='home-titles'> Agenda </h1>
//         <div className='container-ag'>
//             <div className='agenda'>
//                 <img src={imageag} alt="" />
//             </div>
//             <div className='agenda-act'>

//                 <h2>TRÉSORS VIVANTS Didier Mélon et ses invités</h2>
//                 <p>Le 26 April 2024 à Bruxelles-Schaerbeek</p>
//                 <hr />
               
//                 <h2>La Vie trépidante de Brigitte Tornade Camille Kohler</h2>
//                 <p>Du 01 Mai 2024 au 26 Mai 2024 à Brussels</p>
//                 <hr />
                
//                 <h2>KUNSTENFESTIVALDESARTS</h2>
//                 <p>Du 10 Mai 2024 au 1 Juin 2024 à Brussels-Schaerbeek</p>
//                 <hr />
                
//                 <h2>La Petite Sirène at the Sucrerie de Wavre</h2>
//                 <p>Du 11 Mai 2024 au 12 Mai 2024 à Brussels-Schaerbeek</p>
                
//             </div>

//         </div>
//         <p>Tout l'agenda...</p>
//     </div>
//   )
// }

// export default Agenda



import React, { useEffect } from 'react';
import './Agenda.css';
import chevronDroit from '../../../assets/imagesAgenda/chevronDroit.png';
import chevronGauche from '../../../assets/imagesAgenda/chevronGauche.png';

function Agenda() {

  useEffect(() => {
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons .chevron");

    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
      "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";

      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }
      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
    };

    renderCalendar();

    prevNextIcon.forEach(icon => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date(currYear, currMonth, new Date().getDate());
        }
        renderCalendar();
      });
    });
  }, []);

  return (
    <div className='section-ag'>
      <h1 className='home-titles'> Agenda </h1>
      <div className='container-ag'>
        <div className='wrapper'>
          <div className="agenda">
            <p className="current-date"></p>
            <div className="icons">
              <img src={chevronGauche} alt="chevronGauche" className="chevron" id="prev" />
              <img src={chevronDroit} alt="chevronDroit" className="chevron" id="next" />
            </div>
          </div>
          <div className="calendar">
            <ul className="weeks">
              <li>Lun</li>
              <li>Mar</li>
              <li>Mer</li>
              <li>Jeu</li>
              <li>Ven</li>
              <li>Sam</li>
              <li>Dim</li>
            </ul>
            <ul className="days"></ul>
          </div>
        </div>
      
      <div className='agenda-act'>
        <h2>TRÉSORS VIVANTS Didier Mélon et ses invités</h2>
        <p>Le 26 Avril 2024 à Bruxelles-Schaerbeek</p>
        <hr />
        <h2>La Vie trépidante de Brigitte Tornade Camille Kohler</h2>
        <p>Du 01 Mai 2024 au 26 Mai 2024 à Bruxelles</p>
        <hr />
        <h2>KUNSTENFESTIVALDESARTS</h2>
        <p>Du 10 Mai 2024 au 1 Juin 2024 à Bruxelles-Schaerbeek</p>
        <hr />
        <h2>La Petite Sirène à la Sucrerie de Wavre</h2>
        <p>Du 11 Mai 2024 au 12 Mai 2024 à Bruxelles-Schaerbeek</p>
      </div>
      </div>
      <p className='moreinf'>Tout l'agenda...</p>
    </div>



  )
}

export default Agenda;