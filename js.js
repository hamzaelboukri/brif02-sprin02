

function scrolltosection(sectionid) {
    
    console.log(sectionid)
    if (sectionid === 'page3'){
    
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const data = { input2, input1 };
    
    localStorage.setItem("data", JSON.stringify(data));
    if (sectionid === 'page3' && (input1.trim() === "" || input2.trim() === "")) {
        alert("please fill in both fields before proceeding.")
        return;  
    }
    console.log(input1, input2)
}
if (sectionid === 'page4'){
    const departurestation = document.getElementById("departurestation").value;
    const destinationstation = document.getElementById("destinationstation").value;
    const departuredate = document.getElementById("departuredate").value;

   
  
    let sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6;
    
    
    if (departurestation === "khouribga") {
      sectoin1 = "khouribga";
    }
    if (departurestation === "marrakech") {
      sectoin2 = "marrakech";
    }
    if (departurestation === "tanger") {
      sectoin3 = "tanger";
    }
    
    if (destinationstation === "paris") {
      sectoin4 = "paris";
    }
    if (destinationstation === "toulouse") {
      sectoin5 = "toulouse";
    }
    if (destinationstation === "london") {
      sectoin6 = "london";
    }
     
    const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate };
    localStorage.setItem("data", JSON.stringify(data1));
    
    
    console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6 , departuredate );
}

    if (sectionid === 'page4' && (departurestation.value=== "" || destinationstation.value === "")){
        
        alert("please select");
        return;
        
        
    }

    document.getElementById(sectionid).scrollIntoView({ behavior: 'smooth' }); }








































































// // function add() {
// //     const input1 = document.getElementById("input1").value;
// //     const input2 = document.getElementById("input2").value;
// //     if (input1 .trim() === "" || input2.trim() === "") {
// //         alert("please fill in both fields before proceeding.");}

// //     const data = { input2, input1 };
// //     localStorage.setItem("data", JSON.stringify(data));

// //     console.log(input1, input2);
// //     document.getElementById("input1").value= " "
// //     document.getElementById("input2").value = " "



// // }




//     function add1() {
        
//         const departurestation = document.getElementById("departurestation").value;
//         const destinationstation = document.getElementById("destinationstation").value;
      
//         let sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6;
      
       
//         if (departurestation === "khouribga") {
//           sectoin1 = "khouribga";
//         }
//         if (departurestation === "marrakech") {
//           sectoin2 = "marrakech";
//         }
//         if (departurestation === "tanger") {
//           sectoin3 = "tanger";
//         }
      
//         if (destinationstation === "paris") {
//           sectoin4 = "paris";
//         }
//         if (destinationstation === "toulouse") {
//           sectoin5 = "toulouse";
//         }
//         if (destinationstation === "london") {
//           sectoin6 = "london";
//         }
      
       
//         if (!sectoin1 && !sectoin2 && !sectoin3 && !sectoin4 && !sectoin5 && !sectoin6) {
//           alert("please select");
//           return; 
//         }
      
        
//         const departuredate = document.getElementById("departuredate").value;
      
       
//         const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate };
//         localStorage.setItem("data", JSON.stringify(data1));
      
       
//         console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6);
//       }
      
