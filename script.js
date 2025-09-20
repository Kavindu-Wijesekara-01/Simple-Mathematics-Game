function randomletter(){
            const alphabet ='123456789';
            const randomindex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomindex];
        }

        function randomletter2(){
            const alphabet ='123456789';
            const randomindex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomindex];
        }

        function randomsymbol(){
            const symbols = '/X-+';
            const randomsyindex = Math.floor(Math.random() * symbols.length);
            return symbols[randomsyindex];
        }

        const display =  document.getElementById("display");
        const display2 =  document.getElementById("display2");
        const correct =  document.getElementById("correct");
        const wrong   =  document.getElementById("wrong");
        const process =  document.querySelector("progress");
        const miss    =  document.getElementById("miss");
        const speed   =  document.getElementById("speed");
        const insymbol = document.getElementById("insymbol");
        const inNumber = document.getElementById("inNum");
        const correctAns = document.getElementById("correctA");

        let timer;
        let result;

        display.innerHTML =  randomletter();
        insymbol.innerHTML = randomsymbol();
        display2.innerHTML = randomletter2();

        function calculate(){
            if (insymbol.innerHTML == '+'){
                result = Number(display.innerHTML)+ Number(display2.innerHTML);
                
            }else if(insymbol.innerHTML == '-'){
                result = Number(display.innerHTML)- Number(display2.innerHTML);
               
            }else if(insymbol.innerHTML == 'X'){
                result = Number(display.innerHTML)* Number(display2.innerHTML);
                
            }else{
                result = Number(display.innerHTML)/ Number(display2.innerHTML);
                
            }
            // Handle NaN and null values

        }

        calculate();
        console.log(result);

        function getvalue() {
            if (inNumber.value == result){
                correct.innerHTML++;
            }else{
                wrong.innerHTML++;
                alert("Correct Answer is "+result)
            }
            display.innerHTML =  randomletter();
            insymbol.innerHTML = randomsymbol();
            display2.innerHTML = randomletter2();
            //correctAns.innerHTML = result;
            startTimer();
            calculate(); 
            console.log(result);
            inNumber.value='';

        }

        
        
        let delay = 1000;
        function startTimer() {
            document.getElementById("startbtn").innerHTML = "STARTED";
            process.value = 0;
            clearInterval(timer);
            timer = setInterval(function(){
                process.value +=10;
                if(process.value >= 100){
                    miss.innerHTML++;
                    display.innerHTML =  randomletter();
                    insymbol.innerHTML = randomsymbol();
                    display2.innerHTML = randomletter2();
                    
                    alert("You miss previous question, It's correct answer is = " + result);
                    startTimer();
                    calculate(); 
                    console.log(result);
                    inNumber.value='';
                   
                }
            },delay)
        }

        speed.onchange = function(){
            delay =1000 - speed.value;  // delay less with speed increase
            startTimer();
        }
