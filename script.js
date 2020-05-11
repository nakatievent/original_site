'use strict';

// プロフィールのオン・オフ
const checkbox = document.getElementById('checkbox')
const table = document.querySelector('table');

table.style.display = "none";
checkbox.addEventListener('click', () => {
	if (table.style.display == "table") {
		// noneで非表示
		table.style.display = "none";
	} else {
		// tableで表示
		table.style.display = "table";
	}
});

// 好きな○○の画像のフェードイン
$(function () {
	$('#block1').fadeThis({ speed: 1000 }),
		$('#block2').fadeThis({ speed: 1250 }),
		$('#block3').fadeThis({ speed: 1500 });
});

// ポートフォリオのオン・オフ
ScrollReveal().reveal('.animated', {
	duration: 3500,
	scale: 1.0,
	reset: true
});

