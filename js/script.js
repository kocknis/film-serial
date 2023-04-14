const $ = document;

// updata of data with today data
const todayData = $.querySelector(".today-data");
todayData.innerHTML = new Date().toLocaleDateString("fa-IR");


// dynamic dropdown on header 
const dropdownNavbarButton = $.querySelector(".dropdown-nav"),
      dropdownGroupList = $.querySelector(".dropdown-group");

dropdownNavbarButton.addEventListener("click", (event) => {
    event.preventDefault()
  if (dropdownGroupList.style.visibility === "hidden") {
    dropdownGroupList.style.visibility = "visible";
  } else {
    dropdownGroupList.style.visibility = "hidden";
  }
});
