

$(document).ready(function(){


    
    
    var questions = [ 
        { question:"Who is Lukes Father?", 
        choices: { a:"Obi-Wan", b:"Darth Vader", c:"Darth Sidous", d:"Mel Brooks" },
        correct: "b",
        last: 0,},

        { question:"This phrase has been said in every Star Wars Movie to date?",
        choices: { a:"Use The FORCE!", b:"I'm setting up my attack run", c:"The Sith!", d:"I have a bad feeling about this" },
        correct: 'd',
        last: 0,},

        { question:"What year was Star Wars released?",
        choices: { a:"1972", b:"1968", c:"1977", d:"1981" },
        correct: 'c',
        last: 0,},

        { question:"Ewoks are natives to what planet?",
        choices: { a:"Endor", b:"Endor's Forest Moon", c:"Tatooine", d:"Hoth" },
        correct: 'b',
        last: 0,},

        { question:"Why do Sandpeople march in single file?",
        choices: { a:"Queing is what they do!", b:"To hide there numbers", c:"To cover more ground", d:"Defense" },
        correct: 'b',
        last: 0,},
    
        { question:"This Star Wars RPG, released in 2003 is considered by many to be the the best Star Wars game of all time.",
        choices: { a:"Jedi Knight", b:"Dark Forces", c:"X-wing vs Tie Fighter", d:"Knights of the Old Republic" },
        correct: 'd',
        last: 0,},

        { question:"He is the senate",
        choices: { a:"Yoda", b:"Chancellor Valorum", c:"Queen Amidala", d:"Darth Sidious" },
        correct: 'd',
        last: 0,},
    
        { question:"Who was Lukes gunner during the Battle of Hoth",
        choices: { a:"Dak", b:"Bigs Darklighter", c:"Han Solo", d:"Chewbacca" },
        correct: 'a',
        last: 0,},

        { question:"___________ is a good trick",
        choices: { a:"Flipping", b:"Banking", c:"Spinning", d:"Using the force" },
        correct: 'c',
        last: 0,},

        { question:"What is Darth Vaders true name.",
        choices: { a:"Anakin Skywalker", b:"Chancellor Valorum", c:"James Kirk", d:"Shmi Skywalker" },
        correct: 'a',
        last: 1,},
    ];
   
    
    var playerChoice ="";
    var i = 0;
    var playQuestion= questions[i];
    var right=0;
    var wrong=0;
    var counter;
    var count = 30;
    
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

        //call set to display 
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
   timesup();

}

}
 


    //A-D buttons
    $(document).on("click", ".gameBtn", function(){
    
    playerChoice= $(this).attr("letter");
    console.log(playerChoice);
    check();
    })
    
    

    
    
    //set function that changes associated html elements to represent the new question
    function set(){
        if (i > 9){ clearInterval(counter); timesup()}

        else {
        
        
        $("h2").text(playQuestion.question);
        $("#choiceA").text(playQuestion.choices.a);
        $("#choiceB").text(playQuestion.choices.b);
        $("#choiceC").text(playQuestion.choices.c);
        $("#choiceD").text(playQuestion.choices.d);
        
        } 
    }
   
    function test(){
        if (questions[i].last= 1){timesup()
            console.log(i)

            console.log(questions.length)
        }
    }

    // function that checks the players guess vs the correct property of the current question
    function check(){
        console.log('success');
        if (playerChoice === playQuestion.correct){
            alert("Correct");
            i++;
           console.log (i)
            playQuestion= questions[i];
            right++;
 
            $("#right").text("Correct: "+ right);
            set();
            
        }
        else {
            alert("Sorry that is not correct");
            i++;

            playQuestion= questions[i];
            wrong++;
            $("#wrong").text("Incorrect: "+ wrong);
            set();
           
        };
        

    }

    //Victory conditions 

    function timesup(){

        $('h2').text('Game over!!! You got '+right+' correct!!')
                        
        
        $('#gameSpace').html(

            '<div class= "col-sm-5"></div>'+
            '<div class= "col-md-2 text-center">'+
            '<button id="replay" type="button" class="btn btn-dark">Replay</button>'+
            '</div>'+
            '<div class= "col-sm-5"></div>'+    


            '</div>'
        );

        

    }

    $(document).on("click", "#replay", function(){
        location.reload();

        })


});
