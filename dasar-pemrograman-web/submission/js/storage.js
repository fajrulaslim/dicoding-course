const CACHE_KEY = "comment_history";

function checkForStorage() {
   return typeof(Storage) !== "undefined";
}

function putHistory(data) {
   if (checkForStorage()) {
       let historyData = null;
       if (localStorage.getItem(CACHE_KEY) === null) {
           historyData = [];
       } else {
           historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
       }
 
       historyData.unshift(data);
 
       if (historyData.length > 5) {
           historyData.pop();
       }
 
       localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
   }
}

function showHistory() {
   if (checkForStorage()) {
       return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
   } else {
       return [];
   }
}

function renderHistory() {
   const commentData = showHistory();
   let commentList = document.querySelector("#isi-kolomkomentar"); 
 
   // selalu hapus konten HTML pada elemen commentList agar tidak menampilkan data ganda
   commentList.innerHTML = "";
 
   for (let comment of commentData) {

       var newChild = '<div class="card-comment mb-3"><img src="image/avatar/avatar-0'+comment.image+'.png"><div class="identitas mb-2"><p>' + comment.nama + '</p><small>' + comment.tanggal + '</small><p class="mb-2">' + comment.isikomentar +'</p></div></div>';
		commentList.insertAdjacentHTML('afterbegin', newChild);
   }
}

renderHistory();