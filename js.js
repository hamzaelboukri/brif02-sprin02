
// function add() {
//     const input1 = document.getElementById("input1").value;
//     const input2 = document.getElementById("input2").value;
//     if (input1 .trim() === "" || input2.trim() === "") {
//         alert("please fill in both fields before proceeding.");}

//     const data = { input2, input1 };
//     localStorage.setItem("data", JSON.stringify(data));

//     console.log(input1, input2);
//     document.getElementById("input1").value= " "
//     document.getElementById("input2").value = " "



// }



function add1(){
    const sectoin1 = document.getElementById("khouribga").value;
    const sectoin2 = document.getElementById("marrakech").value;
    const sectoin3 = document.getElementById("tanger").value;
    const sectoin4 = document.getElementById("paris").value;
    const sectoin5 = document.getElementById("toulouse").value;
    const sectoin6 = document.getElementById("london").value;
   
    const  departuredate = document.getElementById(" departure-date").value;
    const data1 = { sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6 , departuredate  };
    localStorage.setItem("data", JSON.stringify(data1));

console.log(sectoin1, sectoin2, sectoin3, sectoin4, sectoin5, sectoin6 );

}



function scrolltosection(sectionid) {

    console.log(sectionid)
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const data = { input2, input1 };

    localStorage.setItem("data", JSON.stringify(data));
    if (sectionid === 'page3' && (input1.trim() === "" || input2.trim() === "")) {
        alert("please fill in both fields before proceeding.")
        return;  
    }
    // document.getElementById("input1").value= " "
    // document.getElementById("input2").value = " "
    document.getElementById(sectionid).scrollIntoView({ behavior: 'smooth' });
}