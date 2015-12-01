# EVE-Online-API-How-to
A quick how-to for using eveonlinejs, an asynchronous EVE Online API client for node.js


Using the eveonlinejs library: https://github.com/MichaelErmer/eveonlinejs

    npm install eveonlinejs

Will show how to use basic functionality of the API key such as character name, wallet balance and account status. Current list of API library functions is hosted here: http://wiki.eve-id.net/APIv2_Page_Index.  EVE Online's API is by default an XML key.  The eveonlinejs library allows it to be used in node.js/JavaScript.

I have found this works better if you use a character specific API key rather than account wide, but it does work with account wide (just requires more work).  You manage your API key directly on their website here: https://community.eveonline.com/support/api-key/

Make sure to install the package.json, it requires express, handlebars, etc, on top of eveonlinejs.  Also, make sure to run the main.js since it has the routing for the various pages.  The eveapi.js was for my own testing.
