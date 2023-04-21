const $ = document;

// updata of data with today data
const todayData = $.querySelector(".today-data");
todayData.innerHTML = new Date().toLocaleDateString("fa-IR");

// dynamic dropdown on header
const dropdownNavbarButton = $.querySelector(".dropdown-nav"),
  dropdownGroupList = $.querySelector(".dropdown-group");

dropdownNavbarButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (dropdownGroupList.style.visibility === "hidden") {
    dropdownGroupList.style.visibility = "visible";
  } else {
    dropdownGroupList.style.visibility = "hidden";
  }
});

// dynamic of top slider with 3 slide
let listOfBestFilm = [
  {
    id: 1,
    title: "ساخت ایران فصل 3 قسمت 8",
    description:
      "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    url: "img/sakht iran.jpg",
    data: "10/02/1402",
  },
  {
    id: 2,
    title: "8 سیاوش فصل 1 قسمت",
    description:
      "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    url: "img/siyavash.jpg",
    data: "12/08/1402",
  },
  {
    id: 3,
    title: "2 راز بقا فصل 1 قسمت",
    description:
      "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    url: "img/razbagha.jpg",
    data: "12/02/1402",
  },
];
const topSlider = $.querySelector(".top-slider");
let countOfSlider = 0;

topSlider.innerHTML = `
<div class="d-flex flex-row-reverse align-items-center slide1">
    <div class="top-left-slider col-8">
        <h6 class="pt-4" id="titleSlider">${listOfBestFilm[countOfSlider].title}</h6>
        <p class="m-0" id="descSlider">
        ${listOfBestFilm[countOfSlider].description}
        </p>
        <div class="data pb-4">
            <i class="fa fa-calendar"></i>
            <div class="">
                <p class="m-0">انتشار :</p>
                <p class="m-0" id="dataSlider">${listOfBestFilm[countOfSlider].data}</p>
            </div>
        </div>
    </div>
    <div class="top-right-slider col-4">
        <img src="${listOfBestFilm[countOfSlider].url}" alt="" class="w-100 h-100" id="imgSlider">
    </div>
</div>`;

const nextSlider = $.querySelector("#nextSlider");
const prevSlider = $.querySelector("#prevSlider");

function setSlideForSlidre(maincount) {
  topSlider.innerHTML = "";
  topSlider.insertAdjacentHTML(
    "beforeend",
    `
<div class="d-flex flex-row-reverse align-items-center slide1">
    <div class="top-left-slider col-8">
        <h6 class="pt-4" id="titleSlider">${listOfBestFilm[maincount].title}</h6>
        <p class="m-0" id="descSlider">
        ${listOfBestFilm[maincount].description}
        </p>
        <div class="data pb-4">
            <i class="fa fa-calendar"></i>
            <div class="">
                <p class="m-0">انتشار :</p>
                <p class="m-0" id="dataSlider">${listOfBestFilm[maincount].data}</p>
            </div>
        </div>
    </div>
    <div class="top-right-slider col-4">
        <img src="${listOfBestFilm[maincount].url}" alt="" class="w-100 h-100" id="imgSlider">
    </div>
</div>`
  );
}

nextSlider.addEventListener("click", () => {
  countOfSlider++;
  if (countOfSlider == listOfBestFilm.length) {
    setSlideForSlidre(0);
    countOfSlider = 0;
  }
  if (countOfSlider < listOfBestFilm.length) {
    setSlideForSlidre(countOfSlider);
  }
});
prevSlider.addEventListener("click", () => {
  countOfSlider--;
  if (countOfSlider === -1) {
    setSlideForSlidre(listOfBestFilm.length - 1);
    countOfSlider = 3;
  }
  if (countOfSlider < listOfBestFilm.length) {
    setSlideForSlidre(countOfSlider);
  }
});

// custom scroll bar prograss
const scrollPrograssLine = $.querySelector(".scroll-prograss");
document.addEventListener("scroll", () => {
  let scrollPercent =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
  scrollPrograssLine.style.width = scrollPercent.toFixed() + "%";
});

// typy writer efect for copy write text
const copyWriteText = $.querySelector("#copy-write");
const textForCopyWrite = "این قالب صرفا جهت نمونه کار هست";
let countForCopyWriteTextEfect = 0;

const typeCopyWriter = () => {
  if (countForCopyWriteTextEfect < textForCopyWrite.length) {
    copyWriteText.innerHTML += textForCopyWrite[countForCopyWriteTextEfect];
    countForCopyWriteTextEfect++;
  }
  setTimeout(() => {
    typeCopyWriter();
  }, 100);
};

typeCopyWriter();

// start search global on web with a input
let inputForSearchInWebBtn = $.querySelector(".search-bar-btn");

inputForSearchInWebBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var keyword = $.querySelector("#search-bar");
  let words = keyword.value;
  if(words == ""){
    return false;
  }
  var word = words,
    queue = [document.body],
    curr;
  while ((curr = queue.pop())) {
    if (!curr.textContent.toUpperCase().match(word.toUpperCase())) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
      switch (curr.childNodes[i].nodeType) {
        case Node.TEXT_NODE: // 3
          if (
            curr.childNodes[i].textContent
              .toUpperCase()
              .match(word.toUpperCase())
          ) {
            console.log("Found!");
            console.log(curr);
            curr.style.backgroundColor = "#FFFF00"
            curr.scrollIntoView();
          }
          break;
        case Node.ELEMENT_NODE: // 1
          queue.push(curr.childNodes[i]);
          break;
      }
    }
  }
});
