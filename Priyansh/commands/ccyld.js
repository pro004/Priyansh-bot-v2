const fs = require("fs");
module.exports.config = {
	name: "ccyld",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Are you sure love is here?",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ccyld")==0 || (event.body.indexOf("Ccyld")==0)) {
		var msg = {
				body: "Love, but what else ~",
				attachment: fs.createReadStream(__dirname + `/noprefix/ccyld.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}