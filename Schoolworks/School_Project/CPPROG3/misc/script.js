// ! Sections.
// ? Explains functions and goals to apply.
// * Explains functionality of a set.
// Explains functionality of a line.

// ! Main title and start button section.
// ? Fade out start button and replace title after clicking start button.
function fadeOutSB() {
  //* This set/section selects elements or their given name such as class and id.
  let titleDiv = document.querySelector(".title");
  let box = document.getElementById("start-button");
  let title = titleDiv.querySelector("h1");

  // * Before animation (no visibility).
  titleDiv.style.opacity = "0"; // "style" replicates css for JavaScript.
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)";

  //* Sets timer for said functions.
  setTimeout(() => {
    // Changes title after start button clicked.
    title.textContent = "Select Mode";

    // * Resets animation style of title and re-apply for "Select Mode" title.
    title.style.animation = "none"; //  Resets animation from main title.
    void title.offsetWidth; // Force reflow to restart animation.
    title.style.animation =
      "typing 1.5s linear forwards, blink 0.75s step-end infinite";

    // * This part makes new title re-appear.
    titleDiv.style.opacity = "1";
    titleDiv.style.transform = "translate(-50%, -50%) scale(1)";
  }, 500); // Sets delay for select mode title appearing.

  // * Fade out start button.
  box.style.pointerEvents = "none";
  box.style.opacity = "0";
  box.style.transition = "opacity 0.5s ease-in-out";

  // * Removes start button after fading out.
  box.addEventListener(
    "transitionend",
    () => {
      box.style.display = "none";
      setTimeout(showNextButton, 500); // Show next button after delay.
    },
    { once: true } // Makes it only function once.
  );
}

// ? Apply transitions for start button upon page load.
window.onload = function () {
  showSB();
}; // Runs when the page loads.

function showSB() {
  let button = document.getElementById("start-button");
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables clicking and hovering for a while.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.

  // * Sets delays and timing.
  setTimeout(() => {
    button.style.display = "inline-block"; // Makes sure it's visible.
    button.style.transition =
      "transform 1s ease-in-out, opacity 0.8s ease-in-out";
    button.style.opacity = "1";
  }, 500); // Makes it visible.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(1)";
  }, 800); // Slowly scale back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 1800); // Enables clicking and hovering.
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 1800); // Time it resets.
}

// ! Select mode title and mode button section.
// ? Fades out mode buttons.
function fadeOutMB(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.pointerEvents = "none";
  button.style.opacity = "0";
  button.style.transition = "opacity 0.5s ease-in-out";

  // * Removes mode buttons after fading out.
  button.addEventListener(
    "transitionend",
    () => {
      button.style.display = "none";
    },
    { once: true }
  );
}

// ? Removes title mode and mode buttons.
function fadeOutModes() {
  let titleDiv = document.querySelector(".title");
  let title = titleDiv.querySelector("h1");
  let buttons = document.querySelectorAll(
    "#mode-button1, #mode-button2, #mode-button3"
  );

  //* Fade out select mode title.
  titleDiv.style.opacity = "0";
  titleDiv.style.transform = "translate(-50%, -50%) scale(0.9)";
  titleDiv.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

  // * Fade out all mode buttons.
  buttons.forEach((button) => {
    button.style.pointerEvents = "none";
    button.style.opacity = "0";
    button.style.transition = "opacity 0.5s ease-in-out";

    // * Removes mode buttons and select mode title after fade-out.
    button.addEventListener(
      "transitionend",
      () => {
        button.style.display = "none";
      },
      { once: true }
    );
  });
}

// ? Apply transitions for mode buttons upon appearing.
function showMB1() {
  let button = document.getElementById("mode-button1");

  // * Applies transition styles.
  button.style.display = "inline-block"; // Ensures it's visible.
  button.style.transform = "translate(-50%, -50%) scale(0.86)"; // Starts small.
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0"; // Starts invisible.
  button.style.pointerEvents = "none"; // Disables click and hover for a while.

  // * Delays and timings.
  setTimeout(() => {
    button.style.opacity = "1";
  }, 600); // Slowly makes button appear.
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)";
  }, 800); // Slowly scale back to normal.
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000); // Turns interaction on after delay. (Makes it clickable.)
  setTimeout(() => {
    button.style.transition = ""; // Removes transition.
    button.style.transform = ""; // Resets transform.
  }, 2000); // Time it resets.
}
function showMB2() {
  let button = document.getElementById("mode-button2");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1100);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 800);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}
