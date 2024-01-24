var num = prompt("Please Wrte Your Percentage to Get Your Grade");

if (num >= 0 && num <= 100) {
  if (num >= 90) {
    grade = "A++" + "<br>" + "Marvellous! You are the Inspiration" + "🥰";
  } else if (num >= 80) {
    grade = "A+" + "<br>" + "Weldone! Keep Doing it" + "🤩";
  } else if (num >= 70) {
    grade = "A" + "<br>" + "Great Job, You Can Do Better" + "🤗";
  } else if (num >= 60) {
    grade = "B" + "<br>" + "Good Job, Try Much Harder" + "👍";
  } else if (num >= 50) {
    grade = "C" + "<br>" + "Not So Good, You Should Do Better" + "🤔";
  } else if (num >= 40) {
    grade = "D" + "<br>" + "Get Perspective" + "😏";
  } else {
    grade =
      "FAIL" + "😔" + "<br>" + "Focus on What You Can Do in The Here And Now";
  }
  document.write(grade);
} else {
  document.write("Wrong Input" + "<br>" + "🥴");
}
