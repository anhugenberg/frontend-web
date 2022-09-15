//images credit: https://www.halloweencostumes.com/blog/p-685-whos-that-minion.aspx

const button = document.querySelector('#submit-button');
button.addEventListener('click', () => {
    
    const colorInput = document.querySelector('#color-input');
    const main = document.querySelector('main');
    main.style.backgroundColor = colorInput.value;

    const numberImput = document.querySelector('#number-imput').value;
    console.log(numberImput);

    //code help from https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
    if (numberImput == 1){
        console.log(numberImput);
        const image = document.getElementById('minion');
        image.src = "kevin.jpg";

        document.getElementById("submit-button")
        .style.display = "none";
    }
    else if (numberImput == 2){
        console.log(numberImput);
        const image = document.getElementById('minion');
        image.src = "bob.jpg";

        document.getElementById("submit-button")
        .style.display = "none";
    }
    else if(numberImput == 3){
        console.log(numberImput);
        const image = document.getElementById('minion');
        image.src = "stuart.jpg";

        document.getElementById("submit-button")
        .style.display = "none";
    }
    else{
        console.log(numberImput);
        const image = document.getElementById('minion');
        image.src = "dave.jpg";

        document.getElementById("submit-button")
        .style.display = "none";
    }
});