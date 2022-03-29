window.onload = function(){
	changeRate();
}
function compute()
{
    var amount = document.getElementById("principal").value;
	var rateV = document.getElementById("rate").value;
	var years = Number(document.getElementById("years").value);
	var currentYear = new Date().getFullYear();
	var cYN = Number(currentYear)+years;
	var funRes = (amount * rateV) / 2;
	
    document.getElementById("res").innerHTML = "If you deposit <span style='background-color: #FFFF00'>"+amount+"</span><br> at an interest rate of "
												+"<span style='background-color: #FFFF00'>"+rateV+"</span>, <br>You will receive an amount of "
												+"<span style='background-color: #FFFF00'>"+funRes+"</span>, <br>in the year <span style='background-color: #FFFF00'>"+cYN+"</span>";
	
}
function changeRate(){
	var rate = document.getElementById('rate').value;
	document.getElementById('rangeValue').innerHTML = rate.toString()+'%';
}
