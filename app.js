/**
 * Project Requirements:
 * - change the background color by generating random hex color by clicking a button
 * - also display the hex code to a disabled input field
 * - add a button to copy the color code
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(output.value);
  });
}

// Step 2 - random color generator function
function generateHexColor() {
  // #000000 #ffffff
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Step 3 - collect all necesseary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event
