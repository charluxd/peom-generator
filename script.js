function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "ca80fb7d3o48t3c14460b13a3d83ca48";
  let prompt = `User instructions: Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poet who loves to write short poems. Follow the user instructions clearly to generate a poem 4 line poem in basic HTML, and separate each line with a <br/>. Do not include a title to the poem. Sign off the poem with 'SheCodes AI' inside an <em> element at the end of the poem, and not at the beginning of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> ⏳ Generating a poem about ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let peomForm = document.querySelector("#poem-form");
peomForm.addEventListener("submit", generatePoem);
