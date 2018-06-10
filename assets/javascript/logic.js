

$(document).ready(function(){


    
    /* Set an array of objects, where each object is one of the questions. The game is set up so that you can add as many or few questions
    as you require. 
    */
    
    
    var questions = [ 
        { question:"Who is Lukes Father?", 
        choices: { a:"Obi-Wan", b:"Darth Vader", c:"Darth Sidous", d:"Mel Brooks" },
        correct: "b",
        },

        { question:"This phrase has been said in every Star Wars Movie to date?",
        choices: { a:"Use The FORCE!", b:"I'm setting up my attack run", c:"The Sith!", d:"I have a bad feeling about this" },
        correct: 'd',
       },

        { question:"What year was Star Wars released?",
        choices: { a:"1972", b:"1968", c:"1977", d:"1981" },
        correct: 'c',
        },

        { question:"Ewoks are natives to what planet?",
        choices: { a:"Endor", b:"Endor's Forest Moon", c:"Tatooine", d:"Hoth" },
        correct: 'b',
        },

        { question:"Why do Sandpeople march in single file?",
        choices: { a:"Queing is what they do!", b:"To hide there numbers", c:"To cover more ground", d:"Defense" },
        correct: 'b',
        },
    
        { question:"This Star Wars RPG, released in 2003 is considered by many to be the the best Star Wars game of all time.",
        choices: { a:"Jedi Knight", b:"Dark Forces", c:"X-wing vs Tie Fighter", d:"Knights of the Old Republic" },
        correct: 'd',
        last: 0,},

        { question:"He is the senate",
        choices: { a:"Yoda", b:"Chancellor Valorum", c:"Queen Amidala", d:"Darth Sidious" },
        correct: 'd',
        },
    
        { question:"Who was Lukes gunner during the Battle of Hoth",
        choices: { a:"Dak", b:"Bigs Darklighter", c:"Han Solo", d:"Chewbacca" },
        correct: 'a',
        },

        { question:"___________ is a good trick",
        choices: { a:"Flipping", b:"Banking", c:"Spinning", d:"Using the force" },
        correct: 'c',
        },

        { question:"What is Darth Vaders true name.",
        choices: { a:"Anakin Skywalker", b:"Chancellor Valorum", c:"James Kirk", d:"Shmi Skywalker" },
        correct: 'a',
        },
    ];
   
    //declare the variables used during game
    var playerChoice =""; //this variable will hold the players choice after clicking a button
    var i = 0;// this variable is a simple counter used to progress
    var playQuestion= questions[i]; //this variable is the current question "object" 
    var right=0; //counter variable for correct answers
    var wrong=0; //counter for incorrect answers
    var counter;// variable for the timer to help set the interval at which the timer runs
    var count = 120; //seconds for the timer
    
$("#timer").text(count);
$("#right").text("Correct: "+ right);
$("#wrong").text("Incorrect: "+ wrong);
    
    
   



//In the game space div we replace the start button with the new html buttons
$(document).on("click", "#start", function(){
        i = 0;
        counter=setInterval(timer, 1000); //timer runs every second
        $('#gameSpace').html(
            '<div class= "col-sm-3"></div>'+
            '<div class= "col-sm-6">'+
                    '<button type="button" letter= "a" id="btnA" class="btn btn-success gameBtn">A | <span id=choiceA></span></button>'+
                    '<div class="row spacer"></div>'+
                    '<button type="button"  letter= "b" id="btnB" class="btn btn-secondary gameBtn">B | <span id=choiceB></span></button>'+
                    '<div class="row spacer"></div>'+
                    '<button type="button"  letter= "c" id="btnC" class="btn btn-primary gameBtn">C | <span id=choiceC></span></button>'+
                    '<div class="row spacer"></div>'+
                    '<button type="button"   letter= "d" id="btnD" class="btn btn-danger gameBtn">D | <span id=choiceD></span></button>'+
            '</div>'+
            '<div class= "col-sm-3"></div>'+

    
    '<div class="row spacer"></div>'
        );

        //call set so buttons and questions populate
        set(); 
    })

    
    
    






// Sets the timer function that is called upon start
function timer()
{
count--; //decrease the count by 1
$("#timer").text(count); //display the current count in the appropriate div.
if (count <= 0)
{
   clearInterval(counter);
   timesup();}
}
 


    //A-D buttons
    $(document).on("click", ".gameBtn", function(){
    
    playerChoice= $(this).attr("letter");
    console.log(playerChoice);
    check();
    })
    
    

    
    
    //set function that changes associated html elements to represent the new question
    function set(){
       console.log(questions.length)
       console.log(i)
       
       
       if (i+1 > questions.length){ timesup()}

        else {
        
        
        $("h2").text(playQuestion.question);
        $("#choiceA").text(playQuestion.choices.a);
        $("#choiceB").text(playQuestion.choices.b);
        $("#choiceC").text(playQuestion.choices.c);
        $("#choiceD").text(playQuestion.choices.d);
        $('.gameBtn').removeAttr("disabled") //reenables the game buttons
        } 
    }
   


    // function that checks the players guess vs the correct property of the current question
    function check(){
        console.log('success');

        // checks the players choice against the correct attribute, if it is correct, increase i and setup the next question increases the correct tally
        if (playerChoice === playQuestion.correct){
           correct(); 
            i++;
            playQuestion= questions[i];
            right++;
             $("#right").text("Correct: "+ right);
            
            
        }
            // checks the players choice against the correct attribute, if it is correct, increase i and setup the next question increases the incorrect tally
        else {
           incorrect(); i++;
            playQuestion= questions[i];
            wrong++;
            $("#wrong").text("Incorrect: "+ wrong);
            
           
        };
        

    }

    //functions to alert the user if they are correct or incorrect on a 3 second timer then runs the set() function displaying the new question and answers
    function correct(){
        $('h2').text('You are Right!!')
        $('.gameBtn').attr("disabled", true) //Disables game buttons wile the timeout is running
        setTimeout(set, 3000)
    }



    function incorrect(){
        $('h2').text('Wrong! The Correct answer was '+playQuestion.correct.toUpperCase()+'.')
        $('.gameBtn').attr("disabled", true) //Disables game buttons wile the timeout is running
        setTimeout(set, 3000) //delays the next question by 3 seconds
    }
    
    
    
    //Endgame


    // this function runs when the timer reaches 0 or when the player runs out of questions in the bank
    function timesup(){
        clearInterval(counter); 
        $('h2').text('Game over!!! You got '+right+' correct!!') //set the h2 where the questions are displayed to alert the player that
                        
     //  changes the game space to display the rest button
        $('#gameSpace').html(

            '<div class= "col-sm-5"></div>'+
            '<div class= "col-md-2 text-center">'+
            '<button id="replay" type="button" class="btn btn-dark">Replay</button>'+
            '</div>'+
            '<div class= "col-sm-5"></div>'+    


            '</div>'
        );

        

    }
    //refreshes the page to restart the game. though about encasing everything in a gameStart() function and just calling that on reload but this acheives the same thing
    $(document).on("click", "#replay", function(){
        location.reload();

        })


});
