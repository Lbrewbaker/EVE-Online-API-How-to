# EVE-Online-API-How-to
A quick how-to for using eveonlinejs, an asynchronous EVE Online API client for node.js


Using the eveonlinejs library: https://github.com/MichaelErmer/eveonlinejs

    npm install eveonlinejs

Will show how to use basic functionality of the API key such as character name, wallet balance and account status. Current list of API library functions is hosted here: http://wiki.eve-id.net/APIv2_Page_Index.  EVE Online's API is by default an XML key.  The eveonlinejs library allows it to be used in node.js/javascript.

I have found this works better if you use a character specific API key rather than account wide, but it does work with account wide (just requires more work).  You manage your API key directly on their website here: https://community.eveonline.com/support/api-key/


##Example
This example is from the library page: 

     // Print a list of skill groups
    eveonlinejs.fetch('eve:SkillTree', function (err, result) {
       if (err) throw err
       for (var groupID in result.skillGroups) {
         console.log(result.skillGroups[groupID].groupName)
       }
    })

The parameter 'eve:SkillTree' can be substituted depended on what category you need found here: http://wiki.eve-id.net/APIv2_Page_Index.  If you wanted wallet balance you would change it to:

    eveonlinejs.fetch('char:AccountBalance', function (err, result) {
        if (err) throw err
        
        //do other stuff with account balance here
    })
    
Also useful to set a variable to the result and log it so you can see what gets returned by the request so you can see what to work with:

    //shows what result is returned from the api call.
    var accountResult = result;
    console.log(result);
