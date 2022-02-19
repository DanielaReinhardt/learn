 function noWish() //function for a message when type in the wish
    {var testInput = document.getElementById("wish").value;
    

    if (testInput.length==0)
    {
    document.getElementById("para").innerHTML="You can wish something"
    
    }
        else 
        document.getElementById("para").innerHTML="Good Idea";}

    function noWish2() //function for a message when type in the wish
        {var testInput = document.getElementById("wish2").value;
        
    
        if (testInput.length==0)
        {
        document.getElementById("para2").innerHTML="You can wish something"
        
        }
            else 
            document.getElementById("para2").innerHTML="Good Idea";}
        
    function noWish3() //function for a message when type in the wish
            {var testInput = document.getElementById("wish3").value;
            
        
            if (testInput.length==0)
            {
            document.getElementById("para3").innerHTML="You can wish something"
            
            }
                else 
                document.getElementById("para3").innerHTML="Good Idea";}       
        
        
        
        function BirthdayLoc(){
            var input = document.getElementById("loc").value;
        
            if (input.length==0){
                document.getElementById("tell").innerHTML="Where do you want to go on birthday?"
            }
            else
            document.getElementById("tell").innerHTML="Thanks for your help";}
            
    
    
    
            function BirthdayLoc2(){
                var input = document.getElementById("loc2").value;
            
                if (input.length==0){
                    document.getElementById("tell2").innerHTML="Where do you want to go on birthday?"
                }
                else
                document.getElementById("tell2").innerHTML="Thanks for your help";}
            
                
               
               
                function BirthdayLoc3(){
                    var input = document.getElementById("loc3").value;
                
                    if (input.length==0){
                        document.getElementById("tell3").innerHTML="Where do you want to go on birthday?"
                    }
                    else
                    document.getElementById("tell3").innerHTML="Thanks for your help";}
                    

            function list(){
                var loc = document.getElementById("loc").value;
                var loc2 = document.getElementById("loc2").value;
                var loc3 = document.getElementById("loc3").value;
            }
        {
        document.getElementById("diplay").innerHTML+= loc + loc2 + loc3;
        }