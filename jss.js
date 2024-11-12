

    
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
