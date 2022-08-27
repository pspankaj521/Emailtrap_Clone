// dropdown- to hide and unhide the sub row (Consider indexing from 0, at zero-heading row)
let dropdown1 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow1")) || false;

  let row = document.getElementById("subrow1");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow1", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow1", JSON.stringify(false));
  }
};

let dropdown2 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow2")) || false;

  let row = document.getElementById("subrow2");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow2", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow2", JSON.stringify(false));
  }
};

let dropdown3 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow3")) || false;

  let row = document.getElementById("subrow3");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow3", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow3", JSON.stringify(false));
  }
};

let dropdown4 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow4")) || false;

  let row = document.getElementById("subrow4");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow4", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow4", JSON.stringify(false));
  }
};

let dropdown5 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow5")) || false;

  let row = document.getElementById("subrow5");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow5", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow5", JSON.stringify(false));
  }
};

let dropdown6 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow6")) || false;

  let row = document.getElementById("subrow6");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow6", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow6", JSON.stringify(false));
  }
};

let dropdown7 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow7")) || false;

  let row = document.getElementById("subrow7");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow7", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow7", JSON.stringify(false));
  }
};

let dropdown8 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow8")) || false;

  let row = document.getElementById("subrow8");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow8", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow8", JSON.stringify(false));
  }
};

let dropdown9 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow9")) || false;

  let row = document.getElementById("subrow9");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow9", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow9", JSON.stringify(false));
  }
};

let dropdown10 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow10")) || false;

  let row = document.getElementById("subrow10");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow10", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow10", JSON.stringify(false));
  }
};

let dropdown11 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow11")) || false;

  let row = document.getElementById("subrow11");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow11", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow11", JSON.stringify(false));
  }
};

let dropdown12 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow12")) || false;

  let row = document.getElementById("subrow12");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow12", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow12", JSON.stringify(false));
  }
};

let dropdown13 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow13")) || false;

  let row = document.getElementById("subrow13");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow13", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow13", JSON.stringify(false));
  }
};

let dropdown14 = () => {
  let istrue = JSON.parse(localStorage.getItem("subrow14")) || false;

  let row = document.getElementById("subrow14");
  if (istrue == false) {
    // console.log("show");
    row.style.display = "grid";
    localStorage.setItem("subrow14", JSON.stringify(true));
  } else {
    // console.log("hide");
    row.style.display = "none";
    localStorage.setItem("subrow14", JSON.stringify(false));
  }
};





// Carousel JS
// Carousel data
let data = [
  {
    name: "DeveloperMitch",
    handle: "@mitchellfinlay",
    twitter: "https://twitter.com/joshuaanderton",
    decription:
      "Just signed up for @Mailtrap and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.",
    datelink: "https://twitter.com/gettingtoramen/status/1349410404217221120",
    date: "4:55 PM · Nov 7, 2020",
  },
  {
    name: "Alessandro Rodi",
    handle: "@coorasse",
    twitter: "https://twitter.com/coorasse",
    decription:
      "I love @Mailtrap. It removes all the asshole of configuring email servers in test environments. Great service! Is totally worth your money!",
    datelink: "https://twitter.com/coorasse/status/1318496092762374144",
    date: "3:45 PM · Oct 20, 2020",
  },
  {
    name: "Mr. Glass",
    handle: "@MisterGlass",
    twitter: "https://twitter.com/MisterGlass",
    decription:
      "Shout out to @Mailtrap, hands down the best way to handle mail sending in local/test environments.",
    datelink: "https://twitter.com/MisterGlass/status/1263571221020581888",
    date: "2:13 AM · May 22, 2020",
  },
  {
    name: "Rado Georgiev",
    handle: "@Rado_g",
    twitter: "https://twitter.com/Rado_g",
    decription:
      "One thing we started using recently is @Mailtrap for our dev & staging environments. We were previously either turning email sending entirely off for staging or running SES + whitelist. Turns out, having a fake SMTP mailbox is great and you can test better with it",
    datelink: "https://twitter.com/Rado_g/status/1214147850013163520",
    date: "5:02 PM · Jan 6, 2020",
  },
  {
    name: "Doug Black Jr",
    handle: "@dougblackjr",
    twitter: "https://twitter.com/dougblackjr",
    decription:
      "Can we all agree @Mailtrap is a gift to developers everywhere? It just works SO easily out of the box!!!!",
    datelink: "https://twitter.com/dougblackjr/status/1293257227042783232",
    date: "9:45 PM – Aug 11, 2020",
  },
  {
    name: "Joshua Anderton",
    handle: "@joshuaanderton",
    twitter: "https://twitter.com/joshuaanderton",
    decription:
      "Just signed up for @Mailtrap and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.",
    datelink: "https://twitter.com/dougblackjr/status/1293257227042783232",
    date: "7:38 PM – Jan 13, 2021",
  },
];

// forward moving images in crousel
let index = 0;
let forward = () => {
  if (index > data.length - 1) {
    index = 0;
  }

  console.log("forward");
  // console.log(index,data[index++])

  append(index);
  index++;
};

// backward moving images in crousel
let backward = () => {
  if (index===0) {
    index = data.length-1;
  }

  console.log("forward");
  // console.log(index,data[index++])

  append(index);
  index--;
};

// append finction for crousel data
let box = document.getElementById("box");
let append = (index) => {
  // console.log(index, data[index]);

  box.innerHTML = null;

  let div1 = document.createElement("div");

  let h3 = document.createElement("h3");
  h3.innerText = data[index].name;

  let a = document.createElement("a");
  a.href = data[index].twitter;
  a.innerText = data[index].handle;

  div1.append(h3, a);

  let p1 = document.createElement("p");
  p1.innerText = data[index].decription;

  let a1 = document.createElement("a");
  a1.href = data[index].datelink;
  a1.innerText = data[index].date;

  box.append(div1, p1, a1);
};
