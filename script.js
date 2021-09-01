///////////// Creating local storage instance for scores //////////

var localScores = localStorage.getItem("scoresData");
if (!localScores) {
  localStorage.setItem("scoresData", JSON.stringify([]));
}

/////////  Javascript for index.html file ///////////

let homePageBody = document.getElementById("homePage");

if (homePageBody) {
  homePageBody.onload = homePageOnLoad;
}

function homePageOnLoad() {
  let d1 = document.createElement("div");
  d1.setAttribute("class", "container");

  let d2 = document.createElement("div");
  d2.setAttribute("class", "row");

  let d3 = document.createElement("div");
  d3.setAttribute("class", "col-4");

  let d4 = document.createElement("div");
  d4.setAttribute("class", "col-4 index-column");

  let d6 = document.createElement("div");

  let p1 = document.createElement("p");
  p1.setAttribute("id", "index-para");
  p1.innerText = "Quick Quiz";
  d6.appendChild(p1);

  let a1 = document.createElement("a");
  a1.setAttribute("href", "game.html");
  a1.setAttribute("id", "play");
  a1.innerText = " Play ";
  d6.appendChild(a1);

  let a2 = document.createElement("a");
  a2.setAttribute("href", "highscores.html");
  a2.setAttribute("id", "highScores");
  a2.innerText = " High Scores ";
  d6.appendChild(a2);

  d4.appendChild(d6);

  let d5 = document.createElement("div");
  d5.setAttribute("class", "col-4");

  d2.append(d3, d4, d5);

  d1.appendChild(d2);
  homePageBody.prepend(d1);
}

/////////  Javascript for game.html file ///////////

var i = 0;
var questionNo = i + 1;
var score = 0;
var questionData = {};

let gamePageBody = document.getElementById("gamepage");

if (gamePageBody) {
  getDataAndLoadPage();
}

async function getDataAndLoadPage() {
  try {
    let response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
    );
    questionData = await response.json();
    gamePageOnLoad();
  } catch (err) {
    console.log(err);
  }
}

function gamePageOnLoad() {
  let dg1 = document.createElement("div");
  dg1.setAttribute("class", "container");
  dg1.setAttribute("id", "gamePageCont");

  let dg2 = document.createElement("div");
  dg2.setAttribute("id", "game-container");

  let dg3 = document.createElement("div");
  dg3.setAttribute("id", "game-head");

  let sg1 = document.createElement("span");
  sg1.setAttribute("id", "progressText");
  sg1.innerText = "Question " + questionNo + "/10";
  dg3.appendChild(sg1);

  let sg2 = document.createElement("span");
  sg2.innerText = "Score : " + score;
  dg3.appendChild(sg2);

  dg2.appendChild(dg3);

  let pg1 = document.createElement("p");
  pg1.innerHTML = questionData.results[i].question;

  dg2.appendChild(pg1);

  let dg4 = document.createElement("div");
  dg4.setAttribute("role", "group");
  dg4.setAttribute("class", "choice-text");
  dg4.setAttribute("id", "optionsList");

  let ip1 = document.createElement("input");
  ip1.setAttribute("type", "radio");
  ip1.setAttribute("class", "btn-check");
  ip1.setAttribute("name", "radioxxx");
  ip1.setAttribute("id", "radiozzz1");
  ip1.setAttribute("value", questionData.results[i].correct_answer);

  dg4.appendChild(ip1);

  let lbg1 = document.createElement("label");
  lbg1.setAttribute("class", "btn  btn-outline-success");
  lbg1.setAttribute("id", "bttn1");
  lbg1.setAttribute("for", "radiozzz1");

  lbg1.innerHTML =
    '<div class="optionName"> A </div><span class="optionText">' +
    questionData.results[i].correct_answer +
    "</span>";

  dg4.appendChild(lbg1);

  let ip2 = document.createElement("input");
  ip2.setAttribute("type", "radio");
  ip2.setAttribute("class", "btn-check");
  ip2.setAttribute("name", "radioxxx");
  ip2.setAttribute("id", "radiozzz2");
  ip2.setAttribute("value", questionData.results[i].incorrect_answers[0]);

  dg4.appendChild(ip2);

  let lbg2 = document.createElement("label");
  lbg2.setAttribute("class", "btn  btn-outline-success");
  lbg2.setAttribute("id", "bttn2");
  lbg2.setAttribute("for", "radiozzz2");

  lbg2.innerHTML =
    '<div class="optionName"> B </div><span class="optionText">' +
    questionData.results[i].incorrect_answers[0] +
    "</span>";

  dg4.appendChild(lbg2);

  let ip3 = document.createElement("input");
  ip3.setAttribute("type", "radio");
  ip3.setAttribute("class", "btn-check");
  ip3.setAttribute("name", "radioxxx");
  ip3.setAttribute("id", "radiozzz3");
  ip3.setAttribute("value", questionData.results[i].incorrect_answers[1]);

  dg4.appendChild(ip3);

  let lbg3 = document.createElement("label");
  lbg3.setAttribute("class", "btn  btn-outline-success");
  lbg3.setAttribute("id", "bttn3");
  lbg3.setAttribute("for", "radiozzz3");

  lbg3.innerHTML =
    '<div class="optionName"> C </div><span class="optionText">' +
    questionData.results[i].incorrect_answers[1] +
    "</span>";

  dg4.appendChild(lbg3);

  let ip4 = document.createElement("input");
  ip4.setAttribute("type", "radio");
  ip4.setAttribute("class", "btn-check");
  ip4.setAttribute("name", "radioxxx");
  ip4.setAttribute("id", "radiozzz4");
  ip4.setAttribute("value", questionData.results[i].incorrect_answers[2]);
  dg4.appendChild(ip4);

  let lbg4 = document.createElement("label");
  lbg4.setAttribute("class", "btn  btn-outline-success");
  lbg4.setAttribute("id", "bttn4");
  lbg4.setAttribute("for", "radiozzz4");

  lbg4.innerHTML =
    '<div class="optionName"> D </div><span class="optionText">' +
    questionData.results[i].incorrect_answers[2] +
    "</span>";

  dg4.appendChild(lbg4);

  dg2.appendChild(dg4);

  let dg5 = document.createElement("div");
  dg5.setAttribute("id", "game-next-div");

  let btg1 = document.createElement("button");
  btg1.setAttribute("class", "game-next-btn");
  btg1.setAttribute("id", "gameNextBtn");
  btg1.setAttribute("onclick", "printData()");
  btg1.innerText = "Next >>";

  dg5.appendChild(btg1);
  dg2.appendChild(dg5);

  dg1.appendChild(dg2);
  gamePageBody.prepend(dg1);
}

