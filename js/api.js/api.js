    $.ajax({
        url: "https://api.projectoxford.ai/video/v1.0/trackface", 
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "XXXXXXXXXXXXXXXXXXXXXXX"); //replace the X's with your API key
        },
        type: "POST", //this is where you specify which HTTP method to use. Unsure which one? Refer to the API Doc!
        data: file, //Remember ealier we did some file checking and storing? This is where it goes. In Postman this was also called the "Body"
        processData: false //What this does is it can process the data into a String. We dont want this to happen, so we set it to false, as we want to send the photo itself.
    })
	
	var pageheader = $("#page-header")[0]; //note the [0], jQuery returns an object, so to get the html DOM object we need the first item in the object
	var pagecontainer = $("#page-container")[0]; 
	var imgSelector = $("#my-file-selector"); //You dont have to use [0], however this just means whenever you use the object you need to refer to it with [0].
	var refreshbtn = $("#refreshbtn"); 
	
	