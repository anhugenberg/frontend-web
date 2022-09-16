//<script> correction #1
function quiz(){
	let score = 0;
	let num;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'
    ]; // correction 2
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length; // correction 10
	
	//generate random number for question
	num = Math.floor(Math.random() * 3); // correction 4
    console.log(num);
		
	for(count = 0; count < totalQuestion; count++){ // correction 3 & 9 & 12
		question = quiz_questions[num];
		answer = prompt(question);
		if (answer == quiz_answers[num]) { // correction 13
			score++; // correction 5
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
        console.log(num);
		if (num == totalQuestion) // correction 6 & 14
			num = 0;
    }

  document.write('<p>You got ' + score + ' out of ' + totalQuestion + ' questions correct.</p>'); // correction 11
}