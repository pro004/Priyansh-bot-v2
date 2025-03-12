const fs = require('fs');
const path = require('path');
const balanceFilePath = path.resolve(__dirname, 'bal.json');

module.exports.config = {
    name: "coin",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Check the amount of yourself or the person tagged",
    commandCategory: "economy",
    usages: "[Tag]",
    aliases: ["bal", "money", "coins"],
    cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "sotienbanthan": "Số tiền bạn đang có: %1$",
        "sotiennguoikhac": "Số tiền của %1 hiện đang có là: %2$"
    },
    "en": {
        "sotienbanthan": "Your current balance: %1$",
        "sotiennguoikhac": "%1's current balance: %2$."
    }
};


function readBalanceData() {
	if (!fs.existsSync(balanceFilePath)) {
	    fs.writeFileSync(balanceFilePath, JSON.stringify({}));
	}
	const data = fs.readFileSync(balanceFilePath);
	return JSON.parse(data);
      }
      
      function writeBalanceData(data) {
	fs.writeFileSync(balanceFilePath, JSON.stringify(data, null, 2));
      }
      
      module.exports.run = async function({ api, event, args, getText }) {
	const { threadID, messageID, senderID, mentions } = event;
	let balanceData = readBalanceData();
      
	if (!args[0]) {
	    const money = balanceData[senderID] ? balanceData[senderID].money : 0;
	    return api.sendMessage(getText("sotienbanthan", money), threadID, messageID);
	} else if (Object.keys(event.mentions).length == 1) {
		const mention = Object.keys(mentions)[0];
		const money = balanceData[mention] ? balanceData[mention].money : 0;
		return api.sendMessage({
		    body: getText("sotiennguoikhac", mentions[mention].replace(/\@/g, ""), money),
		    mentions: [{
		        tag: mentions[mention].replace(/\@/g, ""),
		        id: mention
		    }]
		}, threadID, messageID);
	      } else {
		return global.utils.throwError(this.config.name, threadID, messageID);
	      }
	  };