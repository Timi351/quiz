//start the quiz
//show the questions
//check the answers
//move to the next question
//show the result after 
//restart the quiz
const questions = [
    {
        question:"Who was the first President of the United states?",
        options :["George Washington","Thomas Jeferson","Abraham Lncoln", "Franklin D.Roosevelt"],
        correct:"George Washington"
    },
    {
        question:"What ancient civilization built the Great Pyramid of Giza?",
        options :["Egyptians","Greeks","Romans", "Mesopotamians"],
        correct:"Egyptians"
    },
    {
        question:"What is the largest planent in our solar system?",
        options :["Earth","Saturn","Jupiter", "Uranus"],
        correct:"Jupiter"
    },
    {
        question:"What is the process by which plants make their own food ?",
        options :["Respiration","Photosynthesis","Decomposition", "Fermentation"],
        correct:"Photosynthesis"
    },
    {
        question:"Which British rock band wrote the song 'Yesterday'?",
        options :["The Rolling Stones","The Beatles","Queen", "Led Zeppelin"],
        correct:"The Beatles"
    },
    {
        question:"Who played the role of Luke Skywalker in the orginal Star Wars trilogy?",
        options :["Mark Hamil","Harrison Ford","Carrie Fisher", "Alec Guinness"],
        correct:"Jupiter"
    }

]
let currentQuestion = 0;
let correct_answer = 0;
let display_result = document.getElementById("result1");

function startquiz(){
    const question_conainer = document.getElementById("questions");
    const current = questions[currentQuestion];
    question_conainer.textContent = current.question;

    const options_container = document.getElementById("options");
    
    
    options_container.textContent = ``;
    display_result.textContent = ``;
    current.options.forEach(option =>{
        const button = document.createElement("button");
        button.textContent = option;
        options_container.append(button);
        button.classList.add("options_button");
        button.onclick = function(){
          
            if(option === current.correct){
                correct_answer++;
                display_result.textContent = `You are correct!!!`;
                document.getElementById("total_score") = correct_answer;
                
            }
            else{
                display_result.textContent = `You are wrong!!!`;
               
            }
        
            
        }
    })

}

function next_btn(){
    currentQuestion++;

    if(currentQuestion < questions.length){
        startquiz()
    }
    else{
        document.getElementById("result2").textContent = `Test Finished!`
        display_result.textContent = ``;
        document.getElementById("nextbtn").style.display = 'none';
        document.getElementById("scorebtn").style.display = 'block';
    }
    
}
document.getElementById("scorebtn").addEventListener("click", event =>{
    document.getElementById("score_container").style.display = 'block';

})

startquiz();
 



    
    
    
