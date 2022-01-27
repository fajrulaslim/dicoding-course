var namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var date = new Date();
var hari = date.getDate();
var bulan = date.getMonth();
var tahun = date.getFullYear();
var tanggal  = hari + ' ' + namaBulan[bulan] + ' ' + tahun;
let image = Math.floor(Math.random() * 9); 

const commentary = {
   tanggal: null,
   image: null,
   nama: null,
   isikomentar: null,
};


let btnKomentar = document.getElementById('submit');
let formNama = document.getElementById('nama');
let formIsi = document.getElementById('isikomentar');
btnKomentar.addEventListener('click', function(e){
	if(formNama.value == '') {
		formNama.focus();

	} else if(formIsi.value == '') {
		formIsi.focus();

	} else {
		alert('Terima kasih telah berkomentar :)');
		// addChild(formNama.value, formIsi.value);

		const commentary = {
		   tanggal: tanggal,
		   image: image,
		   nama: formNama.value,
		   isikomentar: formIsi.value,
		};

		putHistory(commentary);
	   	renderHistory();


		formNama.value = '';
		formIsi.value = '';
	}
})

// let kolomKomentar = document.getElementById('isi-kolomkomentar');
// let tag_open_div1 = '<div class="card-comment mb-3">';
// let tag_open_div2 = '<div class="identitas mb-2">';
// let tag_close_div = '</div>';

// function addChild(nama, komentar) {
// 	let image = Math.floor(Math.random() * 9); 
// 	var newChild = tag_open_div1 + '<img src="image/avatar/avatar-0'+image+'.png">' + tag_open_div2 + '<p>' + nama + '</p><small>' + tanggal + '</small><p class="mb-2">' + komentar +'</p>' + tag_close_div + tag_close_div;
// 	kolomKomentar.insertAdjacentHTML('afterbegin', newChild);
// }