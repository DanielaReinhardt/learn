 function noWish() //function for a message when type in the wish
    {var testInput = document.getElementById("wish").value;
    

    if (testInput.length==0)
    {
    document.getElementById("para").innerHTML="You can wish something"
    
    }

        else 
        document.getElementById("para").innerHTML="Good Idea";}


        function BirthdayLoc(){
            var input = document.getElementById("loc").value;
        
            if (input.length==0){
                document.getElementById("tell").innerHTML="Where do you want to go on birthday?"
            }
            else
            document.getElementById("tell").innerHTML="Thanks for your help";}
            
