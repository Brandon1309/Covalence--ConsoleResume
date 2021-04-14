let name = "Brandon".toUpperCase();



console.log(`Name: ${name}`);
console.log("Career wanted: Web Developer");
console.log("Self-Description: My name is Brandon, i am 25, and have a passion for programming");

console.log("Intrests");
console.log("- Coding");
console.log("- Big Bang Theory");
console.log("- Baseball");
console.log("My Previous Experience");

displayPosition("UGA", "Tutor", "Tutored students in math")

console.log("Skills");
displaySkill("C#", true)
displaySkill("Python", false)
displaySkill("Javascript", false)


function displayPosition(compName, jobTitle, desc) {
  console.log(`${jobTitle} at ${compName} -  ${desc}`)
}

function displaySkill(skillName, isCool) {
  if (isCool) {
    console.log(`BAM: ${skillName}`)
  } else {
    console.log(skillName)
  }
}