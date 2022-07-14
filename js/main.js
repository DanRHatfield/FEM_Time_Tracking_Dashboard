document.querySelector('#seldaily').addEventListener('click', daily1);
document.querySelector('#selweekly').addEventListener('click', weekly1);
document.querySelector('#selmonthly').addEventListener('click', monthly1);

document.querySelector('#work').addEventListener('mouseover', function(){document.querySelector('#work>.box').style.backgroundColor ='#34397b'});
document.querySelector('#work').addEventListener('mouseleave', function(){document.querySelector('#work>.box').style.backgroundColor =''});
document.querySelector('#exercise').addEventListener('mouseover', function(){document.querySelector('#exercise>.box').style.backgroundColor ='#34397b'});
document.querySelector('#exercise').addEventListener('mouseleave', function(){document.querySelector('#exercise>.box').style.backgroundColor =''});
document.querySelector('#play').addEventListener('mouseover', function(){document.querySelector('#play>.box').style.backgroundColor ='#34397b'});
document.querySelector('#play').addEventListener('mouseleave', function(){document.querySelector('#play>.box').style.backgroundColor =''});
document.querySelector('#social').addEventListener('mouseover', function(){document.querySelector('#social>.box').style.backgroundColor ='#34397b'});
document.querySelector('#social').addEventListener('mouseleave', function(){document.querySelector('#social>.box').style.backgroundColor =''});
document.querySelector('#study').addEventListener('mouseover', function(){document.querySelector('#study>.box').style.backgroundColor ='#34397b'});
document.querySelector('#study').addEventListener('mouseleave', function(){document.querySelector('#study>.box').style.backgroundColor =''});
document.querySelector('#selfcare').addEventListener('mouseover', function(){document.querySelector('#selfcare>.box').style.backgroundColor ='#34397b'});
document.querySelector('#selfcare').addEventListener('mouseleave', function(){document.querySelector('#selfcare>.box').style.backgroundColor =''});

// document.querySelectorAll('.ellipsis').addEventListener('mouseover',function(){document.querySelector('.box').style.backgroundColor =''});

var DailyList = ["DailyWork", "DailyExercise", "DailyPlay", "DailySocial", "DailyStudy", "DailySelfcare"]
var WeeklyList =["WeeklyWork", "WeeklyExercise", "WeeklyPlay", "WeeklySocial", "WeeklyStudy", "WeeklySelfcare"]
var MonthlyList =["MonthlyWork", "MonthlyExercise", "MonthlyPlay", "MonthlySocial", "MonthlyStudy", "MonthlySelfcare"]

function DailyButton(onoff) {
	DailyList.forEach(function(element) {
		document.getElementById(element).style.display=onoff
	});
}

function WeeklyButton(onoff) {
	WeeklyList.forEach(function(element) {
		document.getElementById(element).style.display=onoff
	});
}

function MonthlyButton(onoff) {
	MonthlyList.forEach(function(element) {
		document.getElementById(element).style.display=onoff
	});
}

function daily1() {	
	seldaily.classList.toggle("active");
	selweekly.classList.remove("active")	
	selmonthly.classList.remove("active");

	DailyButton("flex")
	WeeklyButton("none")
	MonthlyButton("none")
}

function weekly1() {	
	seldaily.classList.remove("active");
	selweekly.classList.toggle("active");	
	selmonthly.classList.remove("active");	

	DailyButton("none")
	WeeklyButton("flex")
	MonthlyButton("none")
}

function monthly1() {	
	seldaily.classList.remove("active");	
	selweekly.classList.remove("active");
	selmonthly.classList.toggle("active");	

	DailyButton("none")
	WeeklyButton("none")
	MonthlyButton("flex")
}
