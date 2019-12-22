var request = require('request'),
    cheerio = require('cheerio'),
    sleep = require('system-sleep');
var http = require('http');
var fs = require('fs');	
var date = new Date();
		
//https://www.acme.com/licensemaker/licensemaker.cgi?state=Ontario&text=KHIP+888&plate=1994

getLicenses();


function getLicenses() {
	
	//console.log(String.fromCharCode(65 + 0));//A
	//console.log(String.fromCharCode(48));	//0
	//console.log(String.fromCharCode(57));	//9
	var a, b, c, d, e, f=0;	
	var i=j=k=l=m=n=0;
				
	for (n=1; n<20000; n++) {		
		
							a = String.fromCharCode(65 + getRandomInt(0, 25));
							b = String.fromCharCode(65 + getRandomInt(0, 25));
							c = String.fromCharCode(65 + getRandomInt(0, 25));
							//x = String.fromCharCode(65 + getRandomInt(0, 25));
							d = String.fromCharCode(48 + getRandomInt(0, 9));
							e = String.fromCharCode(48 + getRandomInt(0, 9));
							f = String.fromCharCode(48 + getRandomInt(0, 9));
							
							console.log("start waiting");	
							sleep(4*1000); // sleep for 10 seconds
							//e.g. ABC 123
							DLBanners(a+b+c, d+e+f);
							//e.g. 123 ABC
							//DLBanners(d+e+f, a+b+c);
														
							console.log("Remaining: " + (20000 - n) + " ");							
						
	}
	

}

//generate random integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DLBanners(x, y) {

	var image_pref = 'https://www.acme.com/licensemaker/licensemaker.cgi?plate=1994&state=Ontario&text=';  //default - can't change
	var image_suff = 'KHIP+888'; //default - can't change
	var folder = 'plates/advanced/'; //destination folder
  
	var part1 = x;
	var part2 = y;
	var txt = part1 + '+' + part2;

	console.log(txt);

	request('https://www.acme.com/licensemaker/licensemaker.cgi?plate=1994&state=Ontario&text=' + txt, function (error, response, body) {
	  
		url = 'https://www.acme.com/licensemaker/';
		var $ = cheerio.load(body);
		var context = $('center div a img').attr('src');
		//console.log(context);
		request(url + context).pipe(fs.createWriteStream(folder + part1 + ' ' + part2 + '.jpg'));
	  
	});

}  //end function
