/**
 * Parse url
 */




if ( getNotificationTextFromUrl() ) {
	console.log( "jo", cleanText( getNotificationTextFromUrl() ) ); 
}


function getNotificationTextFromUrl() {
	let urlParams = new URLSearchParams(window.location.search); 
	let notificationContent = urlParams.get('notification');  
	return notificationContent; 
}

function cleanText(string) {
	let nbspace = string.replaceAll('/%C2%A0/', ' '); 
	let space = nbspace.replaceAll('%20', ' '); 
	let agrave = space.replaceAll('%C3%A0', 'à'); 
	let ecute = agrave.replaceAll('%C3%A9', 'é'); 
	return ecute; 
}




