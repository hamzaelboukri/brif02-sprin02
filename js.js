
window.onload = function () {
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
  if (sectionid === 'page3') {

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
  if (sectionid === 'page4') {
    const departurestation = document.getElementById("departurestation").value;
    const destinationstation = document.getElementById("destinationstation").value;
    const departuredate = document.getElementById("departuredate").value;



    let sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6;


    if (departurestation === "khouribga") { sectoin1 = "khouribga"; }

    if (departurestation === "marrakech") { sectoin2 = "marrakech"; }

    if (departurestation === "tanger") { sectoin3 = "tanger"; }

    if (destinationstation === "paris") { sectoin4 = "paris"; }

    if (destinationstation === "toulouse") { sectoin5 = "toulouse"; }

    if (destinationstation === "london") { sectoin6 = "london"; }

    const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate };
    localStorage.setItem("data1", JSON.stringify(data1));


    console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6, departuredate);
  }

  if (sectionid === 'page4' && (departurestation.value === "" || destinationstation.value === "")) {

    alert("please select");
    return;



  }
  // page 5
  if (sectionid === 'page5') {
    console.log(sectionid);
    let selectinput = false;

    const inputs = document.querySelectorAll(".inputs");
    inputs.forEach(input => {
      if (input.checked) {
        selectinput = true;
      }
    });

    if (!selectinput) {
      alert("please select an option")
      return;

    }

  }

  if (sectionid === 'page6') {
  totalprice();

  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const departurestation = document.getElementById("departurestation").value;
  const destinationstation = document.getElementById("destinationstation").value;
  const departuredate = document.getElementById("departuredate").value;

  const startdate1 = document.querySelector('label[for="select1"] .start-date1')?.innerText;
  const enddate1 = document.querySelector('label[for="select1"] .end-date1')?.innerText;
  const startdate2 = document.querySelector('label[for="select2"] .start-date2')?.innerText;
  const enddate2 = document.querySelector('label[for="select2"] .end-date2')?.innerText;
  const startdate3 = document.querySelector('label[for="select3"] .start-date3')?.innerText;
  const enddate3 = document.querySelector('label[for="select3"] .end-date3')?.innerText;

  const selectedoption = document.querySelector('input[name="date"]:checked');

  if (selectedoption) {
    const selectedId = selectedoption.id;
    let selectedstart, selectedend;

    if (selectedId === "select1") {
      selectedstart = startdate1;
      selectedend = enddate1;
    } else if (selectedId === "select2") {
      selectedstart = startdate2;
      selectedend = enddate2;
    } else if (selectedId === "select3") {
      selectedstart = startdate3;
      selectedend = enddate3;
    }

    const ticketsList = document.getElementById('ticket');
    ticketsList.innerHTML = '';

    for (let i = 0; i < placeNum; i++) {
      const qrData = `Name: ${input1}, Email: ${input2}, Departure: ${departurestation}, Destination: ${destinationstation}, Departure Date: ${departuredate}, Start Date: ${selectedstart}, End Date: ${selectedend}, Price: ${adultcount * adultPrice + childcount * childPrice} dh`;

      const ticketContent = `
        <div class="ticket-item">
          
          <p>Name: ${input1}</p>
          <p>Email: ${input2}</p>
          <p>Arrival: ${departurestation}</p>
          <p>Destination: ${destinationstation}</p>
          <p>Date of Departure: ${departuredate}</p>
          <p>Start Date: ${selectedstart}</p>
          <p>End Date: ${selectedend}</p>
          <p>Total Price: ${adultcount * adultPrice + childcount * childPrice} dh</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}" alt="qr code">
          <hr>
        </div>
      `;

      ticketsList.innerHTML += ticketContent;
    }
  }










  }

















  document.getElementById(sectionid).scrollIntoView({ behavior: 'smooth' });
}
//button back 

function back(sectionid) {

  document.getElementById(sectionid).scrollIntoView({ behavior: 'smooth' });
}







const adultPrice = 500;
const childPrice = 100;

let adultcount = 0;
let childcount = 0;
let placeNum = 0; 
let countChecked = 0;
let inputCheck = document.querySelectorAll('input[type="checkbox"]');

inputCheck.forEach(cb => cb.setAttribute('disabled', true));

function updatecount(type, change) {
  if (type === 'adult') {
    adultcount = Math.max(0, adultcount + change);
    document.getElementById('adult-count').innerText = adultcount;
  }
  if (type === 'child') {
    childcount = Math.max(0, childcount + change);
    document.getElementById('child-count').innerText = childcount;
  }

  totalprice(); 
  checkbox();
}

function totalprice() {
  const totalprice = (adultcount * adultPrice) + (childcount * childPrice);
  placeNum = adultcount + childcount; 
  document.getElementById('total-price').innerText = totalprice + 'dh';
}

function checkbox() {
 
  countChecked = Array.from(inputCheck).filter(cb => cb.checked).length;


  if (countChecked > placeNum) {
    inputCheck.forEach(cb => cb.checked = false);
    countChecked = 0;
  }

  
  inputCheck.forEach(cb => {
    if (countChecked >= placeNum && !cb.checked) {
      cb.setAttribute('disabled', true);
    } else {
      cb.removeAttribute('disabled');
    }
  });
}


inputCheck.forEach(cb => {
  cb.addEventListener('change', () => {
    countChecked = Array.from(inputCheck).filter(cb => cb.checked).length;
    checkbox(); 
  });
});




//pdf

document.getElementById("generatePDF").addEventListener("click", () => {
  const ticketSection = document.getElementById("ticket");

  const options = {
    margin: 10,
    filename: 'Flight_Tickets.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const children = ticketSection.children;


  Array.from(children).forEach((ch, index) => {

    if (index < Array.from(children).length - 1)
      ch.style.pageBreakAfter = 'always';
  });


  html2pdf().set(options).from(ticketSection).save();
});

























































