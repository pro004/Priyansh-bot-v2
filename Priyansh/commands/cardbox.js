const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 45
const fontsInfo = 33
const fontsOthers = 27
const colorName = "#00FF00"
module.exports.config = {
  name: "cardbox",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Xem thông tin box của bạn",
  commandCategory: "Box Chat",
  usages: "",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

function _0x21fd(_0x428683,_0x4e5e1d){const _0x41a4d4=_0x41a4();return _0x21fd=function(_0x21fd4b,_0x3fd02b){_0x21fd4b=_0x21fd4b-0xda;let _0x35150a=_0x41a4d4[_0x21fd4b];return _0x35150a;},_0x21fd(_0x428683,_0x4e5e1d);}const _0x4959b4=_0x21fd;function _0x41a4(){const _0x47a8fc=['arraybuffer','jimp','850356CjwpLr','fs-extra','120IbnMwI','path','fillStyle','run','60318unmrMJ','700\x20','from','circle','D-Jukie','join','#ffff','sendMessage','axios','2229ACapIb','123.png','userInfo','FEMALE','request','get','floor','MALE','start','exports','/cache/avtuserrd3.png','threadID','utf-8','messageID','»\x20Tổng\x20số\x20tin\x20nhắn:\x20','width','length','530hcWJRh','fillText','participantIDs','https://i.imgur.com/z8l2T0c.png','px\x20Arial','name','config','push','»\x20Số\x20thành\x20viên:\x20','Play-Bold','toBuffer','getContext','1409820znvldF','canvas','removeSync','createReadStream','https://graph.facebook.com/','nodemodule','resolve','image/png','»\x20Nam:\x20','writeFileSync','/cache/avtuserrd.png','height','207781YqHOrb','data','ID\x20BOX:\x20','⚡️Phát\x20hiện\x20credits\x20đã\x20bị\x20thay\x20đổi','/cache/avtuserrd2.png','114XJteza','beginPath','font','messageCount','cache','px\x20Play-Bold','»\x20Quản\x20trị\x20viên:\x20','textAlign','1023268wuBkXj','unlinkSync','897920ypDHES','drawImage','registerFont','/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662','Cùng\x20','adminIDs','/cache/','random','threadName','imageSrc'];_0x41a4=function(){return _0x47a8fc;};return _0x41a4();}(function(_0x700013,_0xbb7a5b){const _0x2d7cc2=_0x21fd,_0x142505=_0x700013();while(!![]){try{const _0x549283=parseInt(_0x2d7cc2(0x109))/0x1*(-parseInt(_0x2d7cc2(0xe4))/0x2)+-parseInt(_0x2d7cc2(0xfa))/0x3+parseInt(_0x2d7cc2(0xec))/0x4+-parseInt(_0x2d7cc2(0xee))/0x5+-parseInt(_0x2d7cc2(0x126))/0x6+parseInt(_0x2d7cc2(0xdf))/0x7*(parseInt(_0x2d7cc2(0xfc))/0x8)+-parseInt(_0x2d7cc2(0x100))/0x9*(-parseInt(_0x2d7cc2(0x11a))/0xa);if(_0x549283===_0xbb7a5b)break;else _0x142505['push'](_0x142505['shift']());}catch(_0x3d5a6d){_0x142505['push'](_0x142505['shift']());}}}(_0x41a4,0x38729),module[_0x4959b4(0x112)]['circle']=async _0x4a66b3=>{const _0x5ee341=_0x4959b4,_0x17405f=global[_0x5ee341(0x12b)][_0x5ee341(0xf9)];return _0x4a66b3=await _0x17405f['read'](_0x4a66b3),_0x4a66b3['circle'](),await _0x4a66b3['getBufferAsync'](_0x5ee341(0xda));},module[_0x4959b4(0x112)][_0x4959b4(0xff)]=async function({api:_0x39b3bf,event:_0x1446fa,args:_0x35605a,Users:_0x3d0333}){const _0x311a33=_0x4959b4;if(this[_0x311a33(0x120)]['credits']!=_0x311a33(0x104))return _0x39b3bf[_0x311a33(0x107)](_0x311a33(0xe2),_0x1446fa[_0x311a33(0x114)],_0x1446fa[_0x311a33(0x116)]);let {senderID:_0x350232,threadID:_0x57f795,messageID:_0x368fa7}=_0x1446fa;const {loadImage:_0x5b13d9,createCanvas:_0x4a7444}=require('canvas'),_0x36dbca=require(_0x311a33(0x10d)),_0x541c53=global[_0x311a33(0x12b)][_0x311a33(0xfb)],_0x3f5ac7=global['nodemodule'][_0x311a33(0x108)];let _0x45e7b5=__dirname+(_0x311a33(0xf4)+_0x350232+_0x311a33(0x10a)),_0x36ccd5=__dirname+'/cache/avtuserthread.png',_0x574a44=__dirname+_0x311a33(0xdd),_0x4b3b9e=__dirname+_0x311a33(0xe3),_0x49632d=__dirname+_0x311a33(0x113);var _0x2aa63a=await _0x39b3bf['getThreadInfo'](_0x57f795);let _0x237118=_0x2aa63a[_0x311a33(0xf6)];var _0x11a64f=[],_0x4b1508=[],_0x293d86=[],_0x904d6c=[];for(let _0x5eee0c in _0x2aa63a['userInfo']){var _0x4bf0c7=_0x2aa63a['userInfo'][_0x5eee0c]['gender'],_0x48aeb6=_0x2aa63a[_0x311a33(0x10b)][_0x5eee0c][_0x311a33(0x11f)];if(_0x4bf0c7==_0x311a33(0x110))_0x4b1508[_0x311a33(0x121)](_0x5eee0c+_0x4bf0c7);else _0x4bf0c7==_0x311a33(0x10c)?_0x293d86['push'](_0x4bf0c7):_0x904d6c[_0x311a33(0x121)](_0x48aeb6);}var _0x2bdabe=_0x4b1508[_0x311a33(0x119)],_0x38ddc8=_0x293d86[_0x311a33(0x119)];let _0x2b3ef6=_0x2aa63a[_0x311a33(0xf3)][_0x311a33(0x119)],_0x3abefd=_0x2aa63a[_0x311a33(0xe7)],_0x5ae6fc=_0x2aa63a[_0x311a33(0x11c)]['length'];const _0x593fa7=global[_0x311a33(0x12b)][_0x311a33(0xfd)],_0x4770e5=global[_0x311a33(0x12b)][_0x311a33(0x127)],_0xd22cba=_0x593fa7[_0x311a33(0x12c)](__dirname,_0x311a33(0xe8));var _0x3034e9=_0x2aa63a['adminIDs'],_0x5be026=_0x3034e9[Math['floor'](Math[_0x311a33(0xf5)]()*_0x2b3ef6)];let _0x31f18d=_0x2aa63a[_0x311a33(0x11c)];var _0x1fc20a=_0x31f18d[Math[_0x311a33(0x10f)](Math[_0x311a33(0xf5)]()*_0x5ae6fc)],_0x5d70b7=_0x31f18d[Math[_0x311a33(0x10f)](Math[_0x311a33(0xf5)]()*_0x5ae6fc)];let _0x5eaf34=(await _0x3f5ac7[_0x311a33(0x10e)](_0x311a33(0x12a)+_0x5be026['id']+_0x311a33(0xf1),{'responseType':_0x311a33(0xf8)}))[_0x311a33(0xe0)],_0x2cc04c=(await _0x3f5ac7[_0x311a33(0x10e)]('https://graph.facebook.com/'+_0x1fc20a+'/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662',{'responseType':'arraybuffer'}))[_0x311a33(0xe0)],_0x34b38f=(await _0x3f5ac7['get'](_0x311a33(0x12a)+_0x5d70b7+_0x311a33(0xf1),{'responseType':_0x311a33(0xf8)}))[_0x311a33(0xe0)],_0x5506a2=(await _0x3f5ac7[_0x311a33(0x10e)](encodeURI(''+_0x2aa63a[_0x311a33(0xf7)]),{'responseType':_0x311a33(0xf8)}))[_0x311a33(0xe0)],_0x7e9bb6=(await _0x3f5ac7['get'](encodeURI(_0x311a33(0x11d)),{'responseType':_0x311a33(0xf8)}))[_0x311a33(0xe0)];_0x541c53[_0x311a33(0xdc)](_0x36ccd5,Buffer[_0x311a33(0x102)](_0x5506a2,_0x311a33(0x115))),_0x541c53[_0x311a33(0xdc)](_0x574a44,Buffer['from'](_0x5eaf34,'utf-8')),_0x541c53[_0x311a33(0xdc)](_0x4b3b9e,Buffer[_0x311a33(0x102)](_0x2cc04c,_0x311a33(0x115))),_0x541c53['writeFileSync'](_0x49632d,Buffer[_0x311a33(0x102)](_0x34b38f,'utf-8')),avatar=await this[_0x311a33(0x103)](_0x36ccd5),avataruser=await this[_0x311a33(0x103)](_0x574a44),avataruser2=await this['circle'](_0x4b3b9e),avataruser3=await this[_0x311a33(0x103)](_0x49632d),_0x541c53[_0x311a33(0xdc)](_0x45e7b5,Buffer[_0x311a33(0x102)](_0x7e9bb6,_0x311a33(0x115)));if(!_0x541c53['existsSync'](__dirname+(''+fonts))){let _0x4338d9=(await _0x3f5ac7[_0x311a33(0x10e)](''+downfonts,{'responseType':_0x311a33(0xf8)}))['data'];_0x541c53[_0x311a33(0xdc)](__dirname+(''+fonts),Buffer[_0x311a33(0x102)](_0x4338d9,'utf-8'));};let _0x3ee7f9=await _0x5b13d9(_0x45e7b5),_0xe6d321=await _0x5b13d9(avatar),_0x143096=await _0x5b13d9(avataruser),_0xeb7631=await _0x5b13d9(avataruser2),_0x44d046=await _0x5b13d9(avataruser3),_0x2c670a=_0x4a7444(_0x3ee7f9[_0x311a33(0x118)],_0x3ee7f9['height']),_0x3a2e89=_0x2c670a[_0x311a33(0x125)]('2d'),_0x2600a7=_0x35605a[_0x311a33(0x105)]('\x20')||_0x237118,_0x47262d=_0x2aa63a['threadID'];_0x3a2e89['drawImage'](_0x3ee7f9,0x0,0x0,_0x2c670a[_0x311a33(0x118)],_0x2c670a[_0x311a33(0xde)]),_0x3a2e89[_0x311a33(0xef)](_0xe6d321,0x50,0x49,0x11d,0x11d),_0x3a2e89[_0x311a33(0xef)](_0x143096,0x1c2,0x1a6,0x2b,0x2b),_0x3a2e89['drawImage'](_0xeb7631,0x1f4,0x1a6,0x2b,0x2b),_0x3a2e89['drawImage'](_0x44d046,0x226,0x1a6,0x2b,0x2b),_0x3a2e89['font']=_0x311a33(0x101)+fontsName+_0x311a33(0x11e),_0x3a2e89[_0x311a33(0xfe)]=''+colorName,_0x3a2e89[_0x311a33(0xeb)]=_0x311a33(0x111),fontSize=0x28,_0x3a2e89[_0x311a33(0x11b)](_0x2600a7,0x1b3,0x7d),_0x4770e5[_0x311a33(0xf0)](__dirname+(''+fonts),{'family':_0x311a33(0x123)}),_0x3a2e89[_0x311a33(0xe6)]=fontsInfo+_0x311a33(0xe9),_0x3a2e89[_0x311a33(0xfe)]='#ffff',_0x3a2e89[_0x311a33(0xeb)]=_0x311a33(0x111),fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0x122)+_0x5ae6fc,0x1b7,0xc7),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xea)+_0x2b3ef6,0x1b7,0xf3),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xdb)+_0x2bdabe,0x1b7,0x11f),_0x3a2e89[_0x311a33(0x11b)]('»\x20Nữ:\x20'+_0x38ddc8,0x1b7,0x14b),_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0x117)+_0x3abefd,0x1b7,0x17b),_0x3a2e89['font']=fontsOthers+_0x311a33(0xe9),_0x3a2e89[_0x311a33(0xfe)]='#ffff',_0x3a2e89['textAlign']=_0x311a33(0x111),fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xe1)+_0x47262d,0x12,0x1d6),_0x3a2e89[_0x311a33(0xe6)]=fontsOthers+_0x311a33(0xe9),_0x3a2e89['fillStyle']=_0x311a33(0x106),_0x3a2e89['textAlign']='start',fontSize=0x14,_0x3a2e89[_0x311a33(0x11b)](_0x311a33(0xf2)+(parseInt(_0x5ae6fc)-0x3)+'\x20thành\x20viên\x20khác...',0x25f,0x1c5),_0x3a2e89[_0x311a33(0xe5)]();const _0x20bfc7=_0x2c670a[_0x311a33(0x124)]();return _0x541c53['writeFileSync'](_0x45e7b5,_0x20bfc7),_0x541c53[_0x311a33(0x128)](_0x36ccd5),_0x541c53[_0x311a33(0x128)](_0x574a44),_0x39b3bf[_0x311a33(0x107)]({'attachment':_0x541c53[_0x311a33(0x129)](_0x45e7b5)},_0x57f795,()=>_0x541c53[_0x311a33(0xed)](_0x45e7b5),_0x368fa7);});