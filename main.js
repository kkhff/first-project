document.getElementById("checkButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const result = document.getElementById("result");

  if (name) {
    const jodoh = checkJodoh(name);
    result.innerHTML = `Jodoh mu iku: <strong>${jodoh}</strong>`;
  } else {
    result.innerHTML = '<span style="color: red;">Kandani lebokno kok!</span>';
  }
});

function checkJodoh(name) {
  const jodohs = [
    "mutia",
    "sokran",
    "ica mudo",
    "gisel",
    "perdi mejero",
    "bakdi",
    "lisa keropok",
    "aurel",
    "tamen",
  ];
  const index = Math.floor(Math.random() * jodohs.length);
  return jodohs[index];
}