function showMB3() {
  let button = document.getElementById("mode-button3");
  button.style.display = "inline-block";
  button.style.transform = "translate(-50%, -50%) scale(0.86)";
  button.style.transition =
    "transform 1s ease-in-out, opacity 0.8s ease-in-out";
  button.style.opacity = "0";
  button.style.pointerEvents = "none";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 1500);
  setTimeout(() => {
    button.style.transform = "translate(-50%, -50%) scale(.95)"; // Scale back to normal
  }, 1000);
  setTimeout(() => {
    button.style.pointerEvents = "auto";
  }, 2000);
  setTimeout(() => {
    button.style.transition = "";
    button.style.transform = "";
  }, 2000);
}

// ? Adds keyboard clicking sound when buttons are clicked.
function playKBsound() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
}
document
  .querySelectorAll("#mode-button1, #mode-button2, #mode-button3")
  .forEach((button) => {
    button.addEventListener("click", () => {
      fadeOutModes();
      play(); // Play the sound effect when you click a button.
    });
  });

/*
function showWrapper() {
  let wrapper = document.querySelector(".wrapper");
  wrapper.style.display = "block"; // Make it visible
  setTimeout(() => {
    wrapper.style.opacity = "1"; // Fade it in smoothly
  }, 50); // Short delay to allow CSS transition
}

const paragraphs = [
  "know her of what new all then did way for at now been very his the our she my just other be time could over with that as he who when take like make and me was from can it go an think look them first in not had have",
  "but after this about most do other had to think would day than see out make from also now time have even very into the more my some are is be their there like work her they was just come it did any well new if take which back year",
  "then go get more have make way its us what any his you their is up out or and it be which very want first look will they for see all over he but also people in only them well your know other our how she say these so by",
  "had than so her as how on from think to did my time is do what make also look us want or just it you no up his take if day say well way very year use not they come most of that could go been she out into in",
  "you see new my make come do all just him take even back if than they not is then were or now there how use about these of first up out but can have most had very get way who other been in our would its good well could a",
  "he its from our are first a some these only when any go then with her very well them be we has the all people their do know not would just she could it one were new way back his by day say up if look so time give on",
  "me then because do you an up see it her which to use more even well know first that had most their but think did there could can some other have come look only so is of not way his if good no get them was will he my now",
  "can have first than what it over them with take who they give your do has no also us know an year two work in our most think so were how well been had on as me she will him was day then or we use any but want if",
  "what do very to this the no it how new time were when use her but because their with my them would go did back work was and of just think into she that people he all good other in an know who a us look me had any there",
  "their there this it or no how from for was on use has say work know after with him now other out who any the she most way be would well us is we you by even but up when her like if could of that because over they to",
  "way be will it have some them to come who only the just know so when at use was would on most good as which time two a then into my also he you had out are first an could for now see over him she did your or get",
  "the these him do me go she of also now this give we were more can or year not did make their people other look new at would about you what back for an well had have and than all want is they get some could if like know was",
  "there just people more year could come use over was no make me go had up is when like his on know as has it want all work about not first will for day but other at are an us this give from than a even did see most to",
  "year an also not at them will it for time give to did now look us you go any want about more had have so they on come with from is my because make than get his two has very only but some no most your which people all know",
  "can the are by way think no his will do get it these then with say because take from use to know at when about any them our see day be more have very after been this as she which did other their make my its all you on want",
];

const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.querySelector(".content button");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = (mistakes = isTyping = 0);

function loadParagraph() {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[ranIndex].split("").forEach((char) => {
    console.log(char);
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inpField.value = "";
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
*/
