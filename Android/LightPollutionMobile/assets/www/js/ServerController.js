var ServerController = {
	hardcodeSendServerFuntion : function() {
		try {
//                	alert(Base64.encode("blackheart.cloudbees:codeforhongkong"));
                	var host = "http://blackheart.cloudbees.cloudant.com/lightpollution/";
                	var extention = "_design/light-app/_rewrite/spots/update";
                	
//                	var postCallback = function(data) {
//                		alert("here");
//                	}
                
                        var datajson = {
                            title:"Report Light Pollution Issue",
                            locationDesc:"Tsim Sha Tsui, Hong Kong",
                            locationLat:"22.2988123",
                            locationLng:"114.17217460000006",
                            description:"Description",
                            captureDate:"09/05/2013",
                            
                            captureTime:"-2209039800000",
                            uploader:"Anonymous"
                        };
                        
                    //$.ajax(host+extention, {controllerName: "AccountController", methodName: "getUserInformation"}, postCallback);
                    
                    $.ajax({
                        url: host+extention,
                        type: 'POST',
                        username: "blackheart.cloudbees",
                        password: "codeforhongkong",
                        beforeSend: function (xhr){
//                            req.setRequestHeader('Authorization',"blackheart.cloudbees:codeforhongkong");
                            xhr.setRequestHeader("Authorization","Basic "+Base64.encode("blackheart.cloudbees:codeforhongkong"));
//                             xhr.setRequestHeader("abc","Basic "+Base64.encode("blackheart.cloudbees:codeforhongkong"));
//                               headers:{, Method:"POST"},
                            
                        },
                        data: JSON.stringify(datajson),
//                        error: function(xhr) {
//                          alert('Ajax request 發生錯誤');
//                        },
                        success: function(response) {
//                            $('#msg_user_name').html(response);
//                            $('#msg_user_name').fadeIn();
//                            alert("success");
                            alert(response);
                        }
                      });
                } catch(e) {
                    alert(e);
                }
	}
}