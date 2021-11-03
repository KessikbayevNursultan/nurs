data2 = [
			["Travis Scott", "Beibit Korgan", "Kairosh"],
			["1996", "1990", "1985"],
			["Goosebumps", "Shok Kyzdar", "Bul sen emes"],
	]

for(var i = 0; i < 2; i++)	{
	parent_box = document.getElementById("third_info")
	card = document.getElementsByClassName("card")[0]
	card2 = card.cloneNode(true);
	parent_box.appendChild(card2)
}
card = document.getElementsByClassName("card")
for (var i = 0; i < card.length; i++) {
	card[i].setAttribute("onmouseover", "change_style("+i+")")
	header = card[i].getElementsByClassName("card_header")[0]
	header.innerHTML = data2[0][i]

	text = card[i].getElementsByClassName("card_text")[0]
	text.innerHTML = data2[1][i]

	card_img = card[i].getElementsByClassName("card_img")[0]
	card_img.innerHTML = data2[2][i]
}

function change_style(num) {
	card_img = card[num].getElementsByClassName("card_img")[0]
	card_img.style.opacity = 0.5;
	hidden_text = card_img.getElementsByClassName("card_hidden_text")[0]
		hidden_text.style.display = "block"
}

function change_style2(num) {
	card_img = card[num].getElementsByClassName("card_img")[0]
	card_img.style.opacity = 1;
	hidden_text = card_img.getElementsByClassName("card_hidden_text")[0]
		hidden_text.style.display = "none"
}

