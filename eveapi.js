var eveonlinejs = require('eveonlinejs')
// Set default parameters (useful for setting keyID and vCode)
eveonlinejs.setParams({
	
	/* 
	Full account API.  Need to specify characterID in the function parameters if you use this key.
	
	ex. hamster.fetch('char:AccountBalance', {characterID: 12345}, function (err, result){
	The  keyID and vCode will pass since they are set in .setParams	
	
	
	keyID: '4696048',
	vCode: '8eLSTkodue6ermd8P2o58Os4pTGpzY971NlLAd15Bh60rxA4iRUkjcVEalLytqmX'
  
  */
  
  /* character specific: Daniel Barcelon 	 
	keyID: '1020983',
	vCode: '8HNHqoltgfKEjZiIi2aln2zOtsu6vi4fpe7TpxhDWnX3RX9kJGruuMRpACNjreIK'
	
*/
	 
	/* character specific: Seksea	 */
	keyID: '1001423',
	vCode: 'hBXHcSIPTgFI8jjW7YozJhvZ0kLN5C6gmSzfig9LGmmUDBR92ZAsDDVrhI3XyIJ7'
	
	

})

//displays account status
eveonlinejs.fetch('account:AccountStatus', function(err, result){
	if(err) throw err
	
	//set variable to repsonse.logonminutes
	var logMinutes = result.logonMinutes
	//console.log(logMinutes);
	console.log("You've logged ", logMinutes, "minutes of play time.")
	
	var logHours = (logMinutes / 60);
	console.log("That is ", logHours, " hours of gameplay");

})


//displays character information

eveonlinejs.fetch('account:Characters', function(err, result){
	if(err) throw err
	
	for(var characterID in result.characters){
		//displays a big list of characters.  access individual items with a .parameter.  ex: .corporationName
		console.log("Your characters name is: ", result.characters[characterID].name)
		console.log("Your character ID is: ", result.characters[characterID].characterID);
	}
})

/*
//displays wallet balance
eveonlinejs.fetch('char:AccountBalance', function (err, result){
	if (err) throw err
	
		//sets variable to the  full result
		var walletresponse = result.accounts;   
		
		//Displays full result.  Allows you to see what it contains so you can pick the right object to use
		//console.log(walletresponse)		
		
		//then loop through for wallet balance and display 
		for(var accounts in walletresponse){
			console.log("Your current wallet balance: ", walletresponse[accounts].balance, " isk.")
		}
})
*/

//skill in training
eveonlinejs.fetch('char:SkillInTraining', function (err, result){
	if (err) throw err
	
		//sets variable to the  full result
		var skills = result;   	
		//Displays full result.  Allows you to see what it contains so you can pick the right object to use
		//console.log(skills);
		
		var trainingStart = result.trainingStartTime;
		console.log("Skill training started: ", trainingStart, " UTC.");
		
		var trainingEnd = result.trainingEndTime;
		console.log("Skill training ends: ", trainingEnd, "UTC.");
		

})



/*  KEEPS RUNNING ON SPECIFIED PORT


var http = require("http");
http.createServer(function(request, response) {  
  response.writeHead(200, {"Content-Type": "text/plain"});  
}).listen(3000);
console.log('Server is listening to http://localhost/ on port 3000. Ctrl + C to close.');

*/


