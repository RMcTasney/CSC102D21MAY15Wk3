
function startCountdown() {
    var count = 10

    for(var i = 0; i < 10; i++){

        setTimeout(function(){
            document.getElementById("countdownTimer").innerHTML = count; 
            count--
        }, 1000 * i);
    
        

        setTimeout(function(){
            document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
        }, 10000)

        
    }

}





/* This code is the slow way of doing it
//wk1-2 Countdown Timer should run 10....1 then blastoff

// this function is executed when start button is clicked, then it
// counts down from 10 to eventually print Blast Off!!
function startCountdown() {

    //variables used
    var count = 10;
    var blastOff = "Blast Off!!"
    
    // this allows change to paragraph in html file
    // this should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    // the following commands are how we count down from 10 to Blast Off!!
    setTimeout(function () {
        // after 1 second, will run cod in here
        // this should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; 
    }, 1000);

    setTimeout(function(){
        // this should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    setTimeout(function(){
        // this should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    setTimeout(function(){
        // this should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    setTimeout(function(){
        // this should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    setTimeout(function(){
        // this should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    setTimeout(function(){
        // this should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    setTimeout(function(){
        // this should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    setTimeout(function(){
        // this should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    setTimeout(function(){
        // this should display 0
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 10000);


    // last command to display Blast Off!!
    setTimeout(function(){
        // this should display Blast Off!!
        document.getElementById("countdownTimer").innerHTML = blastOff;
    }, 11000);

} */