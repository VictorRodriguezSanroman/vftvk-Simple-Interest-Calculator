function compute(){
    //we stored the values into the variables
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate /100;
    let year = new Date().getFullYear() + parseInt(years);//we get the current year and add to it the year entered in the form

    if(principal <= 0){
        //When the number in 'principal' is 0 or negative:
        alert('Enter a positive number');
        document.getElementById("principal").focus();//added focus on input 'principal'
    }else{
        // Show the result in a tamplate string
        document.getElementById("result").innerHTML = 
        `If you deposit <span class="yellow">${principal}</span>,<br>
        at an interest rate of <span class="yellow">${rate}%</span>.<br>
        You will receive an amount of <span class="yellow">${interest}</span><br>
        in the year <span class="yellow">${year}</span>`;
    }   
}
function updateRate(){
    //Get the value in the range
    let rateval = document.getElementById("rate").value;
    //print the new value in div 'rate_val'
    document.getElementById("rate_val").innerText = rateval + '%';
}