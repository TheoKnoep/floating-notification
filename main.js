/**
 * Parse url
 */




if ( getNotificationTextFromUrl() ) {
	console.log( cleanText( getNotificationTextFromUrl() ) ); 
}


function getNotificationTextFromUrl() {
	let parsedURL = window.location.href.split('?notification=');  
	if (parsedURL.length === 1) {
		return false; 
	} 
	let notificationContent = parsedURL[1].split('?')[0]; 
	return notificationContent; 
}

function cleanText(string) {
	let nbspace = string.replaceAll('/%C2%A0/', ' '); 
	let space = nbspace.replaceAll('%20', ' '); 
	let agrave = space.replaceAll('%C3%A0', 'à'); 
	let ecute = agrave.replaceAll('%C3%A9', 'é'); 
	return ecute; 
}




