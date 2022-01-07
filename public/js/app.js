 let outputScreen = document.getElementById("display-field");

        // display num into input 
        function display(num) {
            outputScreen.value += num;
            outputScreen.focus();
        }

        // calculate something 
        function calculate() {
            if (outputScreen.value !== "") {
                try {
                    outputScreen.value = eval(outputScreen.value);
                } catch (err) {
                    alert("Invalid Input!");
                }
            }else{
                alert("Input something!");
            }

        }

        // clear input 
        function Clear(){
            outputScreen.value = "";
        }
       
        // function for delete pie to pie input 
        function del(){
            outputScreen.value = outputScreen.value.slice(0, -1);
        }


        document.addEventListener("keypress", function(e){
            if(e.key === "Enter"){
                calculate();
            }
        })



