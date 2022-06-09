const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const button = document.querySelector("button");


button.addEventListener('click', function() {
    const val1 = Number(input1.value);
    const val2 = Number(input2.value);
    const val3 = Number(input3.value);

    if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
     console.log("Not number was detected"); 
    }

    if (val1 + val2 < val3 || val3 + val2 < val1 || val3 + val1 < val2) {
        console.log("it is impossible");
    }
    else if (val1 === val2 && val2 === val3) {
        console.log("equilateral triangle");
    }
    else if ((val1 === val2) || (val1 === val3) || (val3 === val2)) {
        console.log("isosceles triangle");
    } else {
        console.log("regular triangle")
    }

})

