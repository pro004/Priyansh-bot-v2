const fs = require("fs");
module.exports.config = {
	name: "bùm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Shoot away",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("boom")==0 || (event.body.indexOf("Boom")==0)) {
		var msg = {
				body: " Chiu Chiu! Have you won your heart yet?😉😋",
				attachment: fs.createReadStream(__dirname + `/noprefix/bắn.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}