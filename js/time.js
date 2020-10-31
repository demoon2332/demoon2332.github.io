function clock() {
	var end = new Date('Nov 20, 2020 07:00:00');
	var now = new Date().getTime();
	remain = end - now
	var days = Math.floor(remain / (1000 * 60 * 60 * 24));
	var hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var mins = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
	var secs = Math.floor((remain % (1000 * 60)) / 1000);
	if(days<10)
		days = "0" + days;
	if(hours<10)
		hours = "0" + hours;
	if(mins<10)
		mins = "0" + mins;
	if(secs<10)
		secs = "0" + secs;
	document.getElementById("time").innerHTML = days+" days and "+ hours+" : "+mins+" : "+secs+"s  left";
	setTimeout("clock()",1000)
}
clock();

