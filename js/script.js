const $ = document

// updata of data with today data
const todayData = $.querySelector('.today-data')
todayData.innerHTML = new Date().toLocaleDateString('fa-IR')