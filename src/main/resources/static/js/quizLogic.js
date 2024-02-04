let PlayerScore = 0;
let currentIndex = -1;
let userInput = [];
const question = ["When is assignment 1 due...? ", "What is the colour of the Visual Studio Code symbol? ", "Why do we have to do this? ", "Who are you? ", "How do you breathe? "]
const choice1 = ["Friday night", "Green", "Responsibility", "Who are you???", "Sniff really hard"]
const choice2 = ["Saturday night", "Purple", "Pride", "No one", "Just breathe"]
const choice3 = ["Sunday night", "Blue", "Passion", "I am the product of society", "Inhale... Exhale..."]
const choice4 = ["Monday night", "Grey", "I have no idea", "I am me", "You breathe?"]
const answer = ["Saturday night", "Blue", "Responsibility", "I am me", "Inhale... Exhale..."]

function startQuiz()
{
    document.getElementById("startPage").style.display="none";
    currentIndex = 0;
    helpSetUp();
    document.getElementById("QnA").style.display="block";
}

function helpSetUp()
{
    document.getElementById("Question").innerHTML = question[currentIndex];

    document.getElementById("a").innerHTML = choice1[currentIndex];
    document.getElementById("a-radio").value = choice1[currentIndex];

    document.getElementById("b").innerHTML = choice2[currentIndex];
    document.getElementById("b-radio").value = choice2[currentIndex];
    
    document.getElementById("c").innerHTML = choice3[currentIndex];
    document.getElementById("c-radio").value = choice3[currentIndex];

    document.getElementById("d").innerHTML = choice4[currentIndex];
    document.getElementById("d-radio").value = choice4[currentIndex];
}

function process()
{
    //checks if it is answered, and records/evaluates it
    let answered = false;
    const options = document.getElementsByName("option")
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked === false)
    {
        window.alert("You have not selected an answer yet")
    }
    else
    {
        options.forEach((option) => 
        {
            if(option.checked === true)
            {
                if (option.value == answer[currentIndex]) 
                {
                    PlayerScore++ //adding to player's score
                }
                userInput[currentIndex] = option.value
                answered = true;
            }
        })
    }
    return answered;
}

function previous()
{
    if (currentIndex > 0)
    {
        currentIndex--;
        helpSetUp();
        clearRadio();
        if (currentIndex == question.length-2)
        {
            document.getElementById('Submit').style.display ='none';
            document.getElementById("next").style.display ='inline';

        }
    }
}

function clearRadio()
{
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) 
    {
        options[i].checked = false;
    }
}

function next()
{
    let userA = process()
    if(userA == true)
    {
        currentIndex++;
        helpSetUp();
        clearRadio();
        if (currentIndex == question.length-1)
        {
            document.getElementById("next").style.display ='none';
            document.getElementById('Submit').style.display ='inline';
        }
    }
}

function results()
{
    for ( let i = 0; i < question.length; i++)
    {
        document.getElementById('outputResults').append(question[i]);
        document.getElementById("outputResults").append(answer[i]);

        var radioEins = document.createElement('p');
        radioEins.className = "endGameFont";
        
        document.getElementById("outputResults").appendChild(document.createElement('br'));

        radioEins.innerHTML = "your answer: "+ userInput[i];
        document.getElementById("outputResults").appendChild(radioEins);

        if( userInput[i] == answer[i])
        {
            radioEins.className = "correctAnswer";
        }
        else
        {
            radioEins.className = "wrongAnswer";
        }

        document.getElementById("outputResults").appendChild(document.createElement('hr'))
    }
        
}

function Submit()
{
    if (process() == true)
    {
        document.getElementById('results').style.display = "block";
        document.getElementById('QnA').style.display = 'none';

        document.getElementById('score_val').innerHTML = PlayerScore;
        results();
    }
}

//common mistakes i did in js:
// forgot to put brackets around id name in getElementById
// PUTTING '=' in getElementById SKDLFJ
// if doing a specific case conditioning like the submit button replacing next n vise versa, the prev will have inverse order of display statement in order for it to work
