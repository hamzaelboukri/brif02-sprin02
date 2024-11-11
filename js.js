
window.onload = function() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('departuredate').setAttribute('min', today);

  
  const inputs = document.querySelectorAll(".inputs");
  inputs.forEach(input => {
    input.addEventListener('change', function () {
    
      const label = input.closest("label");
      const startdate = label.querySelector('.start-date' + input.id.replace('select', ''))?.innerText;
      const enddate = label.querySelector('.end-date' + input.id.replace('select', ''))?.innerText;

      const data2 = { startdate, enddate };
      localStorage.setItem("data2", JSON.stringify(data2));

      if (input.checked) {
        console.log(`start: ${startdate}, end: ${enddate}`);
      }
    });
  });
};

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
    
    
    if (departurestation === "khouribga") { sectoin1 = "khouribga";}

    if (departurestation === "marrakech") {sectoin2 = "marrakech";}

    if (departurestation === "tanger") {sectoin3 = "tanger";}
    
    if (destinationstation === "paris") {sectoin4 = "paris";}

    if (destinationstation === "toulouse") {sectoin5 = "toulouse";}

    if (destinationstation === "london") {sectoin6 = "london";}
     
    const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate };
    localStorage.setItem("data1", JSON.stringify(data1));
    
    
    console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6 , departuredate );
}

    if (sectionid === 'page4' && (departurestation.value=== "" || destinationstation.value === "")){
        
        alert("please select");
        return;
        

        
    }
// page 5
if (sectionid === 'page5') {
  console.log(sectionid);
  let selectinput= false;

  const inputs = document.querySelectorAll(".inputs");
  inputs.forEach(input => {
    if(input.checked){
      selectinput = true;
    }
  });
  
if (!selectinput) {
  alert("please select an option")
  return;
  
}

}



    document.getElementById(sectionid).scrollIntoView({ behavior: 'smooth' }); 
  

}



const adultPrice = 500;
const childPrice = 100;
 


let adultcount = 0;
let childcount = 0;

function updatecount(type, change) {
  checkbox();
    if (type === 'adult') {
        adultcount = Math.max(0, adultcount + change); 
        document.getElementById('adult-count').innerText = adultcount;
    } 
    if (type === 'child') {
        childcount = Math.max(0, childcount + change); 
        document.getElementById('child-count').innerText = childcount;
    }

    totalprice();
}
let placeNum=0;
function totalprice(){

  const totalprice = (adultcount * adultPrice) + (childcount * childPrice) 
placeNum=adultcount+childcount;

  document.getElementById('total-price').innerText = totalprice +'dh';


}




let countChecked = 0;
let inputCheck = document.querySelectorAll('input[type="checkbox"]');
// let placeNum = 3; 

inputCheck.forEach(input => {
  input.setAttribute('disabled', true);
  if (input.checked) {
    countChecked++;
  }
});

function checkbox() {
  inputCheck.forEach(checkbox => {
    checkbox.removeAttribute('disabled');
    checkbox.addEventListener('change', () => {
    
      countChecked = 0;
      inputCheck.forEach(input => {
        if (input.checked) {
          countChecked++;
        }
      });

     
      inputCheck.forEach(input => {
        if (countChecked < placeNum) {
          input.removeAttribute('disabled');
        } else if (!input.checked) {
          input.setAttribute('disabled', true);
        }
      });
    });
  });
}














// let countChecked=0
// let inputCheck=document.querySelectorAll('input[type="checkbox"]');
// for(let i=0;i<inputCheck.length;i++){
//   inputCheck[i].setAttribute('disabled',true);
//   if(inputCheck[i].checked){
//     countChecked++;
//   }
// }

// function checkbox(){
  
// inputCheck.forEach(checkbox=>{
//   checkbox.removeAttribute("disabled");
//   checkbox.addEventListener('change',()=>{
//     for(let i=0;i<inputCheck.length;i++){
//       if(inputCheck[i].checked){
//         countChecked++;
//       }
//     }
//     inputCheck.forEach(checkbox=>{
//       if(placeNum>countChecked){
//         checkbox.removeAttribute('disabled');
//       }else if(!checkbox.checked){
//         checkbox.setAttribute('disabled',true);
//       }
//   })
// })
// })

    
  
// }






