function printData() {
  let radioOpt = document.querySelector('input[name="radioxxx"]:checked');

  if (radioOpt) {
    if (radioOpt.value === questionData.results[i].correct_answer) {
      score = score + 10;
    }
  }
  let remEle = document.getElementById("gamePageCont");
  remEle.parentElement.removeChild(remEle);

  if (i !== 9) i++;
  else {
    var params = new URLSearchParams();
    params.append("urlParam", score);
    location.href = window.location.origin + "/end.html?" + params.toString();
  }

  questionNo = i + 1;

  gamePageOnLoad();
}

///////////// Javascript for end.html file ////////////

function enableSaveBtn() {
  let ipt = document.getElementById("username").value;
  let butt = document.getElementById("saveScoreBtn");
  if (ipt !== "") {
    butt.disabled = false;
  } else {
    butt.disabled = true;
  }
}

var endPageBody = document.getElementById("endPage");

if (endPageBody) {
  endPageBody.onload = endPageOnLoad;
}

function endPageOnLoad() {
  var ulParams = new URLSearchParams(window.location.search);
  var result = ulParams.get("urlParam");

  let de1 = document.createElement("div");
  de1.setAttribute("class", "container");
  de1.setAttribute("id", "endPageCont");

  let spe1 = document.createElement("span");
  spe1.setAttribute("id", "endScore");
  spe1.innerText = result;
  de1.appendChild(spe1);

  let ipe1 = document.createElement("input");
  ipe1.setAttribute("type", "text");
  ipe1.setAttribute("id", "username");
  ipe1.setAttribute("placeholder", "username");
  ipe1.setAttribute("onchange", "enableSaveBtn()");
  de1.appendChild(ipe1);

  let bte1 = document.createElement("button");
  bte1.setAttribute("id", "saveScoreBtn");
  bte1.setAttribute("class", "btn endPageBtn");
  bte1.setAttribute("disabled", "true");
  bte1.setAttribute("onclick", "saveScoreAndName(" + result + ")");
  bte1.innerHTML = "<b>Save</b>";
  de1.appendChild(bte1);

  let ae1 = document.createElement("a");
  ae1.setAttribute("href", "game.html");
  ae1.setAttribute("id", "playAgain");
  ae1.setAttribute("class", "btn endPageBtn");
  ae1.innerHTML = "<b>Play Again</b>";
  de1.appendChild(ae1);

  let ae2 = document.createElement("a");
  ae2.setAttribute("href", "index.html");
  ae2.setAttribute("id", "goHome");
  ae2.setAttribute("class", "btn endPageBtn");
  ae2.innerHTML = "<b>Go Home</b";
  de1.appendChild(ae2);

  endPageBody.prepend(de1);
}

function saveScoreAndName(res) {
  let uname = document.getElementById("username").value;

  let i = 0;
  let data = JSON.parse(localStorage.getItem("scoresData"));
  for (i; i < data.length; i++) {
    if (data[i][0] < res) {
      break;
    }
  }
  if (i === 0) {
    data.unshift([res, uname]);
  } else if (i === scoresList.length) {
    data.push([res, uname]);
  } else {
    data.splice(i, 0, [res, uname]);
  }

  localStorage.setItem("scoresData", JSON.stringify(data));
  location.href = window.location.origin + "/highscores.html";
}

/////////  Javascript for highScores.html file ///////////

let scoresList = JSON.parse(localStorage.getItem("scoresData"));

var scorePageBody = document.getElementById("highScoresPage");

if (scorePageBody) {
  scorePageBody.onload = scorePageOnLoad;
}

function scorePageOnLoad() {
  let dh1 = document.createElement("div");
  dh1.setAttribute("class", "container");
  dh1.setAttribute("id", "highScoPage");

  let h3h1 = document.createElement("h3");
  h3h1.innerText = "HighScores";
  dh1.appendChild(h3h1);

  let dh2 = document.createElement("div");
  dh2.setAttribute("id", "listOfNames");
  dh1.appendChild(dh2);

  let bh1 = document.createElement("a");
  bh1.setAttribute("class", "btn highScoBtn");
  bh1.setAttribute("href", "index.html");
  bh1.innerText = "Go Home";
  dh1.appendChild(bh1);

  scorePageBody.prepend(dh1);

  for (let arr of scoresList) {
    let element = document.getElementById("listOfNames");

    let spn = document.createElement("div");
    spn.setAttribute("class", "hghSco");
    spn.innerHTML = "<span>" + arr[1] + "</span><span>" + arr[0] + "</span>";

    element.appendChild(spn);
  }
}
