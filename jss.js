

    
//       const inputs = document.querySelectorAll(".inputs"); 
  
//       inputs.forEach(input => {
//         input.addEventListener('change', function () {
//           const label = input.closest("label"); 
          
         
//           const startDate = label.querySelector('.start-date' + input.id.replace('select', ''))?.innerText;
//           const endDate = label.querySelector('.end-date' + input.id.replace('select', ''))?.innerText;
          
//           if (input.checked) {
//             console.log(`Selected flight: Start: ${startDate}, End: ${endDate}`); 
//           }
//         });
//       });
    







// // // function add() {
// // //     const input1 = document.getElementById("input1").value;
// // //     const input2 = document.getElementById("input2").value;
// // //     if (input1 .trim() === "" || input2.trim() === "") {
// // //         alert("please fill in both fields before proceeding.");}

// // //     const data = { input2, input1 };
// // //     localStorage.setItem("data", JSON.stringify(data));

// // //     console.log(input1, input2);
// // //     document.getElementById("input1").value= " "
// // //     document.getElementById("input2").value = " "



// // // }




// //     function add1() {
        
// //         const departurestation = document.getElementById("departurestation").value;
// //         const destinationstation = document.getElementById("destinationstation").value;
      
// //         let sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6;
      
       
// //         if (departurestation === "khouribga") {
// //           sectoin1 = "khouribga";
// //         }
// //         if (departurestation === "marrakech") {
// //           sectoin2 = "marrakech";
// //         }
// //         if (departurestation === "tanger") {
// //           sectoin3 = "tanger";
// //         }
      
// //         if (destinationstation === "paris") {
// //           sectoin4 = "paris";
// //         }
// //         if (destinationstation === "toulouse") {
// //           sectoin5 = "toulouse";
// //         }
// //         if (destinationstation === "london") {
// //           sectoin6 = "london";
// //         }
      
       
// //         if (!sectoin1 && !sectoin2 && !sectoin3 && !sectoin4 && !sectoin5 && !sectoin6) {
// //           alert("please select");
// //           return; 
// //         }
      
        
// //         const departuredate = document.getElementById("departuredate").value;
      
       
// //         const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate };
// //         localStorage.setItem("data", JSON.stringify(data1));
      
       
// //         console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6);
// //       }
      


// let countChecked = 0;
// let inputCheck = document.querySelectorAll('input[type="checkbox"]');
// // let placeNum = 3; 

// inputCheck.forEach(input => {
//   input.setAttribute('disabled', true);  
//   if (input.checked) {
//     countChecked++;  
//   }
// });

// function checkbox() {
//   inputCheck.forEach(checkbox => {
//     checkbox.removeAttribute('disabled');  
//     checkbox.addEventListener('change', () => {
    
//       countChecked = 0;  
//       inputCheck.forEach(input => {
//         if (input.checked) {
//           countChecked++;  
//         }
//       });

     
//       inputCheck.forEach(input => {
//         if (countChecked < placeNum) {
//           input.removeAttribute('disabled');  
//         } else if (!input.checked) {
//           input.setAttribute('disabled', true);  
//         }
//       });
//     });
//   });
// }













// function addticket() {
//   totalprice(); 

//   const input1 = document.getElementById("input1").value;
//   const input2 = document.getElementById("input2").value;
//   const departurestation = document.getElementById("departurestation").value;
//   const destinationstation = document.getElementById("destinationstation").value;
//   const departuredate = document.getElementById("departuredate").value;

//   const startdate = document.querySelector('label[for="select1,select2,select3"] .start-date1')?.innerText;
// const enddate = document.querySelector('label[for="select1,select2,select3"] .end-date1')?.innerText;
// console.log(startdate, enddate);


//   const ticketsList = document.getElementById('ticket');
  
//   for (let i = 0; i < placeNum; i++) {
//     ticketsList.innerHTML += `
//       <div>
//         <p>Name: ${input1}</p>
//         <p>Email: ${input2}</p>
//         <p>Arrival: ${departurestation}</p>
//         <p>Destination: ${destinationstation}</p>
//         <p>Date of Departure: ${departuredate}</p>
//         <p>Start Date: ${startdate},</p>
//         <p>  End Date: ${enddate}</p>
//         <p>Total Price: ${adultcount * adultPrice + childcount * childPrice} dh</p>
//         <hr>
//       </div>
//     `;
//   }
// }











































// // parti tikcet
// function addticket() {
//   totalprice();

//   const input1 = document.getElementById("input1").value;
//   const input2 = document.getElementById("input2").value;
//   const departurestation = document.getElementById("departurestation").value;
//   const destinationstation = document.getElementById("destinationstation").value;
//   const departuredate = document.getElementById("departuredate").value;

//   const startdate1 = document.querySelector('label[for="select1"] .start-date1')?.innerText;
//   const enddate1 = document.querySelector('label[for="select1"] .end-date1')?.innerText;
//   const startdate2 = document.querySelector('label[for="select2"] .start-date2')?.innerText;
//   const enddate2 = document.querySelector('label[for="select2"] .end-date2')?.innerText;
//   const startdate3 = document.querySelector('label[for="select3"] .start-date3')?.innerText;
//   const enddate3 = document.querySelector('label[for="select3"] .end-date3')?.innerText;

//   const selectedoption = document.querySelector('input[name="date"]:checked');

//   if (selectedoption) {
//     const selectedId = selectedoption.id;
//     let selectedstart, selectedend;

//     if (selectedId === "select1") {
//       selectedstart = startdate1;
//       selectedend = enddate1;
//     } else if (selectedId === "select2") {
//       selectedstart = startdate2;
//       selectedend = enddate2;
//     } else if (selectedId === "select3") {
//       selectedstart = startdate3;
//       selectedend = enddate3;
//     }

//     const ticketsList = document.getElementById('ticket');
//     ticketsList.innerHTML = '';

//     for (let i = 0; i < placeNum; i++) {
//       const qrData = `Name: ${input1}, Email: ${input2}, Departure: ${departurestation}, Destination: ${destinationstation}, Departure Date: ${departuredate}, Start Date: ${selectedstart}, End Date: ${selectedend}, Price: ${adultcount * adultPrice + childcount * childPrice} dh`;

//       const ticketContent = `
//         <div class="ticket-item">
//           <p>Name: ${input1}</p>
//           <p>Email: ${input2}</p>
//           <p>Arrival: ${departurestation}</p>
//           <p>Destination: ${destinationstation}</p>
//           <p>Date of Departure: ${departuredate}</p>
//           <p>Start Date: ${selectedstart}</p>
//           <p>End Date: ${selectedend}</p>
//           <p>Total Price: ${adultcount * adultPrice + childcount * childPrice} dh</p>
//           <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}" alt="QR Code">
//           <hr>
//         </div>
//       `;

//       ticketsList.innerHTML += ticketContent;
//     }
//   }
// }
