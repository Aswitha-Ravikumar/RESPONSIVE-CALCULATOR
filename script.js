
console.log("Hello");

function appendToDisplay(value) {
    // logic to append the value to the display
    const display = document.getElementById('display');
    display.value += value;
}


function ClearButton()
{
    display.value="";
}

function AllClearButton()
{
    display.value="";
}

function calculate()
{
    try{
        display.value=eval(display.value);
    }
    catch
    {
        display.value="ERROR";
    }
    
}