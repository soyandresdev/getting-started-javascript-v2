// Closure
/**
 * Closure is when a function  "remembers" the vvaribles outside of it,even if you pass that function elsewhere
 */

function ask(question) {
  setTimeout(() => {
    console.log(question)
  }, 100);
}
ask("What is closure?")
// What is closure?