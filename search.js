document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const word = document.getElementById("searchWord").value;

  if (!word.trim()) {
    alert("Please enter a word to search.");
    return;
  }

  // fetch(`http://localhost:3000/api/definitions/?word=${(word)}`, {
  //     method: 'GET',
  // })
  fetch(
    `https://lab4-comp4537-lab4-619d9115f840.herokuapp.com/api/definitions/?word=${word}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.definition) {
        document.getElementById(
          "searchResult"
        ).textContent = `Definition of "${data.definition.word}": ${data.definition.definition}`;
      } else {
        document.getElementById("searchResult").textContent = data.message;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("searchResult").textContent =
        "An error occurred.";
    });
});
