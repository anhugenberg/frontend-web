fetch ("https://x-colors.herokuapp.com/api/random?number=5", {
    method: "GET",
    headers: {"Content-Type" : "application/json"}
})
    .then(response => {
        return response.json();
    })
    .then((json)=> {
        const firstColor = document.querySelector("#first-color");
        firstColor.style.background = json[0].hex;
        firstColor.innerText = json[0].hex;

        const secondColor = document.querySelector("#second-color");
        secondColor.style.background = json[1].hex;
        secondColor.innerText = json[1].hex;

        const thirdColor = document.querySelector("#third-color");
        thirdColor.style.background = json[2].hex;
        thirdColor.innerText = json[2].hex;

        const fourthColor = document.querySelector("#fourth-color");
        fourthColor.style.background = json[3].hex;
        fourthColor.innerText = json[3].hex;

        const fifthColor = document.querySelector("#fifth-color");
        fifthColor.style.background = json[4].hex;
        fifthColor.innerText = json[4].hex;
    })
    .catch((error)=>{
        console.error(error);
    });
