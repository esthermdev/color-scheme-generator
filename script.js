// Hex color code generator

function codeGenerator() {
    let colorCode = "#"
    let hexDigits = "ABCDEF0123456789"

    for (let i = 0; i < 6; i++) {
        let indx = Math.floor(Math.random() * 16);
        colorCode += hexDigits[indx];
    }

    return colorCode;
}

// Change color button function

const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', function() {
    const colorContainers = document.getElementsByClassName('color-container');
    const colorCodes = document.getElementsByClassName('colorCode');
    
    for (let container of colorContainers) {
        const color = codeGenerator();
        container.style.backgroundColor = color;
    }

    for (let code of colorCodes) {
        const color = codeGenerator();
        code.innerText = color;
    }
});

// Reset color button function

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function() {
    const colorContainers = document.getElementsByClassName('color-container');
    const colorCodes = document.getElementsByClassName('colorCode');
    
    for (let container of colorContainers) {
        container.style.backgroundColor = "#FFFFFF"
    }

    for (let code of colorCodes) {
        code.innerText = "#FFFFFF"
    }
});

// Mouse over and mouse out button effects

colorBtn.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgrey';
});

colorBtn.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'whitesmoke';
});

resetBtn.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgrey';
});

resetBtn.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'whitesmoke';
});