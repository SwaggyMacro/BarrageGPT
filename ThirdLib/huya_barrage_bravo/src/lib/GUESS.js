var GUESS = {};
GUESS['GetGuessOptionReq'] = function() {
    var _0xcf479d = '4|0|2|3|1' ['split']('|'),
    _0x19f972 = 0x0;
    while ( !! []) {
        switch (_0xcf479d[_0x19f972++]) {
        case '0':
            this['lTid'] = 0x0;
            continue;
        case '1':
            this['lPid'] = 0x0;
            continue;
        case '2':
            this['lSid'] = 0x0;
            continue;
        case '3':
            this['lGuessId'] = 0x0;
            continue;
        case '4':
            this['tUserId'] = new HUYA['UserId']();
            continue;
        }
        break;
    }
};
GUESS['GetGuessOptionReq']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetGuessOptionReq']();
};
GUESS['GetGuessOptionReq']['prototype']['\x5fwrite'] = function(_0x52e788, _0x44d89a, _0x17be31) {
    _0x52e788['writeStruct'](_0x44d89a, _0x17be31);
};
GUESS['GetGuessOptionReq']['prototype']['\x5fread'] = function(_0x143d38, _0x23a9e5, _0x3a6148) {
    return _0x143d38['readStruct'](_0x23a9e5, !![], _0x3a6148);
};
GUESS['GetGuessOptionReq']['prototype']['writeTo'] = function(_0x3f9a36) {
    var _0x591fe1 = '2|4|3|0|1' ['split']('|'),
    _0x4378a8 = 0x0;
    while ( !! []) {
        switch (_0x591fe1[_0x4378a8++]) {
        case '0':
            _0x3f9a36['writeInt64'](0x3, this['lGuessId']);
            continue;
        case '1':
            _0x3f9a36['writeInt64'](0x4, this['lPid']);
            continue;
        case '2':
            _0x3f9a36['writeStruct'](0x0, this['tUserId']);
            continue;
        case '3':
            _0x3f9a36['writeInt64'](0x2, this['lSid']);
            continue;
        case '4':
            _0x3f9a36['writeInt64'](0x1, this['lTid']);
            continue;
        }
        break;
    }
};

GUESS['GetGuessOptionReq']['prototype']['readFrom'] = function(_0xa6a9e4) {
    var _0x698520 = '0|1|3|4|2' ['split']('|'),
    _0x43e9c1 = 0x0;
    while ( !! []) {
        switch (_0x698520[_0x43e9c1++]) {
        case '0':
            this['tUserId'] = _0xa6a9e4['readStruct'](0x0, ![], this['tUserId']);
            continue;
        case '1':
            this['lTid'] = _0xa6a9e4['readInt64'](0x1, ![], this['lTid']);
            continue;
        case '2':
            this['lPid'] = _0xa6a9e4['readInt64'](0x4, ![], this['lPid']);
            continue;
        case '3':
            this['lSid'] = _0xa6a9e4['readInt64'](0x2, ![], this['lSid']);
            continue;
        case '4':
            this['lGuessId'] = _0xa6a9e4['readInt64'](0x3, ![], this['lGuessId']);
            continue;
        }
        break;
    }
};
GUESS['GetGuessOptionRsp'] = function() {
    var _0x343f61 = '4|2|0|3|1' ['split']('|'),
    _0x4be261 = 0x0;
    while ( !! []) {
        switch (_0x343f61[_0x4be261++]) {
        case '0':
            this['iMaxUserSize'] = 0x0;
            continue;
        case '1':
            this['iOptionIndex'] = -0x1;
            continue;
        case '2':
            this['tInfo'] = new GUESS['GuessInfo']();
            continue;
        case '3':
            this['vOptionSize'] = new Taf['Vector'](new Taf['INT32']());
            continue;
        case '4':
            this['iRet'] = 0x0;
            continue;
        }
        break;
    }
};


GUESS['GetGuessOptionRsp']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetGuessOptionRsp']();
};
GUESS['GetGuessOptionRsp']['prototype']['\x5fwrite'] = function(_0x123a7c, _0x125d27, _0x1b3571) {
    _0x123a7c['writeStruct'](_0x125d27, _0x1b3571);
};
GUESS['GetGuessOptionRsp']['prototype']['\x5fread'] = function(_0x51742a, _0x2c8bcd, _0xdc3b08) {
    return _0x51742a['readStruct'](_0x2c8bcd, !![], _0xdc3b08);
};
GUESS['GetGuessOptionRsp']['prototype']['writeTo'] = function(_0x4877ba) {
    var _0x593d80 = '2\x7c0\x7c1\x7c3\x7c4' ['split']('\x7c'),
    _0x4a6d11 = 0x0;
    while ( !! []) {
        switch (_0x593d80[_0x4a6d11++]) {
        case '0':
            _0x4877ba['writeStruct'](0x1, this['tInfo']);
            continue;
        case '1':
            _0x4877ba['writeInt32'](0x2, this['iMaxUserSize']);
            continue;
        case '2':
            _0x4877ba['writeInt32'](0x0, this['iRet']);
            continue;
        case '3':
            _0x4877ba['writeVector'](0x3, this['vOptionSize']);
            continue;
        case '4':
            _0x4877ba['writeInt32'](0x4, this['iOptionIndex']);
            continue;
        }
        break;
    }
};
GUESS['GetGuessOptionRsp']['prototype']['readFrom'] = function(_0x433940) {
    var _0x329dac = '3\x7c4\x7c0\x7c2\x7c1' ['split']('\x7c'),
    _0x140de5 = 0x0;
    while ( !! []) {
        switch (_0x329dac[_0x140de5++]) {
        case '0':
            this['iMaxUserSize'] = _0x433940['readInt32'](0x2, ![], this['iMaxUserSize']);
            continue;
        case '1':
            this['iOptionIndex'] = _0x433940['readInt32'](0x4, ![], this['iOptionIndex']);
            continue;
        case '2':
            this['vOptionSize'] = _0x433940['readVector'](0x3, ![], this['vOptionSize']);
            continue;
        case '3':
            this['iRet'] = _0x433940['readInt32'](0x0, ![], this['iRet']);
            continue;
        case '4':
            this['tInfo'] = _0x433940['readStruct'](0x1, ![], this['tInfo']);
            continue;
        }
        break;
    }
};
GUESS['SelectItemReq'] = function() {
    var _0x2d6a5a = '0\x7c4\x7c2\x7c6\x7c1\x7c3\x7c5' ['split']('\x7c'),
    _0x3bce42 = 0x0;
    while ( !! []) {
        switch (_0x2d6a5a[_0x3bce42++]) {
        case '0':
            this['tUserId'] = new HUYA['UserId']();
            continue;
        case '1':
            this['lSid'] = 0x0;
            continue;
        case '2':
            this['iOptionIndex'] = 0x0;
            continue;
        case '3':
            this['lPid'] = 0x0;
            continue;
        case '4':
            this['lGuessId'] = 0x0;
            continue;
        case '5':
            this['sNickName'] = '';
            continue;
        case '6':
            this['lTid'] = 0x0;
            continue;
        }
        break;
    }
};
GUESS['SelectItemReq']['prototype']['\x5fclone'] = function() {
    return new GUESS['SelectItemReq']();
};
GUESS['SelectItemReq']['prototype']['\x5fwrite'] = function(_0x2f5a94, _0x2f6190, _0x2298bc) {
    _0x2f5a94['writeStruct'](_0x2f6190, _0x2298bc);
};
GUESS['SelectItemReq']['prototype']['\x5fread'] = function(_0x459899, _0x379535, _0x2b7217) {
    return _0x459899['readStruct'](_0x379535, !![], _0x2b7217);
};
GUESS['SelectItemReq']['prototype']['writeTo'] = function(_0x4103a1) {
    var _0x13bb61 = '4\x7c0\x7c1\x7c3\x7c5\x7c6\x7c2' ['split']('\x7c'),
    _0x536101 = 0x0;
    while ( !! []) {
        switch (_0x13bb61[_0x536101++]) {
        case '0':
            _0x4103a1['writeInt64'](0x1, this['lGuessId']);
            continue;
        case '1':
            _0x4103a1['writeInt32'](0x2, this['iOptionIndex']);
            continue;
        case '2':
            _0x4103a1['writeString'](0x6, this['sNickName']);
            continue;
        case '3':
            _0x4103a1['writeInt64'](0x3, this['lTid']);
            continue;
        case '4':
            _0x4103a1['writeStruct'](0x0, this['tUserId']);
            continue;
        case '5':
            _0x4103a1['writeInt64'](0x4, this['lSid']);
            continue;
        case '6':
            _0x4103a1['writeInt64'](0x5, this['lPid']);
            continue;
        }
        break;
    }
};
GUESS['SelectItemReq']['prototype']['readFrom'] = function(_0x500e45) {
    var _0x2c3836 = '5\x7c1\x7c0\x7c4\x7c6\x7c3\x7c2' ['split']('\x7c'),
    _0x303808 = 0x0;
    while ( !! []) {
        switch (_0x2c3836[_0x303808++]) {
        case '0':
            this['iOptionIndex'] = _0x500e45['readInt32'](0x2, ![], this['iOptionIndex']);
            continue;
        case '1':
            this['lGuessId'] = _0x500e45['readInt64'](0x1, ![], this['lGuessId']);
            continue;
        case '2':
            this['sNickName'] = _0x500e45['readString'](0x6, ![], this['sNickName']);
            continue;
        case '3':
            this['lPid'] = _0x500e45['readInt64'](0x5, ![], this['lPid']);
            continue;
        case '4':
            this['lTid'] = _0x500e45['readInt64'](0x3, ![], this['lTid']);
            continue;
        case '5':
            this['tUserId'] = _0x500e45['readStruct'](0x0, ![], this['tUserId']);
            continue;
        case '6':
            this['lSid'] = _0x500e45['readInt64'](0x4, ![], this['lSid']);
            continue;
        }
        break;
    }
};
GUESS['SelectItemRsp'] = function() {
    this['iRet'] = 0x0;
    this['lGuessId'] = 0x0;
};
GUESS['SelectItemRsp']['prototype']['\x5fclone'] = function() {
    return new GUESS['SelectItemRsp']();
};
GUESS['SelectItemRsp']['prototype']['\x5fwrite'] = function(_0x2d4f54, _0x2a3664, _0xe24c4a) {
    _0x2d4f54['writeStruct'](_0x2a3664, _0xe24c4a);
};
GUESS['SelectItemRsp']['prototype']['\x5fread'] = function(_0x4f303d, _0x2caa5e, _0x38baaf) {
    return _0x4f303d['readStruct'](_0x2caa5e, !![], _0x38baaf);
};
GUESS['SelectItemRsp']['prototype']['writeTo'] = function(_0x405a33) {
    _0x405a33['writeInt32'](0x0, this['iRet']);
    _0x405a33['writeInt64'](0x1, this['lGuessId']);
};
GUESS['SelectItemRsp']['prototype']['readFrom'] = function(_0x55fe55) {
    this['iRet'] = _0x55fe55['readInt32'](0x0, ![], this['iRet']);
    this['lGuessId'] = _0x55fe55['readInt64'](0x1, ![], this['lGuessId']);
};
GUESS['GetUserLotteryReq'] = function() {
    this['tUserId'] = new HUYA['UserId']();
    this['lGuessId'] = 0x0;
    this['lPid'] = 0x0;
};
GUESS['GetUserLotteryReq']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetUserLotteryReq']();
};
GUESS['GetUserLotteryReq']['prototype']['\x5fwrite'] = function(_0x1b0235, _0x2b6439, _0x2c5ab2) {
    _0x1b0235['writeStruct'](_0x2b6439, _0x2c5ab2);
};
GUESS['GetUserLotteryReq']['prototype']['\x5fread'] = function(_0x58c573, _0x373d6a, _0x30798b) {
    return _0x58c573['readStruct'](_0x373d6a, !![], _0x30798b);
};
GUESS['GetUserLotteryReq']['prototype']['writeTo'] = function(_0x15e4ad) {
    _0x15e4ad['writeStruct'](0x0, this['tUserId']);
    _0x15e4ad['writeInt64'](0x1, this['lGuessId']);
    _0x15e4ad['writeInt64'](0x2, this['lPid']);
};
GUESS['GetUserLotteryReq']['prototype']['readFrom'] = function(_0x24f050) {
    this['tUserId'] = _0x24f050['readStruct'](0x0, ![], this['tUserId']);
    this['lGuessId'] = _0x24f050['readInt64'](0x1, ![], this['lGuessId']);
    this['lPid'] = _0x24f050['readInt64'](0x2, ![], this['lPid']);
};
GUESS['GetUserLotteryRsp'] = function() {
    this['iRet'] = 0x0;
    this['vList'] = new Taf['Vector'](new GUESS['Lottery']());
    this['lGuessId'] = 0x0;
    this['lPid'] = 0x0;
};
GUESS['GetUserLotteryRsp']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetUserLotteryRsp']();
};
GUESS['GetUserLotteryRsp']['prototype']['\x5fwrite'] = function(_0x3790c4, _0x2f4485, _0x37e2b7) {
    _0x3790c4['writeStruct'](_0x2f4485, _0x37e2b7);
};
GUESS['GetUserLotteryRsp']['prototype']['\x5fread'] = function(_0x321500, _0x3aa779, _0x430ee7) {
    return _0x321500['readStruct'](_0x3aa779, !![], _0x430ee7);
};
GUESS['GetUserLotteryRsp']['prototype']['writeTo'] = function(_0x118f4c) {
    _0x118f4c['writeInt32'](0x0, this['iRet']);
    _0x118f4c['writeVector'](0x1, this['vList']);
    _0x118f4c['writeInt64'](0x2, this['lGuessId']);
    _0x118f4c['writeInt64'](0x3, this['lPid']);
};
GUESS['GetUserLotteryRsp']['prototype']['readFrom'] = function(_0x2d656d) {
    this['iRet'] = _0x2d656d['readInt32'](0x0, ![], this['iRet']);
    this['vList'] = _0x2d656d['readVector'](0x1, ![], this['vList']);
    this['lGuessId'] = _0x2d656d['readInt64'](0x2, ![], this['lGuessId']);
    this['lPid'] = _0x2d656d['readInt64'](0x3, ![], this['lPid']);
};
GUESS['DrawLotteryReq'] = function() {
    this['tUserId'] = new HUYA['UserId']();
    this['lGuessId'] = 0x0;
    this['iReward'] = 0x0;
};
GUESS['DrawLotteryReq']['prototype']['\x5fclone'] = function() {
    return new GUESS['DrawLotteryReq']();
};
GUESS['DrawLotteryReq']['prototype']['\x5fwrite'] = function(_0x326265, _0x546c46, _0x4bd092) {
    _0x326265['writeStruct'](_0x546c46, _0x4bd092);
};
GUESS['DrawLotteryReq']['prototype']['\x5fread'] = function(_0xbbda52, _0x3c6a56, _0x5ee015) {
    return _0xbbda52['readStruct'](_0x3c6a56, !![], _0x5ee015);
};
GUESS['DrawLotteryReq']['prototype']['writeTo'] = function(_0x34c406) {
    _0x34c406['writeStruct'](0x0, this['tUserId']);
    _0x34c406['writeInt64'](0x1, this['lGuessId']);
    _0x34c406['writeInt32'](0x2, this['iReward']);
};
GUESS['DrawLotteryReq']['prototype']['readFrom'] = function(_0x34a488) {
    this['tUserId'] = _0x34a488['readStruct'](0x0, ![], this['tUserId']);
    this['lGuessId'] = _0x34a488['readInt64'](0x1, ![], this['lGuessId']);
    this['iReward'] = _0x34a488['readInt32'](0x2, ![], this['iReward']);
};
GUESS['DrawLotteryRsp'] = function() {
    this['iRet'] = 0x0;
    this['lGuessId'] = 0x0;
};
GUESS['DrawLotteryRsp']['prototype']['\x5fclone'] = function() {
    return new GUESS['DrawLotteryRsp']();
};
GUESS['DrawLotteryRsp']['prototype']['\x5fwrite'] = function(_0x2a687e, _0x23f8ee, _0x4e1445) {
    _0x2a687e['writeStruct'](_0x23f8ee, _0x4e1445);
};
GUESS['DrawLotteryRsp']['prototype']['\x5fread'] = function(_0x367700, _0x26d9ae, _0xb9a388) {
    return _0x367700['readStruct'](_0x26d9ae, !![], _0xb9a388);
};
GUESS['DrawLotteryRsp']['prototype']['writeTo'] = function(_0x238712) {
    _0x238712['writeInt32'](0x0, this['iRet']);
    _0x238712['writeInt64'](0x1, this['lGuessId']);
};
GUESS['DrawLotteryRsp']['prototype']['readFrom'] = function(_0x108074) {
    this['iRet'] = _0x108074['readInt32'](0x0, ![], this['iRet']);
    this['lGuessId'] = _0x108074['readInt64'](0x1, ![], this['lGuessId']);
};
GUESS['GuessResult'] = function() {
    var _0x5adcc9 = '5\x7c4\x7c7\x7c8\x7c0\x7c2\x7c1\x7c6\x7c3' ['split']('\x7c'),
    _0x5a7602 = 0x0;
    while ( !! []) {
        switch (_0x5adcc9[_0x5a7602++]) {
        case '0':
            this['iStartTime'] = 0x0;
            continue;
        case '1':
            this['iOptionUsers'] = 0x0;
            continue;
        case '2':
            this['iOptionIndex'] = 0x0;
            continue;
        case '3':
            this['iAllUsers'] = 0x0;
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        case '5':
            this['lGuessId'] = 0x0;
            continue;
        case '6':
            this['iRewardUsers'] = 0x0;
            continue;
        case '7':
            this['iReward'] = 0x0;
            continue;
        case '8':
            this['iState'] = 0x0;
            continue;
        }
        break;
    }
};
GUESS['GuessResult']['prototype']['\x5fclone'] = function() {
    return new GUESS['GuessResult']();
};
GUESS['GuessResult']['prototype']['\x5fwrite'] = function(_0x4ece4f, _0x53c80a, _0x55bc9c) {
    _0x4ece4f['writeStruct'](_0x53c80a, _0x55bc9c);
};
GUESS['GuessResult']['prototype']['\x5fread'] = function(_0x1458ed, _0x4d83c3, _0x8e5fa6) {
    return _0x1458ed['readStruct'](_0x4d83c3, !![], _0x8e5fa6);
};
GUESS['GuessResult']['prototype']['writeTo'] = function(_0x20c6a3) {
    var _0x5894af = '1\x7c7\x7c5\x7c0\x7c8\x7c4\x7c3\x7c6\x7c2' ['split']('\x7c'),
    _0x2151d4 = 0x0;
    while ( !! []) {
        switch (_0x5894af[_0x2151d4++]) {
        case '0':
            _0x20c6a3['writeInt32'](0x3, this['iState']);
            continue;
        case '1':
            _0x20c6a3['writeInt64'](0x0, this['lGuessId']);
            continue;
        case '2':
            _0x20c6a3['writeInt32'](0x8, this['iAllUsers']);
            continue;
        case '3':
            _0x20c6a3['writeInt32'](0x6, this['iOptionUsers']);
            continue;
        case '4':
            _0x20c6a3['writeInt32'](0x5, this['iOptionIndex']);
            continue;
        case '5':
            _0x20c6a3['writeInt32'](0x2, this['iReward']);
            continue;
        case '6':
            _0x20c6a3['writeInt32'](0x7, this['iRewardUsers']);
            continue;
        case '7':
            _0x20c6a3['writeInt64'](0x1, this['lPid']);
            continue;
        case '8':
            _0x20c6a3['writeInt32'](0x4, this['iStartTime']);
            continue;
        }
        break;
    }
};
GUESS['GuessResult']['prototype']['readFrom'] = function(_0x2c0d7e) {
    var _0x908efc = '5\x7c8\x7c4\x7c3\x7c1\x7c0\x7c2\x7c7\x7c6' ['split']('\x7c'),
    _0x403b5d = 0x0;
    while ( !! []) {
        switch (_0x908efc[_0x403b5d++]) {
        case '0':
            this['iOptionIndex'] = _0x2c0d7e['readInt32'](0x5, ![], this['iOptionIndex']);
            continue;
        case '1':
            this['iStartTime'] = _0x2c0d7e['readInt32'](0x4, ![], this['iStartTime']);
            continue;
        case '2':
            this['iOptionUsers'] = _0x2c0d7e['readInt32'](0x6, ![], this['iOptionUsers']);
            continue;
        case '3':
            this['iState'] = _0x2c0d7e['readInt32'](0x3, ![], this['iState']);
            continue;
        case '4':
            this['iReward'] = _0x2c0d7e['readInt32'](0x2, ![], this['iReward']);
            continue;
        case '5':
            this['lGuessId'] = _0x2c0d7e['readInt64'](0x0, ![], this['lGuessId']);
            continue;
        case '6':
            this['iAllUsers'] = _0x2c0d7e['readInt32'](0x8, ![], this['iAllUsers']);
            continue;
        case '7':
            this['iRewardUsers'] = _0x2c0d7e['readInt32'](0x7, ![], this['iRewardUsers']);
            continue;
        case '8':
            this['lPid'] = _0x2c0d7e['readInt64'](0x1, ![], this['lPid']);
            continue;
        }
        break;
    }
};
GUESS['GuessInfo'] = function() {
    var _0x5acc72 = '4\x7c5\x7c0\x7c2\x7c7\x7c6\x7c1\x7c3' ['split']('\x7c'),
    _0xd6157a = 0x0;
    while ( !! []) {
        switch (_0x5acc72[_0xd6157a++]) {
        case '0':
            this['sGuessName'] = '';
            continue;
        case '1':
            this['iState'] = 0x0;
            continue;
        case '2':
            this['vOption'] = new Taf['Vector'](new Taf['STRING']());
            continue;
        case '3':
            this['iStartTime'] = 0x0;
            continue;
        case '4':
            this['lGuessId'] = 0x0;
            continue;
        case '5':
            this['lPid'] = 0x0;
            continue;
        case '6':
            this['iReward'] = 0x0;
            continue;
        case '7':
            this['iPayType'] = 0x0;
            continue;
        }
        break;
    }
};
GUESS['GuessInfo']['prototype']['\x5fclone'] = function() {
    return new GUESS['GuessInfo']();
};
GUESS['GuessInfo']['prototype']['\x5fwrite'] = function(_0x4b2e88, _0x91fafd, _0x516f94) {
    _0x4b2e88['writeStruct'](_0x91fafd, _0x516f94);
};
GUESS['GuessInfo']['prototype']['\x5fread'] = function(_0x351456, _0xdd3c5f, _0x1e95d3) {
    return _0x351456['readStruct'](_0xdd3c5f, !![], _0x1e95d3);
};
GUESS['GuessInfo']['prototype']['writeTo'] = function(_0x4772bf) {
    var _0x459b49 = '3\x7c0\x7c5\x7c4\x7c6\x7c2\x7c1\x7c7' ['split']('\x7c'),
    _0x2d00f9 = 0x0;
    while ( !! []) {
        switch (_0x459b49[_0x2d00f9++]) {
        case '0':
            _0x4772bf['writeInt64'](0x1, this['lPid']);
            continue;
        case '1':
            _0x4772bf['writeInt32'](0x6, this['iState']);
            continue;
        case '2':
            _0x4772bf['writeInt32'](0x5, this['iReward']);
            continue;
        case '3':
            _0x4772bf['writeInt64'](0x0, this['lGuessId']);
            continue;
        case '4':
            _0x4772bf['writeVector'](0x3, this['vOption']);
            continue;
        case '5':
            _0x4772bf['writeString'](0x2, this['sGuessName']);
            continue;
        case '6':
            _0x4772bf['writeInt32'](0x4, this['iPayType']);
            continue;
        case '7':
            _0x4772bf['writeInt32'](0x7, this['iStartTime']);
            continue;
        }
        break;
    }
};
GUESS['GuessInfo']['prototype']['readFrom'] = function(_0x170fe4) {
    var _0x4e0fba = '1\x7c5\x7c4\x7c0\x7c6\x7c2\x7c7\x7c3' ['split']('\x7c'),
    _0x3cbead = 0x0;
    while ( !! []) {
        switch (_0x4e0fba[_0x3cbead++]) {
        case '0':
            this['vOption'] = _0x170fe4['readVector'](0x3, ![], this['vOption']);
            continue;
        case '1':
            this['lGuessId'] = _0x170fe4['readInt64'](0x0, ![], this['lGuessId']);
            continue;
        case '2':
            this['iReward'] = _0x170fe4['readInt32'](0x5, ![], this['iReward']);
            continue;
        case '3':
            this['iStartTime'] = _0x170fe4['readInt32'](0x7, ![], this['iStartTime']);
            continue;
        case '4':
            this['sGuessName'] = _0x170fe4['readString'](0x2, ![], this['sGuessName']);
            continue;
        case '5':
            this['lPid'] = _0x170fe4['readInt64'](0x1, ![], this['lPid']);
            continue;
        case '6':
            this['iPayType'] = _0x170fe4['readInt32'](0x4, ![], this['iPayType']);
            continue;
        case '7':
            this['iState'] = _0x170fe4['readInt32'](0x6, ![], this['iState']);
            continue;
        }
        break;
    }
};
GUESS['Lottery'] = function() {
    var _0x11ab39 = '5\x7c1\x7c2\x7c6\x7c0\x7c3\x7c4' ['split']('\x7c'),
    _0x6b4a95 = 0x0;
    while ( !! []) {
        switch (_0x11ab39[_0x6b4a95++]) {
        case '0':
            this['iDrawedFlag'] = 0x0;
            continue;
        case '1':
            this['lUid'] = 0x0;
            continue;
        case '2':
            this['iTime'] = 0x0;
            continue;
        case '3':
            this['iRewardType'] = 0x0;
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        case '5':
            this['lGuessId'] = 0x0;
            continue;
        case '6':
            this['iReward'] = 0x0;
            continue;
        }
        break;
    }
};
GUESS['Lottery']['prototype']['\x5fclone'] = function() {
    return new GUESS['Lottery']();
};
GUESS['Lottery']['prototype']['\x5fwrite'] = function(_0x139374, _0x4f1529, _0x88c965) {
    _0x139374['writeStruct'](_0x4f1529, _0x88c965);
};
GUESS['Lottery']['prototype']['\x5fread'] = function(_0x2f10ee, _0x3b3f04, _0x32009a) {
    return _0x2f10ee['readStruct'](_0x3b3f04, !![], _0x32009a);
};
GUESS['Lottery']['prototype']['writeTo'] = function(_0x2f0bc8) {
    var _0x3fa27c = '4\x7c3\x7c0\x7c5\x7c2\x7c1\x7c6' ['split']('\x7c'),
    _0x6617de = 0x0;
    while ( !! []) {
        switch (_0x3fa27c[_0x6617de++]) {
        case '0':
            _0x2f0bc8['writeInt32'](0x2, this['iTime']);
            continue;
        case '1':
            _0x2f0bc8['writeInt32'](0x5, this['iRewardType']);
            continue;
        case '2':
            _0x2f0bc8['writeInt32'](0x4, this['iDrawedFlag']);
            continue;
        case '3':
            _0x2f0bc8['writeInt64'](0x1, this['lUid']);
            continue;
        case '4':
            _0x2f0bc8['writeInt64'](0x0, this['lGuessId']);
            continue;
        case '5':
            _0x2f0bc8['writeInt32'](0x3, this['iReward']);
            continue;
        case '6':
            _0x2f0bc8['writeInt64'](0x6, this['lPid']);
            continue;
        }
        break;
    }
};
GUESS['Lottery']['prototype']['readFrom'] = function(_0x297030) {
    var _0x2bd027 = '3\x7c1\x7c0\x7c2\x7c6\x7c4\x7c5' ['split']('\x7c'),
    _0x3b2ee4 = 0x0;
    while ( !! []) {
        switch (_0x2bd027[_0x3b2ee4++]) {
        case '0':
            this['iTime'] = _0x297030['readInt32'](0x2, ![], this['iTime']);
            continue;
        case '1':
            this['lUid'] = _0x297030['readInt64'](0x1, ![], this['lUid']);
            continue;
        case '2':
            this['iReward'] = _0x297030['readInt32'](0x3, ![], this['iReward']);
            continue;
        case '3':
            this['lGuessId'] = _0x297030['readInt64'](0x0, ![], this['lGuessId']);
            continue;
        case '4':
            this['iRewardType'] = _0x297030['readInt32'](0x5, ![], this['iRewardType']);
            continue;
        case '5':
            this['lPid'] = _0x297030['readInt64'](0x6, ![], this['lPid']);
            continue;
        case '6':
            this['iDrawedFlag'] = _0x297030['readInt32'](0x4, ![], this['iDrawedFlag']);
            continue;
        }
        break;
    }
};
GUESS['GetDragonReq'] = function() {
    this['iDragonId'] = 0x0;
    this['iDragonType'] = 0x0;
    this['lPid'] = 0x0;
};
GUESS['GetDragonReq']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetDragonReq']();
};
GUESS['GetDragonReq']['prototype']['\x5fwrite'] = function(_0x34f042, _0x435fc1, _0x1b5b1d) {
    _0x34f042['writeStruct'](_0x435fc1, _0x1b5b1d);
};
GUESS['GetDragonReq']['prototype']['\x5fread'] = function(_0xf483f, _0x5c9c2a, _0x53be6b) {
    return _0xf483f['readStruct'](_0x5c9c2a, !![], _0x53be6b);
};
GUESS['GetDragonReq']['prototype']['writeTo'] = function(_0x5b8e58) {
    _0x5b8e58['writeInt32'](0x0, this['iDragonId']);
    _0x5b8e58['writeInt32'](0x1, this['iDragonType']);
    _0x5b8e58['writeInt64'](0x2, this['lPid']);
};
GUESS['GetDragonReq']['prototype']['readFrom'] = function(_0x8283fd) {
    this['iDragonId'] = _0x8283fd['readInt32'](0x0, ![], this['iDragonId']);
    this['iDragonType'] = _0x8283fd['readInt32'](0x1, ![], this['iDragonType']);
    this['lPid'] = _0x8283fd['readInt64'](0x2, ![], this['lPid']);
};
GUESS['GetDragonRsp'] = function() {
    var _0x4eee7f = '0\x7c2\x7c4\x7c3\x7c1' ['split']('\x7c'),
    _0x14078a = 0x0;
    while ( !! []) {
        switch (_0x4eee7f[_0x14078a++]) {
        case '0':
            this['iRet'] = 0x0;
            continue;
        case '1':
            this['iRemainTime'] = 0x0;
            continue;
        case '2':
            this['iDragonId'] = 0x0;
            continue;
        case '3':
            this['iStatus'] = 0x0;
            continue;
        case '4':
            this['iDragonType'] = 0x0;
            continue;
        }
        break;
    }
};
GUESS['GetDragonRsp']['prototype']['\x5fclone'] = function() {
    return new GUESS['GetDragonRsp']();
};
GUESS['GetDragonRsp']['prototype']['\x5fwrite'] = function(_0x140a6a, _0x2dc246, _0x218476) {
    _0x140a6a['writeStruct'](_0x2dc246, _0x218476);
};
GUESS['GetDragonRsp']['prototype']['\x5fread'] = function(_0x29a474, _0x373989, _0x1045f1) {
    return _0x29a474['readStruct'](_0x373989, !![], _0x1045f1);
};
GUESS['GetDragonRsp']['prototype']['writeTo'] = function(_0x374e05) {
    var _0x4d49e0 = '3\x7c2\x7c1\x7c0\x7c4' ['split']('\x7c'),
    _0x3aa9b7 = 0x0;
    while ( !! []) {
        switch (_0x4d49e0[_0x3aa9b7++]) {
        case '0':
            _0x374e05['writeInt32'](0x3, this['iStatus']);
            continue;
        case '1':
            _0x374e05['writeInt32'](0x2, this['iDragonType']);
            continue;
        case '2':
            _0x374e05['writeInt32'](0x1, this['iDragonId']);
            continue;
        case '3':
            _0x374e05['writeInt32'](0x0, this['iRet']);
            continue;
        case '4':
            _0x374e05['writeInt32'](0x4, this['iRemainTime']);
            continue;
        }
        break;
    }
};
GUESS['GetDragonRsp']['prototype']['readFrom'] = function(_0x3dcd20) {
    var _0x37324a = '2\x7c3\x7c4\x7c1\x7c0' ['split']('\x7c'),
    _0x5a23a0 = 0x0;
    while ( !! []) {
        switch (_0x37324a[_0x5a23a0++]) {
        case '0':
            this['iRemainTime'] = _0x3dcd20['readInt32'](0x4, ![], this['iRemainTime']);
            continue;
        case '1':
            this['iStatus'] = _0x3dcd20['readInt32'](0x3, ![], this['iStatus']);
            continue;
        case '2':
            this['iRet'] = _0x3dcd20['readInt32'](0x0, ![], this['iRet']);
            continue;
        case '3':
            this['iDragonId'] = _0x3dcd20['readInt32'](0x1, ![], this['iDragonId']);
            continue;
        case '4':
            this['iDragonType'] = _0x3dcd20['readInt32'](0x2, ![], this['iDragonType']);
            continue;
        }
        break;
    }
};
var QAGuessWatchLive = {};
QAGuessWatchLive['QAGuessInfoPanel'] = function() {
    var _0x52ba1a = '7\x7c1\x7c4\x7c3\x7c6\x7c2\x7c5\x7c0' ['split']('\x7c'),
    _0x30faa4 = 0x0;
    while ( !! []) {
        switch (_0x52ba1a[_0x30faa4++]) {
        case '0':
            this['sOtherRewardUrl'] = '';
            continue;
        case '1':
            this['lPid'] = 0x0;
            continue;
        case '2':
            this['sOtherReward'] = '';
            continue;
        case '3':
            this['iQTime'] = 0x0;
            continue;
        case '4':
            this['iStatus'] = 0x0;
            continue;
        case '5':
            this['iOtherRewardCount'] = 0x0;
            continue;
        case '6':
            this['iRewardCount'] = 0x0;
            continue;
        case '7':
            this['lGuessId'] = 0x0;
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAGuessInfoPanel']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAGuessInfoPanel']();
};
QAGuessWatchLive['QAGuessInfoPanel']['prototype']['\x5fwrite'] = function(_0x3a2768, _0xa2c9b0, _0x1e5bb5) {
    _0x3a2768['writeStruct'](_0xa2c9b0, _0x1e5bb5);
};
QAGuessWatchLive['QAGuessInfoPanel']['prototype']['\x5fread'] = function(_0x511b8a, _0x570d03, _0x38fd9c) {
    return _0x511b8a['readStruct'](_0x570d03, !![], _0x38fd9c);
};
QAGuessWatchLive['QAGuessInfoPanel']['prototype']['writeTo'] = function(_0x4bfc29) {
    var _0x50330a = '2\x7c0\x7c3\x7c4\x7c7\x7c6\x7c5\x7c1' ['split']('\x7c'),
    _0xadbf = 0x0;
    while ( !! []) {
        switch (_0x50330a[_0xadbf++]) {
        case '0':
            _0x4bfc29['writeInt64'](0x1, this['lPid']);
            continue;
        case '1':
            _0x4bfc29['writeString'](0x7, this['sOtherRewardUrl']);
            continue;
        case '2':
            _0x4bfc29['writeInt64'](0x0, this['lGuessId']);
            continue;
        case '3':
            _0x4bfc29['writeInt32'](0x2, this['iStatus']);
            continue;
        case '4':
            _0x4bfc29['writeInt32'](0x3, this['iQTime']);
            continue;
        case '5':
            _0x4bfc29['writeInt32'](0x6, this['iOtherRewardCount']);
            continue;
        case '6':
            _0x4bfc29['writeString'](0x5, this['sOtherReward']);
            continue;
        case '7':
            _0x4bfc29['writeInt32'](0x4, this['iRewardCount']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAGuessInfoPanel']['prototype']['readFrom'] = function(_0x263b42) {
    var _0x2650ab = '4\x7c2\x7c6\x7c0\x7c5\x7c1\x7c7\x7c3' ['split']('\x7c'),
    _0x2dd34f = 0x0;
    while ( !! []) {
        switch (_0x2650ab[_0x2dd34f++]) {
        case '0':
            this['iQTime'] = _0x263b42['readInt32'](0x3, ![], this['iQTime']);
            continue;
        case '1':
            this['sOtherReward'] = _0x263b42['readString'](0x5, ![], this['sOtherReward']);
            continue;
        case '2':
            this['lPid'] = _0x263b42['readInt64'](0x1, ![], this['lPid']);
            continue;
        case '3':
            this['sOtherRewardUrl'] = _0x263b42['readString'](0x7, ![], this['sOtherRewardUrl']);
            continue;
        case '4':
            this['lGuessId'] = _0x263b42['readInt64'](0x0, ![], this['lGuessId']);
            continue;
        case '5':
            this['iRewardCount'] = _0x263b42['readInt32'](0x4, ![], this['iRewardCount']);
            continue;
        case '6':
            this['iStatus'] = _0x263b42['readInt32'](0x2, ![], this['iStatus']);
            continue;
        case '7':
            this['iOtherRewardCount'] = _0x263b42['readInt32'](0x6, ![], this['iOtherRewardCount']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAGuessGetUserPanelReq'] = function() {
    this['lPid'] = 0x0;
    this['lUid'] = 0x0;
};
QAGuessWatchLive['QAGuessGetUserPanelReq']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAGuessGetUserPanelReq']();
};
QAGuessWatchLive['QAGuessGetUserPanelReq']['prototype']['\x5fwrite'] = function(_0xf86403, _0x5a066f, _0x57725a) {
    _0xf86403['writeStruct'](_0x5a066f, _0x57725a);
};
QAGuessWatchLive['QAGuessGetUserPanelReq']['prototype']['\x5fread'] = function(_0x31eab8, _0x33a778, _0x5b2a93) {
    return _0x31eab8['readStruct'](_0x33a778, !![], _0x5b2a93);
};
QAGuessWatchLive['QAGuessGetUserPanelReq']['prototype']['writeTo'] = function(_0x58c9a7) {
    _0x58c9a7['writeInt64'](0x0, this['lPid']);
    _0x58c9a7['writeInt64'](0x1, this['lUid']);
};
QAGuessWatchLive['QAGuessGetUserPanelReq']['prototype']['readFrom'] = function(_0x2c35d8) {
    this['lPid'] = _0x2c35d8['readInt64'](0x0, ![], this['lPid']);
    this['lUid'] = _0x2c35d8['readInt64'](0x1, ![], this['lUid']);
};
QAGuessWatchLive['QAGuessGetUserPanelRsp'] = function() {
    this['GuessInfo'] = new QAGuessWatchLive['QAGuessInfoPanel']();
    this['UserInfo'] = new QAGuessWatchLive['QAUserInfoPanel']();
    this['GetRewardList'] = new QAGuessWatchLive['QAGetRewardListPanel']();
};
QAGuessWatchLive['QAGuessGetUserPanelRsp']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAGuessGetUserPanelRsp']();
};
QAGuessWatchLive['QAGuessGetUserPanelRsp']['prototype']['\x5fwrite'] = function(_0x4568e0, _0x97abc9, _0xf9d0af) {
    _0x4568e0['writeStruct'](_0x97abc9, _0xf9d0af);
};
QAGuessWatchLive['QAGuessGetUserPanelRsp']['prototype']['\x5fread'] = function(_0x4d3775, _0x55cfa4, _0x3170c3) {
    return _0x4d3775['readStruct'](_0x55cfa4, !![], _0x3170c3);
};
QAGuessWatchLive['QAGuessGetUserPanelRsp']['prototype']['writeTo'] = function(_0x392eea) {
    _0x392eea['writeStruct'](0x0, this['GuessInfo']);
    _0x392eea['writeStruct'](0x1, this['UserInfo']);
    _0x392eea['writeStruct'](0x2, this['GetRewardList']);
};
QAGuessWatchLive['QAGuessGetUserPanelRsp']['prototype']['readFrom'] = function(_0x4b14aa) {
    this['GuessInfo'] = _0x4b14aa['readStruct'](0x0, ![], this['GuessInfo']);
    this['UserInfo'] = _0x4b14aa['readStruct'](0x1, ![], this['UserInfo']);
    this['GetRewardList'] = _0x4b14aa['readStruct'](0x2, ![], this['GetRewardList']);
};
QAGuessWatchLive['QAUserInfoPanel'] = function() {
    var _0x29e677 = '3\x7c1\x7c0\x7c2\x7c4' ['split']('\x7c'),
    _0x5a82bd = 0x0;
    while ( !! []) {
        switch (_0x29e677[_0x5a82bd++]) {
        case '0':
            this['sMedalUrl'] = '';
            continue;
        case '1':
            this['lUid'] = 0x0;
            continue;
        case '2':
            this['iExp'] = 0x0;
            continue;
        case '3':
            this['lPid'] = 0x0;
            continue;
        case '4':
            this['iLifeCardCount'] = 0x0;
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAUserInfoPanel']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAUserInfoPanel']();
};
QAGuessWatchLive['QAUserInfoPanel']['prototype']['\x5fwrite'] = function(_0x2f0278, _0x1cd998, _0x4cce28) {
    _0x2f0278['writeStruct'](_0x1cd998, _0x4cce28);
};
QAGuessWatchLive['QAUserInfoPanel']['prototype']['\x5fread'] = function(_0x5cd598, _0x1661dd, _0x38d0ad) {
    return _0x5cd598['readStruct'](_0x1661dd, !![], _0x38d0ad);
};
QAGuessWatchLive['QAUserInfoPanel']['prototype']['writeTo'] = function(_0x58426c) {
    var _0x1340cb = '1\x7c2\x7c3\x7c4\x7c0' ['split']('\x7c'),
    _0x406930 = 0x0;
    while ( !! []) {
        switch (_0x1340cb[_0x406930++]) {
        case '0':
            _0x58426c['writeInt32'](0x4, this['iLifeCardCount']);
            continue;
        case '1':
            _0x58426c['writeInt64'](0x0, this['lPid']);
            continue;
        case '2':
            _0x58426c['writeInt64'](0x1, this['lUid']);
            continue;
        case '3':
            _0x58426c['writeString'](0x2, this['sMedalUrl']);
            continue;
        case '4':
            _0x58426c['writeInt32'](0x3, this['iExp']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAUserInfoPanel']['prototype']['readFrom'] = function(_0x16109d) {
    var _0x32e3d2 = '1\x7c2\x7c3\x7c0\x7c4' ['split']('\x7c'),
    _0x7b1378 = 0x0;
    while ( !! []) {
        switch (_0x32e3d2[_0x7b1378++]) {
        case '0':
            this['iExp'] = _0x16109d['readInt32'](0x3, ![], this['iExp']);
            continue;
        case '1':
            this['lPid'] = _0x16109d['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '2':
            this['lUid'] = _0x16109d['readInt64'](0x1, ![], this['lUid']);
            continue;
        case '3':
            this['sMedalUrl'] = _0x16109d['readString'](0x2, ![], this['sMedalUrl']);
            continue;
        case '4':
            this['iLifeCardCount'] = _0x16109d['readInt32'](0x4, ![], this['iLifeCardCount']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAGetRewardListPanel'] = function() {
    this['lGuessId'] = 0x0;
    this['lPid'] = 0x0;
    this['vList'] = new Taf['Vector'](new QAGuessWatchLive['QARankItem']());
};
QAGuessWatchLive['QAGetRewardListPanel']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAGetRewardListPanel']();
};
QAGuessWatchLive['QAGetRewardListPanel']['prototype']['\x5fwrite'] = function(_0x5c4a68, _0x1ccb30, _0x6863d4) {
    _0x5c4a68['writeStruct'](_0x1ccb30, _0x6863d4);
};
QAGuessWatchLive['QAGetRewardListPanel']['prototype']['\x5fread'] = function(_0x1fc987, _0xef6193, _0x198c1f) {
    return _0x1fc987['readStruct'](_0xef6193, !![], _0x198c1f);
};
QAGuessWatchLive['QAGetRewardListPanel']['prototype']['writeTo'] = function(_0x438c53) {
    _0x438c53['writeInt64'](0x0, this['lGuessId']);
    _0x438c53['writeInt64'](0x1, this['lPid']);
    _0x438c53['writeVector'](0x2, this['vList']);
};
QAGuessWatchLive['QAGetRewardListPanel']['prototype']['readFrom'] = function(_0x475c08) {
    this['lGuessId'] = _0x475c08['readInt64'](0x0, ![], this['lGuessId']);
    this['lPid'] = _0x475c08['readInt64'](0x1, ![], this['lPid']);
    this['vList'] = _0x475c08['readVector'](0x2, ![], this['vList']);
};
QAGuessWatchLive['QARankItem'] = function() {
    var _0x1837a6 = '3\x7c0\x7c1\x7c2\x7c4\x7c5' ['split']('\x7c'),
    _0x253318 = 0x0;
    while ( !! []) {
        switch (_0x1837a6[_0x253318++]) {
        case '0':
            this['lUid'] = 0x0;
            continue;
        case '1':
            this['sName'] = '';
            continue;
        case '2':
            this['sLogoUrl'] = '';
            continue;
        case '3':
            this['iRank'] = -0x1;
            continue;
        case '4':
            this['iReward'] = 0x0;
            continue;
        case '5':
            this['vRewardInfo'] = new Taf['Vector'](new QAGuessWatchLive['QAGiftInfo']());
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QARankItem']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QARankItem']();
};
QAGuessWatchLive['QARankItem']['prototype']['\x5fwrite'] = function(_0x11e935, _0xa94b7f, _0x2ee09d) {
    _0x11e935['writeStruct'](_0xa94b7f, _0x2ee09d);
};
QAGuessWatchLive['QARankItem']['prototype']['\x5fread'] = function(_0x1258a1, _0x2bc33d, _0x486f64) {
    return _0x1258a1['readStruct'](_0x2bc33d, !![], _0x486f64);
};
QAGuessWatchLive['QARankItem']['prototype']['writeTo'] = function(_0x545932) {
    var _0x53c5bc = '1\x7c0\x7c5\x7c2\x7c4\x7c3' ['split']('\x7c'),
    _0xf4eb10 = 0x0;
    while ( !! []) {
        switch (_0x53c5bc[_0xf4eb10++]) {
        case '0':
            _0x545932['writeInt64'](0x1, this['lUid']);
            continue;
        case '1':
            _0x545932['writeInt32'](0x0, this['iRank']);
            continue;
        case '2':
            _0x545932['writeString'](0x3, this['sLogoUrl']);
            continue;
        case '3':
            _0x545932['writeVector'](0x5, this['vRewardInfo']);
            continue;
        case '4':
            _0x545932['writeInt32'](0x4, this['iReward']);
            continue;
        case '5':
            _0x545932['writeString'](0x2, this['sName']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QARankItem']['prototype']['readFrom'] = function(_0x2af1c5) {
    var _0x3b87a4 = '0\x7c4\x7c5\x7c1\x7c3\x7c2' ['split']('\x7c'),
    _0x47b8b4 = 0x0;
    while ( !! []) {
        switch (_0x3b87a4[_0x47b8b4++]) {
        case '0':
            this['iRank'] = _0x2af1c5['readInt32'](0x0, ![], this['iRank']);
            continue;
        case '1':
            this['sLogoUrl'] = _0x2af1c5['readString'](0x3, ![], this['sLogoUrl']);
            continue;
        case '2':
            this['vRewardInfo'] = _0x2af1c5['readVector'](0x5, ![], this['vRewardInfo']);
            continue;
        case '3':
            this['iReward'] = _0x2af1c5['readInt32'](0x4, ![], this['iReward']);
            continue;
        case '4':
            this['lUid'] = _0x2af1c5['readInt64'](0x1, ![], this['lUid']);
            continue;
        case '5':
            this['sName'] = _0x2af1c5['readString'](0x2, ![], this['sName']);
            continue;
        }
        break;
    }
};
QAGuessWatchLive['QAGiftInfo'] = function() {
    this['sGiftName'] = '';
    this['iGiftCount'] = 0x0;
};
QAGuessWatchLive['QAGiftInfo']['prototype']['\x5fclone'] = function() {
    return new QAGuessWatchLive['QAGiftInfo']();
};
QAGuessWatchLive['QAGiftInfo']['prototype']['\x5fwrite'] = function(_0x5734bb, _0x400189, _0x21463b) {
    _0x5734bb['writeStruct'](_0x400189, _0x21463b);
};
QAGuessWatchLive['QAGiftInfo']['prototype']['\x5fread'] = function(_0x2857be, _0x42721a, _0x3ab9fb) {
    return _0x2857be['readStruct'](_0x42721a, !![], _0x3ab9fb);
};
QAGuessWatchLive['QAGiftInfo']['prototype']['writeTo'] = function(_0x1fe9eb) {
    _0x1fe9eb['writeString'](0x0, this['sGiftName']);
    _0x1fe9eb['writeInt32'](0x1, this['iGiftCount']);
};
QAGuessWatchLive['QAGiftInfo']['prototype']['readFrom'] = function(_0x579ae8) {
    this['sGiftName'] = _0x579ae8['readString'](0x0, ![], this['sGiftName']);
    this['iGiftCount'] = _0x579ae8['readInt32'](0x1, ![], this['iGiftCount']);
};
var MatchGuess = {};
MatchGuess['MatchCmdColorNotify'] = function() {
    this['sCmd'] = '';
    this['iCount'] = 0x0;
    this['iColor'] = 0x0;
};
MatchGuess['MatchCmdColorNotify']['prototype']['\x5fclone'] = function() {
    return new MatchGuess['MatchCmdColorNotify']();
};
MatchGuess['MatchCmdColorNotify']['prototype']['\x5fwrite'] = function(_0x57c94e, _0x3a9fe1, _0x3c3c7e) {
    _0x57c94e['writeStruct'](_0x3a9fe1, _0x3c3c7e);
};
MatchGuess['MatchCmdColorNotify']['prototype']['\x5fread'] = function(_0x541fa2, _0x544dab, _0x3549aa) {
    return _0x541fa2['readStruct'](_0x544dab, !![], _0x3549aa);
};
MatchGuess['MatchCmdColorNotify']['prototype']['writeTo'] = function(_0x31d561) {
    _0x31d561['writeString'](0x0, this['sCmd']);
    _0x31d561['writeInt32'](0x1, this['iCount']);
    _0x31d561['writeInt32'](0x2, this['iColor']);
};
MatchGuess['MatchCmdColorNotify']['prototype']['readFrom'] = function(_0x55473c) {
    this['sCmd'] = _0x55473c['readString'](0x0, ![], this['sCmd']);
    this['iCount'] = _0x55473c['readInt32'](0x1, ![], this['iCount']);
    this['iColor'] = _0x55473c['readInt32'](0x2, ![], this['iColor']);
};
var ActWatchTor = {};
ActWatchTor['AnchorPanel'] = function() {
    var _0x1e9cdb = '2\x7c10\x7c3\x7c5\x7c7\x7c6\x7c4\x7c1\x7c0\x7c8\x7c9\x7c11' ['split']('\x7c'),
    _0x33b97c = 0x0;
    while ( !! []) {
        switch (_0x1e9cdb[_0x33b97c++]) {
        case '0':
            this['iResult'] = 0x0;
            continue;
        case '1':
            this['iStage'] = 0x0;
            continue;
        case '2':
            this['sTips'] = '';
            continue;
        case '3':
            this['iTargetCount'] = 0x0;
            continue;
        case '4':
            this['iIdentity'] = 0x0;
            continue;
        case '5':
            this['iCurCount'] = 0x0;
            continue;
        case '6':
            this['iLeftTaskCount'] = 0x0;
            continue;
        case '7':
            this['sTaskAns'] = '';
            continue;
        case '8':
            this['lCaptainId'] = 0x0;
            continue;
        case '9':
            this['sCaptainName'] = '';
            continue;
        case '10':
            this['iCountDown'] = 0x0;
            continue;
        case '11':
            this['iType'] = 0x0;
            continue;
        }
        break;
    }
};
ActWatchTor['AnchorPanel']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['AnchorPanel']();
};
ActWatchTor['AnchorPanel']['prototype']['\x5fwrite'] = function(_0x5cc96e, _0xb6bda8, _0x5b7066) {
    _0x5cc96e['writeStruct'](_0xb6bda8, _0x5b7066);
};
ActWatchTor['AnchorPanel']['prototype']['\x5fread'] = function(_0x3d646c, _0xda5051, _0x21c4c2) {
    return _0x3d646c['readStruct'](_0xda5051, !![], _0x21c4c2);
};
ActWatchTor['AnchorPanel']['prototype']['writeTo'] = function(_0x42aa6b) {
    var _0x259f32 = '6\x7c2\x7c9\x7c4\x7c7\x7c3\x7c8\x7c1\x7c11\x7c5\x7c0\x7c10' ['split']('\x7c'),
    _0x1e252f = 0x0;
    while ( !! []) {
        switch (_0x259f32[_0x1e252f++]) {
        case '0':
            _0x42aa6b['writeString'](0xa, this['sCaptainName']);
            continue;
        case '1':
            _0x42aa6b['writeInt32'](0x7, this['iStage']);
            continue;
        case '2':
            _0x42aa6b['writeInt32'](0x1, this['iCountDown']);
            continue;
        case '3':
            _0x42aa6b['writeInt32'](0x5, this['iLeftTaskCount']);
            continue;
        case '4':
            _0x42aa6b['writeInt32'](0x3, this['iCurCount']);
            continue;
        case '5':
            _0x42aa6b['writeInt64'](0x9, this['lCaptainId']);
            continue;
        case '6':
            _0x42aa6b['writeString'](0x0, this['sTips']);
            continue;
        case '7':
            _0x42aa6b['writeString'](0x4, this['sTaskAns']);
            continue;
        case '8':
            _0x42aa6b['writeInt32'](0x6, this['iIdentity']);
            continue;
        case '9':
            _0x42aa6b['writeInt32'](0x2, this['iTargetCount']);
            continue;
        case '10':
            _0x42aa6b['writeInt32'](0xb, this['iType']);
            continue;
        case '11':
            _0x42aa6b['writeInt32'](0x8, this['iResult']);
            continue;
        }
        break;
    }
};
ActWatchTor['AnchorPanel']['prototype']['readFrom'] = function(_0x575703) {
    var _0x5acc61 = '6\x7c9\x7c1\x7c5\x7c10\x7c0\x7c4\x7c3\x7c11\x7c8\x7c7\x7c2' ['split']('\x7c'),
    _0x544edb = 0x0;
    while ( !! []) {
        switch (_0x5acc61[_0x544edb++]) {
        case '0':
            this['iLeftTaskCount'] = _0x575703['readInt32'](0x5, ![], this['iLeftTaskCount']);
            continue;
        case '1':
            this['iTargetCount'] = _0x575703['readInt32'](0x2, ![], this['iTargetCount']);
            continue;
        case '2':
            this['iType'] = _0x575703['readInt32'](0xb, ![], this['iType']);
            continue;
        case '3':
            this['iStage'] = _0x575703['readInt32'](0x7, ![], this['iStage']);
            continue;
        case '4':
            this['iIdentity'] = _0x575703['readInt32'](0x6, ![], this['iIdentity']);
            continue;
        case '5':
            this['iCurCount'] = _0x575703['readInt32'](0x3, ![], this['iCurCount']);
            continue;
        case '6':
            this['sTips'] = _0x575703['readString'](0x0, ![], this['sTips']);
            continue;
        case '7':
            this['sCaptainName'] = _0x575703['readString'](0xa, ![], this['sCaptainName']);
            continue;
        case '8':
            this['lCaptainId'] = _0x575703['readInt64'](0x9, ![], this['lCaptainId']);
            continue;
        case '9':
            this['iCountDown'] = _0x575703['readInt32'](0x1, ![], this['iCountDown']);
            continue;
        case '10':
            this['sTaskAns'] = _0x575703['readString'](0x4, ![], this['sTaskAns']);
            continue;
        case '11':
            this['iResult'] = _0x575703['readInt32'](0x8, ![], this['iResult']);
            continue;
        }
        break;
    }
};
ActWatchTor['PublishTaskReq'] = function() {
    this['lUid'] = 0x0;
    this['iTaskId'] = 0x0;
    this['lPid'] = 0x0;
};
ActWatchTor['PublishTaskReq']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishTaskReq']();
};
ActWatchTor['PublishTaskReq']['prototype']['\x5fwrite'] = function(_0x511e17, _0x21c74a, _0x243674) {
    _0x511e17['writeStruct'](_0x21c74a, _0x243674);
};
ActWatchTor['PublishTaskReq']['prototype']['\x5fread'] = function(_0xebe9b1, _0x32d2e6, _0x4e0c9c) {
    return _0xebe9b1['readStruct'](_0x32d2e6, !![], _0x4e0c9c);
};
ActWatchTor['PublishTaskReq']['prototype']['writeTo'] = function(_0x50fee3) {
    _0x50fee3['writeInt64'](0x0, this['lUid']);
    _0x50fee3['writeInt32'](0x1, this['iTaskId']);
    _0x50fee3['writeInt64'](0x2, this['lPid']);
};
ActWatchTor['PublishTaskReq']['prototype']['readFrom'] = function(_0x1151d0) {
    this['lUid'] = _0x1151d0['readInt64'](0x0, ![], this['lUid']);
    this['iTaskId'] = _0x1151d0['readInt32'](0x1, ![], this['iTaskId']);
    this['lPid'] = _0x1151d0['readInt64'](0x2, ![], this['lPid']);
};
ActWatchTor['PublishTaskRsp'] = function() {
    this['lUid'] = 0x0;
    this['iPublishStatus'] = 0x0;
};
ActWatchTor['PublishTaskRsp']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishTaskRsp']();
};
ActWatchTor['PublishTaskRsp']['prototype']['\x5fwrite'] = function(_0x5c8e8a, _0x16a88e, _0x550e02) {
    _0x5c8e8a['writeStruct'](_0x16a88e, _0x550e02);
};
ActWatchTor['PublishTaskRsp']['prototype']['\x5fread'] = function(_0x384605, _0x31199f, _0x1c948b) {
    return _0x384605['readStruct'](_0x31199f, !![], _0x1c948b);
};
ActWatchTor['PublishTaskRsp']['prototype']['writeTo'] = function(_0x1d7e85) {
    _0x1d7e85['writeInt64'](0x0, this['lUid']);
    _0x1d7e85['writeInt32'](0x1, this['iPublishStatus']);
};
ActWatchTor['PublishTaskRsp']['prototype']['readFrom'] = function(_0x50467e) {
    this['lUid'] = _0x50467e['readInt64'](0x0, ![], this['lUid']);
    this['iPublishStatus'] = _0x50467e['readInt32'](0x1, ![], this['iPublishStatus']);
};
ActWatchTor['PublishItem'] = function() {
    this['tTaskItem'] = new ActWatchTor['TaskItem']();
};
ActWatchTor['PublishItem']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishItem']();
};
ActWatchTor['PublishItem']['prototype']['\x5fwrite'] = function(_0x503ad7, _0x22b421, _0x45be80) {
    _0x503ad7['writeStruct'](_0x22b421, _0x45be80);
};
ActWatchTor['PublishItem']['prototype']['\x5fread'] = function(_0x4dffaa, _0x84626e, _0x93294c) {
    return _0x4dffaa['readStruct'](_0x84626e, !![], _0x93294c);
};
ActWatchTor['PublishItem']['prototype']['writeTo'] = function(_0x24bf7f) {
    _0x24bf7f['writeStruct'](0x0, this['tTaskItem']);
};
ActWatchTor['PublishItem']['prototype']['readFrom'] = function(_0x34646f) {
    this['tTaskItem'] = _0x34646f['readStruct'](0x0, ![], this['tTaskItem']);
};
ActWatchTor['TaskItem'] = function() {
    var _0x4a5083 = '5\x7c1\x7c4\x7c2\x7c0\x7c3' ['split']('\x7c'),
    _0x4f5b68 = 0x0;
    while ( !! []) {
        switch (_0x4a5083[_0x4f5b68++]) {
        case '0':
            this['iTaskId'] = 0x0;
            continue;
        case '1':
            this['iDuration'] = 0x0;
            continue;
        case '2':
            this['iCount'] = 0x0;
            continue;
        case '3':
            this['sKeyWords'] = '';
            continue;
        case '4':
            this['iType'] = 0x0;
            continue;
        case '5':
            this['sTitle'] = '';
            continue;
        }
        break;
    }
};
ActWatchTor['TaskItem']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['TaskItem']();
};
ActWatchTor['TaskItem']['prototype']['\x5fwrite'] = function(_0xa91fc3, _0x4a7734, _0x244b2e) {
    _0xa91fc3['writeStruct'](_0x4a7734, _0x244b2e);
};
ActWatchTor['TaskItem']['prototype']['\x5fread'] = function(_0xf13ae5, _0x3db7ea, _0x757016) {
    return _0xf13ae5['readStruct'](_0x3db7ea, !![], _0x757016);
};
ActWatchTor['TaskItem']['prototype']['writeTo'] = function(_0x307f34) {
    var _0x5d5a02 = '2\x7c3\x7c0\x7c4\x7c1\x7c5' ['split']('\x7c'),
    _0xac5cfd = 0x0;
    while ( !! []) {
        switch (_0x5d5a02[_0xac5cfd++]) {
        case '0':
            _0x307f34['writeInt32'](0x2, this['iType']);
            continue;
        case '1':
            _0x307f34['writeInt32'](0x4, this['iTaskId']);
            continue;
        case '2':
            _0x307f34['writeString'](0x0, this['sTitle']);
            continue;
        case '3':
            _0x307f34['writeInt32'](0x1, this['iDuration']);
            continue;
        case '4':
            _0x307f34['writeInt32'](0x3, this['iCount']);
            continue;
        case '5':
            _0x307f34['writeString'](0x5, this['sKeyWords']);
            continue;
        }
        break;
    }
};
ActWatchTor['TaskItem']['prototype']['readFrom'] = function(_0xea2172) {
    var _0x48221d = '3\x7c1\x7c0\x7c5\x7c2\x7c4' ['split']('\x7c'),
    _0x15d61b = 0x0;
    while ( !! []) {
        switch (_0x48221d[_0x15d61b++]) {
        case '0':
            this['iType'] = _0xea2172['readInt32'](0x2, ![], this['iType']);
            continue;
        case '1':
            this['iDuration'] = _0xea2172['readInt32'](0x1, ![], this['iDuration']);
            continue;
        case '2':
            this['iTaskId'] = _0xea2172['readInt32'](0x4, ![], this['iTaskId']);
            continue;
        case '3':
            this['sTitle'] = _0xea2172['readString'](0x0, ![], this['sTitle']);
            continue;
        case '4':
            this['sKeyWords'] = _0xea2172['readString'](0x5, ![], this['sKeyWords']);
            continue;
        case '5':
            this['iCount'] = _0xea2172['readInt32'](0x3, ![], this['iCount']);
            continue;
        }
        break;
    }
};
ActWatchTor['PublishPanelReq'] = function() {
    this['lUid'] = 0x0;
    this['lPid'] = 0x0;
};
ActWatchTor['PublishPanelReq']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishPanelReq']();
};
ActWatchTor['PublishPanelReq']['prototype']['\x5fwrite'] = function(_0xa7b1e1, _0x2ab3ee, _0x51fc2a) {
    _0xa7b1e1['writeStruct'](_0x2ab3ee, _0x51fc2a);
};
ActWatchTor['PublishPanelReq']['prototype']['\x5fread'] = function(_0x3c866a, _0xe954f2, _0x86731b) {
    return _0x3c866a['readStruct'](_0xe954f2, !![], _0x86731b);
};
ActWatchTor['PublishPanelReq']['prototype']['writeTo'] = function(_0xb32bb4) {
    _0xb32bb4['writeInt64'](0x0, this['lUid']);
    _0xb32bb4['writeInt64'](0x1, this['lPid']);
};
ActWatchTor['PublishPanelReq']['prototype']['readFrom'] = function(_0x21708a) {
    this['lUid'] = _0x21708a['readInt64'](0x0, ![], this['lUid']);
    this['lPid'] = _0x21708a['readInt64'](0x1, ![], this['lPid']);
};
ActWatchTor['PublishPanelRsp'] = function() {
    this['vPublishList'] = new Taf['Vector'](new ActWatchTor['PublishItem']());
    this['iNextCountDown'] = 0x0;
};
ActWatchTor['PublishPanelRsp']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishPanelRsp']();
};
ActWatchTor['PublishPanelRsp']['prototype']['\x5fwrite'] = function(_0x1c271b, _0xa92347, _0x586b3d) {
    _0x1c271b['writeStruct'](_0xa92347, _0x586b3d);
};
ActWatchTor['PublishPanelRsp']['prototype']['\x5fread'] = function(_0x25b3c5, _0x258871, _0x52c08a) {
    return _0x25b3c5['readStruct'](_0x258871, !![], _0x52c08a);
};
ActWatchTor['PublishPanelRsp']['prototype']['writeTo'] = function(_0x3617e7) {
    _0x3617e7['writeVector'](0x0, this['vPublishList']);
    _0x3617e7['writeInt32'](0x1, this['iNextCountDown']);
};
ActWatchTor['PublishPanelRsp']['prototype']['readFrom'] = function(_0x595daf) {
    this['vPublishList'] = _0x595daf['readVector'](0x0, ![], this['vPublishList']);
    this['iNextCountDown'] = _0x595daf['readInt32'](0x1, ![], this['iNextCountDown']);
};
ActWatchTor['PublishHistoryReq'] = function() {
    this['lUid'] = 0x0;
};
ActWatchTor['PublishHistoryReq']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishHistoryReq']();
};
ActWatchTor['PublishHistoryReq']['prototype']['\x5fwrite'] = function(_0xe0e14b, _0x396bd2, _0x14b744) {
    _0xe0e14b['writeStruct'](_0x396bd2, _0x14b744);
};
ActWatchTor['PublishHistoryReq']['prototype']['\x5fread'] = function(_0x29e8e2, _0x2c1485, _0x1870de) {
    return _0x29e8e2['readStruct'](_0x2c1485, !![], _0x1870de);
};
ActWatchTor['PublishHistoryReq']['prototype']['writeTo'] = function(_0x5f7afd) {
    _0x5f7afd['writeInt64'](0x0, this['lUid']);
};
ActWatchTor['PublishHistoryReq']['prototype']['readFrom'] = function(_0x57adc1) {
    this['lUid'] = _0x57adc1['readInt64'](0x0, ![], this['lUid']);
};
ActWatchTor['PublishHistoryRsp'] = function() {
    this['vRspList'] = new Taf['Vector'](new ActWatchTor['PublishHistoryItem']());
    this['tData'] = new ActWatchTor['PublishHistoryData']();
};
ActWatchTor['PublishHistoryRsp']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishHistoryRsp']();
};
ActWatchTor['PublishHistoryRsp']['prototype']['\x5fwrite'] = function(_0x39b2d5, _0x153e27, _0x562a81) {
    _0x39b2d5['writeStruct'](_0x153e27, _0x562a81);
};
ActWatchTor['PublishHistoryRsp']['prototype']['\x5fread'] = function(_0x30dca5, _0x3f2eb1, _0x3a48ab) {
    return _0x30dca5['readStruct'](_0x3f2eb1, !![], _0x3a48ab);
};
ActWatchTor['PublishHistoryRsp']['prototype']['writeTo'] = function(_0x9d94d) {
    _0x9d94d['writeVector'](0x0, this['vRspList']);
    _0x9d94d['writeStruct'](0x1, this['tData']);
};
ActWatchTor['PublishHistoryRsp']['prototype']['readFrom'] = function(_0x369d8c) {
    this['vRspList'] = _0x369d8c['readVector'](0x0, ![], this['vRspList']);
    this['tData'] = _0x369d8c['readStruct'](0x1, ![], this['tData']);
};
ActWatchTor['PublishHistoryItem'] = function() {
    var _0x1b5a10 = '2\x7c1\x7c3\x7c7\x7c6\x7c0\x7c4\x7c5' ['split']('\x7c'),
    _0xaacb77 = 0x0;
    while ( !! []) {
        switch (_0x1b5a10[_0xaacb77++]) {
        case '0':
            this['lUid'] = 0x0;
            continue;
        case '1':
            this['tTaskItem'] = new ActWatchTor['TaskItem']();
            continue;
        case '2':
            this['iPublishTime'] = 0x0;
            continue;
        case '3':
            this['lPid'] = 0x0;
            continue;
        case '4':
            this['sCaptainName'] = '';
            continue;
        case '5':
            this['iCount'] = 0x0;
            continue;
        case '6':
            this['iResult'] = 0x0;
            continue;
        case '7':
            this['sPresenterName'] = '';
            continue;
        }
        break;
    }
};
ActWatchTor['PublishHistoryItem']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishHistoryItem']();
};
ActWatchTor['PublishHistoryItem']['prototype']['\x5fwrite'] = function(_0x88aa7e, _0x433b23, _0x371cab) {
    _0x88aa7e['writeStruct'](_0x433b23, _0x371cab);
};
ActWatchTor['PublishHistoryItem']['prototype']['\x5fread'] = function(_0x576917, _0x426155, _0x1b0182) {
    return _0x576917['readStruct'](_0x426155, !![], _0x1b0182);
};
ActWatchTor['PublishHistoryItem']['prototype']['writeTo'] = function(_0x5884de) {
    var _0x2199eb = '6\x7c1\x7c4\x7c7\x7c5\x7c0\x7c2\x7c3' ['split']('\x7c'),
    _0x53d2cd = 0x0;
    while ( !! []) {
        switch (_0x2199eb[_0x53d2cd++]) {
        case '0':
            _0x5884de['writeInt64'](0x5, this['lUid']);
            continue;
        case '1':
            _0x5884de['writeStruct'](0x1, this['tTaskItem']);
            continue;
        case '2':
            _0x5884de['writeString'](0x6, this['sCaptainName']);
            continue;
        case '3':
            _0x5884de['writeInt32'](0x7, this['iCount']);
            continue;
        case '4':
            _0x5884de['writeInt64'](0x2, this['lPid']);
            continue;
        case '5':
            _0x5884de['writeInt32'](0x4, this['iResult']);
            continue;
        case '6':
            _0x5884de['writeInt32'](0x0, this['iPublishTime']);
            continue;
        case '7':
            _0x5884de['writeString'](0x3, this['sPresenterName']);
            continue;
        }
        break;
    }
};
ActWatchTor['PublishHistoryItem']['prototype']['readFrom'] = function(_0x35aeac) {
    var _0x363f12 = '5\x7c6\x7c2\x7c0\x7c3\x7c1\x7c4\x7c7' ['split']('\x7c'),
    _0x112957 = 0x0;
    while ( !! []) {
        switch (_0x363f12[_0x112957++]) {
        case '0':
            this['sPresenterName'] = _0x35aeac['readString'](0x3, ![], this['sPresenterName']);
            continue;
        case '1':
            this['lUid'] = _0x35aeac['readInt64'](0x5, ![], this['lUid']);
            continue;
        case '2':
            this['lPid'] = _0x35aeac['readInt64'](0x2, ![], this['lPid']);
            continue;
        case '3':
            this['iResult'] = _0x35aeac['readInt32'](0x4, ![], this['iResult']);
            continue;
        case '4':
            this['sCaptainName'] = _0x35aeac['readString'](0x6, ![], this['sCaptainName']);
            continue;
        case '5':
            this['iPublishTime'] = _0x35aeac['readInt32'](0x0, ![], this['iPublishTime']);
            continue;
        case '6':
            this['tTaskItem'] = _0x35aeac['readStruct'](0x1, ![], this['tTaskItem']);
            continue;
        case '7':
            this['iCount'] = _0x35aeac['readInt32'](0x7, ![], this['iCount']);
            continue;
        }
        break;
    }
};
ActWatchTor['PublishHistoryData'] = function() {
    this['iWeekTotal'] = 0x0;
    this['iWeekSucc'] = 0x0;
};
ActWatchTor['PublishHistoryData']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['PublishHistoryData']();
};
ActWatchTor['PublishHistoryData']['prototype']['\x5fwrite'] = function(_0x428815, _0x5d28c6, _0x20c755) {
    _0x428815['writeStruct'](_0x5d28c6, _0x20c755);
};
ActWatchTor['PublishHistoryData']['prototype']['\x5fread'] = function(_0x1fe93d, _0x35338e, _0x20d752) {
    return _0x1fe93d['readStruct'](_0x35338e, !![], _0x20d752);
};
ActWatchTor['PublishHistoryData']['prototype']['writeTo'] = function(_0x4e5d9a) {
    _0x4e5d9a['writeInt32'](0x0, this['iWeekTotal']);
    _0x4e5d9a['writeInt32'](0x1, this['iWeekSucc']);
};
ActWatchTor['PublishHistoryData']['prototype']['readFrom'] = function(_0x37fc29) {
    this['iWeekTotal'] = _0x37fc29['readInt32'](0x0, ![], this['iWeekTotal']);
    this['iWeekSucc'] = _0x37fc29['readInt32'](0x1, ![], this['iWeekSucc']);
};
ActWatchTor['MemberTaskResultReq'] = function() {
    this['lUid'] = 0x0;
};
ActWatchTor['MemberTaskResultReq']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['MemberTaskResultReq']();
};
ActWatchTor['MemberTaskResultReq']['prototype']['\x5fwrite'] = function(_0x879606, _0x1e2ac2, _0x1b6d1e) {
    _0x879606['writeStruct'](_0x1e2ac2, _0x1b6d1e);
};
ActWatchTor['MemberTaskResultReq']['prototype']['\x5fread'] = function(_0x20a312, _0x43469b, _0x59ad22) {
    return _0x20a312['readStruct'](_0x43469b, !![], _0x59ad22);
};
ActWatchTor['MemberTaskResultReq']['prototype']['writeTo'] = function(_0x46a9ab) {
    _0x46a9ab['writeInt64'](0x0, this['lUid']);
};
ActWatchTor['MemberTaskResultReq']['prototype']['readFrom'] = function(_0x44581a) {
    this['lUid'] = _0x44581a['readInt64'](0x0, ![], this['lUid']);
};
ActWatchTor['MemberTaskResultRsp'] = function() {
    this['lUid'] = 0x0;
    this['iTotal'] = 0x0;
    this['iSucc'] = 0x0;
    this['iFail'] = 0x0;
};
ActWatchTor['MemberTaskResultRsp']['prototype']['\x5fclone'] = function() {
    return new ActWatchTor['MemberTaskResultRsp']();
};
ActWatchTor['MemberTaskResultRsp']['prototype']['\x5fwrite'] = function(_0x148e24, _0x3604d5, _0x39944e) {
    _0x148e24['writeStruct'](_0x3604d5, _0x39944e);
};
ActWatchTor['MemberTaskResultRsp']['prototype']['\x5fread'] = function(_0x49da48, _0x231226, _0x20363d) {
    return _0x49da48['readStruct'](_0x231226, !![], _0x20363d);
};
ActWatchTor['MemberTaskResultRsp']['prototype']['writeTo'] = function(_0x4e989d) {
    _0x4e989d['writeInt64'](0x0, this['lUid']);
    _0x4e989d['writeInt32'](0x1, this['iTotal']);
    _0x4e989d['writeInt32'](0x2, this['iSucc']);
    _0x4e989d['writeInt32'](0x3, this['iFail']);
};
ActWatchTor['MemberTaskResultRsp']['prototype']['readFrom'] = function(_0x5a8f9f) {
    this['lUid'] = _0x5a8f9f['readInt64'](0x0, ![], this['lUid']);
    this['iTotal'] = _0x5a8f9f['readInt32'](0x1, ![], this['iTotal']);
    this['iSucc'] = _0x5a8f9f['readInt32'](0x2, ![], this['iSucc']);
    this['iFail'] = _0x5a8f9f['readInt32'](0x3, ![], this['iFail']);
};
var ActTotalFinalPeak = {};
ActTotalFinalPeak['AnchorPanel'] = function() {
    var _0x37fd4a = '8\x7c0\x7c1\x7c11\x7c2\x7c3\x7c7\x7c10\x7c4\x7c5\x7c9\x7c12\x7c6' ['split']('\x7c'),
    _0x32dd8c = 0x0;
    while ( !! []) {
        switch (_0x37fd4a[_0x32dd8c++]) {
        case '0':
            this['iGroupType'] = 0x0;
            continue;
        case '1':
            this['iGroupID'] = 0x0;
            continue;
        case '2':
            this['iTaskScore'] = 0x0;
            continue;
        case '3':
            this['iTaskLv'] = 0x0;
            continue;
        case '4':
            this['iTaskFinished'] = 0x0;
            continue;
        case '5':
            this['iStage'] = 0x0;
            continue;
        case '6':
            this['iSpecGroupId'] = 0x0;
            continue;
        case '7':
            this['iTaskNext'] = 0x0;
            continue;
        case '8':
            this['lPid'] = 0x0;
            continue;
        case '9':
            this['lScore'] = 0x0;
            continue;
        case '10':
            this['iTaskReward'] = 0x0;
            continue;
        case '11':
            this['iGameId'] = 0x0;
            continue;
        case '12':
            this['iRank'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['AnchorPanel']();
};
ActTotalFinalPeak['AnchorPanel']['prototype']['\x5fwrite'] = function(_0x13e872, _0x2daa4b, _0x4b8016) {
    _0x13e872['writeStruct'](_0x2daa4b, _0x4b8016);
};
ActTotalFinalPeak['AnchorPanel']['prototype']['\x5fread'] = function(_0x29d394, _0x4bad9f, _0x4f20be) {
    return _0x29d394['readStruct'](_0x4bad9f, !![], _0x4f20be);
};
ActTotalFinalPeak['AnchorPanel']['prototype']['writeTo'] = function(_0x51f6d3) {
    var _0x1a041c = '10\x7c6\x7c3\x7c11\x7c8\x7c2\x7c1\x7c12\x7c4\x7c5\x7c7\x7c0\x7c9' ['split']('\x7c'),
    _0x187f3b = 0x0;
    while ( !! []) {
        switch (_0x1a041c[_0x187f3b++]) {
        case '0':
            _0x51f6d3['writeInt32'](0xb, this['iRank']);
            continue;
        case '1':
            _0x51f6d3['writeInt32'](0x6, this['iTaskNext']);
            continue;
        case '2':
            _0x51f6d3['writeInt32'](0x5, this['iTaskLv']);
            continue;
        case '3':
            _0x51f6d3['writeInt32'](0x2, this['iGroupID']);
            continue;
        case '4':
            _0x51f6d3['writeInt32'](0x8, this['iTaskFinished']);
            continue;
        case '5':
            _0x51f6d3['writeInt32'](0x9, this['iStage']);
            continue;
        case '6':
            _0x51f6d3['writeInt32'](0x1, this['iGroupType']);
            continue;
        case '7':
            _0x51f6d3['writeInt64'](0xa, this['lScore']);
            continue;
        case '8':
            _0x51f6d3['writeInt32'](0x4, this['iTaskScore']);
            continue;
        case '9':
            _0x51f6d3['writeInt32'](0xc, this['iSpecGroupId']);
            continue;
        case '10':
            _0x51f6d3['writeInt64'](0x0, this['lPid']);
            continue;
        case '11':
            _0x51f6d3['writeInt32'](0x3, this['iGameId']);
            continue;
        case '12':
            _0x51f6d3['writeInt32'](0x7, this['iTaskReward']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorPanel']['prototype']['readFrom'] = function(_0x2276d9) {
    var _0x1d705d = '4\x7c0\x7c8\x7c5\x7c6\x7c2\x7c11\x7c7\x7c1\x7c9\x7c3\x7c10\x7c12' ['split']('\x7c'),
    _0x38ec90 = 0x0;
    while ( !! []) {
        switch (_0x1d705d[_0x38ec90++]) {
        case '0':
            this['iGroupType'] = _0x2276d9['readInt32'](0x1, ![], this['iGroupType']);
            continue;
        case '1':
            this['iTaskFinished'] = _0x2276d9['readInt32'](0x8, ![], this['iTaskFinished']);
            continue;
        case '2':
            this['iTaskLv'] = _0x2276d9['readInt32'](0x5, ![], this['iTaskLv']);
            continue;
        case '3':
            this['lScore'] = _0x2276d9['readInt64'](0xa, ![], this['lScore']);
            continue;
        case '4':
            this['lPid'] = _0x2276d9['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '5':
            this['iGameId'] = _0x2276d9['readInt32'](0x3, ![], this['iGameId']);
            continue;
        case '6':
            this['iTaskScore'] = _0x2276d9['readInt32'](0x4, ![], this['iTaskScore']);
            continue;
        case '7':
            this['iTaskReward'] = _0x2276d9['readInt32'](0x7, ![], this['iTaskReward']);
            continue;
        case '8':
            this['iGroupID'] = _0x2276d9['readInt32'](0x2, ![], this['iGroupID']);
            continue;
        case '9':
            this['iStage'] = _0x2276d9['readInt32'](0x9, ![], this['iStage']);
            continue;
        case '10':
            this['iRank'] = _0x2276d9['readInt32'](0xb, ![], this['iRank']);
            continue;
        case '11':
            this['iTaskNext'] = _0x2276d9['readInt32'](0x6, ![], this['iTaskNext']);
            continue;
        case '12':
            this['iSpecGroupId'] = _0x2276d9['readInt32'](0xc, ![], this['iSpecGroupId']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['HourPanel'] = function() {
    var _0x24cd61 = '6\x7c3\x7c5\x7c1\x7c2\x7c4\x7c0' ['split']('\x7c'),
    _0x2f707c = 0x0;
    while ( !! []) {
        switch (_0x24cd61[_0x2f707c++]) {
        case '0':
            this['iAttackCD'] = 0x0;
            continue;
        case '1':
            this['iRank'] = 0x0;
            continue;
        case '2':
            this['iPKCount'] = 0x0;
            continue;
        case '3':
            this['iHour'] = 0x0;
            continue;
        case '4':
            this['iPKMax'] = 0x0;
            continue;
        case '5':
            this['iScore'] = 0x0;
            continue;
        case '6':
            this['lPid'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['HourPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['HourPanel']();
};
ActTotalFinalPeak['HourPanel']['prototype']['\x5fwrite'] = function(_0x23d095, _0x41526f, _0x4554ac) {
    _0x23d095['writeStruct'](_0x41526f, _0x4554ac);
};
ActTotalFinalPeak['HourPanel']['prototype']['\x5fread'] = function(_0x5d82a6, _0x24d977, _0x48c0e2) {
    return _0x5d82a6['readStruct'](_0x24d977, !![], _0x48c0e2);
};
ActTotalFinalPeak['HourPanel']['prototype']['writeTo'] = function(_0x148749) {
    var _0x3addd9 = '4\x7c5\x7c1\x7c6\x7c0\x7c3\x7c2' ['split']('\x7c'),
    _0x579e23 = 0x0;
    while ( !! []) {
        switch (_0x3addd9[_0x579e23++]) {
        case '0':
            _0x148749['writeInt32'](0x4, this['iPKCount']);
            continue;
        case '1':
            _0x148749['writeInt32'](0x2, this['iScore']);
            continue;
        case '2':
            _0x148749['writeInt32'](0x6, this['iAttackCD']);
            continue;
        case '3':
            _0x148749['writeInt32'](0x5, this['iPKMax']);
            continue;
        case '4':
            _0x148749['writeInt64'](0x0, this['lPid']);
            continue;
        case '5':
            _0x148749['writeInt32'](0x1, this['iHour']);
            continue;
        case '6':
            _0x148749['writeInt32'](0x3, this['iRank']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['HourPanel']['prototype']['readFrom'] = function(_0x20f0a4) {
    var _0x133bf8 = '0\x7c5\x7c3\x7c2\x7c4\x7c1\x7c6' ['split']('\x7c'),
    _0x18a50c = 0x0;
    while ( !! []) {
        switch (_0x133bf8[_0x18a50c++]) {
        case '0':
            this['lPid'] = _0x20f0a4['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '1':
            this['iPKMax'] = _0x20f0a4['readInt32'](0x5, ![], this['iPKMax']);
            continue;
        case '2':
            this['iRank'] = _0x20f0a4['readInt32'](0x3, ![], this['iRank']);
            continue;
        case '3':
            this['iScore'] = _0x20f0a4['readInt32'](0x2, ![], this['iScore']);
            continue;
        case '4':
            this['iPKCount'] = _0x20f0a4['readInt32'](0x4, ![], this['iPKCount']);
            continue;
        case '5':
            this['iHour'] = _0x20f0a4['readInt32'](0x1, ![], this['iHour']);
            continue;
        case '6':
            this['iAttackCD'] = _0x20f0a4['readInt32'](0x6, ![], this['iAttackCD']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['OpponentPanel'] = function() {
    var _0x10b567 = '4\x7c3\x7c2\x7c5\x7c0\x7c1' ['split']('\x7c'),
    _0x3a924b = 0x0;
    while ( !! []) {
        switch (_0x10b567[_0x3a924b++]) {
        case '0':
            this['iDeltaScore'] = 0x0;
            continue;
        case '1':
            this['tOppJump'] = new ActTotalFinalPeak['JumpChannel']();
            continue;
        case '2':
            this['sOpponetLogo'] = '';
            continue;
        case '3':
            this['lOpponentPid'] = 0x0;
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        case '5':
            this['sOpponetNick'] = '';
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['OpponentPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['OpponentPanel']();
};
ActTotalFinalPeak['OpponentPanel']['prototype']['\x5fwrite'] = function(_0x3f632f, _0x559abd, _0x19a861) {
    _0x3f632f['writeStruct'](_0x559abd, _0x19a861);
};
ActTotalFinalPeak['OpponentPanel']['prototype']['\x5fread'] = function(_0x48a735, _0x48d092, _0x2af502) {
    return _0x48a735['readStruct'](_0x48d092, !![], _0x2af502);
};
ActTotalFinalPeak['OpponentPanel']['prototype']['writeTo'] = function(_0xe0613) {
    var _0x2ae6a6 = '5\x7c2\x7c3\x7c0\x7c4\x7c1' ['split']('\x7c'),
    _0x5f2a2f = 0x0;
    while ( !! []) {
        switch (_0x2ae6a6[_0x5f2a2f++]) {
        case '0':
            _0xe0613['writeString'](0x3, this['sOpponetNick']);
            continue;
        case '1':
            _0xe0613['writeStruct'](0x5, this['tOppJump']);
            continue;
        case '2':
            _0xe0613['writeInt64'](0x1, this['lOpponentPid']);
            continue;
        case '3':
            _0xe0613['writeString'](0x2, this['sOpponetLogo']);
            continue;
        case '4':
            _0xe0613['writeInt32'](0x4, this['iDeltaScore']);
            continue;
        case '5':
            _0xe0613['writeInt64'](0x0, this['lPid']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['OpponentPanel']['prototype']['readFrom'] = function(_0xbb953f) {
    var _0x3128c6 = '5\x7c4\x7c2\x7c1\x7c3\x7c0' ['split']('\x7c'),
    _0x4ef97f = 0x0;
    while ( !! []) {
        switch (_0x3128c6[_0x4ef97f++]) {
        case '0':
            this['tOppJump'] = _0xbb953f['readStruct'](0x5, ![], this['tOppJump']);
            continue;
        case '1':
            this['sOpponetNick'] = _0xbb953f['readString'](0x3, ![], this['sOpponetNick']);
            continue;
        case '2':
            this['sOpponetLogo'] = _0xbb953f['readString'](0x2, ![], this['sOpponetLogo']);
            continue;
        case '3':
            this['iDeltaScore'] = _0xbb953f['readInt32'](0x4, ![], this['iDeltaScore']);
            continue;
        case '4':
            this['lOpponentPid'] = _0xbb953f['readInt64'](0x1, ![], this['lOpponentPid']);
            continue;
        case '5':
            this['lPid'] = _0xbb953f['readInt64'](0x0, ![], this['lPid']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['JumpChannel'] = function() {
    var _0x3747e3 = '4\x7c1\x7c6\x7c3\x7c0\x7c7\x7c2\x7c5' ['split']('\x7c'),
    _0x3895b4 = 0x0;
    while ( !! []) {
        switch (_0x3747e3[_0x3895b4++]) {
        case '0':
            this['lYYId'] = 0x0;
            continue;
        case '1':
            this['lTid'] = 0x0;
            continue;
        case '2':
            this['iSourceType'] = 0x0;
            continue;
        case '3':
            this['iGameId'] = 0x0;
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        case '5':
            this['iScreenType'] = 0x0;
            continue;
        case '6':
            this['lSid'] = 0x0;
            continue;
        case '7':
            this['iRoomId'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['JumpChannel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['JumpChannel']();
};
ActTotalFinalPeak['JumpChannel']['prototype']['\x5fwrite'] = function(_0x182e4d, _0x41fa5c, _0x15b456) {
    _0x182e4d['writeStruct'](_0x41fa5c, _0x15b456);
};
ActTotalFinalPeak['JumpChannel']['prototype']['\x5fread'] = function(_0x33c5e2, _0x8d52f5, _0x3e19ab) {
    return _0x33c5e2['readStruct'](_0x8d52f5, !![], _0x3e19ab);
};
ActTotalFinalPeak['JumpChannel']['prototype']['writeTo'] = function(_0x2b8071) {
    var _0x498795 = '4\x7c2\x7c0\x7c3\x7c6\x7c7\x7c5\x7c1' ['split']('\x7c'),
    _0x10def4 = 0x0;
    while ( !! []) {
        switch (_0x498795[_0x10def4++]) {
        case '0':
            _0x2b8071['writeInt64'](0x2, this['lSid']);
            continue;
        case '1':
            _0x2b8071['writeInt32'](0x7, this['iScreenType']);
            continue;
        case '2':
            _0x2b8071['writeInt64'](0x1, this['lTid']);
            continue;
        case '3':
            _0x2b8071['writeInt32'](0x3, this['iGameId']);
            continue;
        case '4':
            _0x2b8071['writeInt64'](0x0, this['lPid']);
            continue;
        case '5':
            _0x2b8071['writeInt32'](0x6, this['iSourceType']);
            continue;
        case '6':
            _0x2b8071['writeInt64'](0x4, this['lYYId']);
            continue;
        case '7':
            _0x2b8071['writeInt32'](0x5, this['iRoomId']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['JumpChannel']['prototype']['readFrom'] = function(_0x4b63b1) {
    var _0x30e9e6 = '1\x7c6\x7c7\x7c4\x7c5\x7c3\x7c0\x7c2' ['split']('\x7c'),
    _0x1f924d = 0x0;
    while ( !! []) {
        switch (_0x30e9e6[_0x1f924d++]) {
        case '0':
            this['iSourceType'] = _0x4b63b1['readInt32'](0x6, ![], this['iSourceType']);
            continue;
        case '1':
            this['lPid'] = _0x4b63b1['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '2':
            this['iScreenType'] = _0x4b63b1['readInt32'](0x7, ![], this['iScreenType']);
            continue;
        case '3':
            this['iRoomId'] = _0x4b63b1['readInt32'](0x5, ![], this['iRoomId']);
            continue;
        case '4':
            this['iGameId'] = _0x4b63b1['readInt32'](0x3, ![], this['iGameId']);
            continue;
        case '5':
            this['lYYId'] = _0x4b63b1['readInt64'](0x4, ![], this['lYYId']);
            continue;
        case '6':
            this['lTid'] = _0x4b63b1['readInt64'](0x1, ![], this['lTid']);
            continue;
        case '7':
            this['lSid'] = _0x4b63b1['readInt64'](0x2, ![], this['lSid']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteScorePanel'] = function() {
    var _0x34233e = '1\x7c0\x7c5\x7c3\x7c4\x7c2' ['split']('\x7c'),
    _0x4e289a = 0x0;
    while ( !! []) {
        switch (_0x34233e[_0x4e289a++]) {
        case '0':
            this['iStage'] = 0x0;
            continue;
        case '1':
            this['lPid'] = 0x0;
            continue;
        case '2':
            this['sPromoteStr'] = '';
            continue;
        case '3':
            this['iPromote'] = 0x0;
            continue;
        case '4':
            this['iPromoteScore'] = 0x0;
            continue;
        case '5':
            this['iRank'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteScorePanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['PromoteScorePanel']();
};
ActTotalFinalPeak['PromoteScorePanel']['prototype']['\x5fwrite'] = function(_0x6756a6, _0x43fe78, _0x513677) {
    _0x6756a6['writeStruct'](_0x43fe78, _0x513677);
};
ActTotalFinalPeak['PromoteScorePanel']['prototype']['\x5fread'] = function(_0x212db9, _0x4ca005, _0xef2f58) {
    return _0x212db9['readStruct'](_0x4ca005, !![], _0xef2f58);
};
ActTotalFinalPeak['PromoteScorePanel']['prototype']['writeTo'] = function(_0x5a0794) {
    var _0x4c933a = '4\x7c2\x7c0\x7c3\x7c5\x7c1' ['split']('\x7c'),
    _0x1b31eb = 0x0;
    while ( !! []) {
        switch (_0x4c933a[_0x1b31eb++]) {
        case '0':
            _0x5a0794['writeInt32'](0x2, this['iRank']);
            continue;
        case '1':
            _0x5a0794['writeString'](0x5, this['sPromoteStr']);
            continue;
        case '2':
            _0x5a0794['writeInt32'](0x1, this['iStage']);
            continue;
        case '3':
            _0x5a0794['writeInt32'](0x3, this['iPromote']);
            continue;
        case '4':
            _0x5a0794['writeInt64'](0x0, this['lPid']);
            continue;
        case '5':
            _0x5a0794['writeInt32'](0x4, this['iPromoteScore']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteScorePanel']['prototype']['readFrom'] = function(_0x503c2f) {
    var _0xd35332 = '1\x7c0\x7c3\x7c2\x7c5\x7c4' ['split']('\x7c'),
    _0x55e1d6 = 0x0;
    while ( !! []) {
        switch (_0xd35332[_0x55e1d6++]) {
        case '0':
            this['iStage'] = _0x503c2f['readInt32'](0x1, ![], this['iStage']);
            continue;
        case '1':
            this['lPid'] = _0x503c2f['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '2':
            this['iPromote'] = _0x503c2f['readInt32'](0x3, ![], this['iPromote']);
            continue;
        case '3':
            this['iRank'] = _0x503c2f['readInt32'](0x2, ![], this['iRank']);
            continue;
        case '4':
            this['sPromoteStr'] = _0x503c2f['readString'](0x5, ![], this['sPromoteStr']);
            continue;
        case '5':
            this['iPromoteScore'] = _0x503c2f['readInt32'](0x4, ![], this['iPromoteScore']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorBaseInfo'] = function() {
    var _0x136682 = '0\x7c1\x7c2\x7c6\x7c5\x7c4\x7c3' ['split']('\x7c'),
    _0x5a5d5d = 0x0;
    while ( !! []) {
        switch (_0x136682[_0x5a5d5d++]) {
        case '0':
            this['tJump'] = new ActTotalFinalPeak['JumpChannel']();
            continue;
        case '1':
            this['iGroupType'] = 0x0;
            continue;
        case '2':
            this['iGroupID'] = 0x0;
            continue;
        case '3':
            this['sStageDesc'] = '';
            continue;
        case '4':
            this['sNickName'] = '';
            continue;
        case '5':
            this['sLogo'] = '';
            continue;
        case '6':
            this['sGroupName'] = '';
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorBaseInfo']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['AnchorBaseInfo']();
};
ActTotalFinalPeak['AnchorBaseInfo']['prototype']['\x5fwrite'] = function(_0x1af45b, _0x268852, _0xdaac43) {
    _0x1af45b['writeStruct'](_0x268852, _0xdaac43);
};
ActTotalFinalPeak['AnchorBaseInfo']['prototype']['\x5fread'] = function(_0x2d9ee3, _0x2a5fec, _0x379eb9) {
    return _0x2d9ee3['readStruct'](_0x2a5fec, !![], _0x379eb9);
};
ActTotalFinalPeak['AnchorBaseInfo']['prototype']['writeTo'] = function(_0x54208f) {
    var _0x2baa01 = '1\x7c6\x7c5\x7c3\x7c0\x7c2\x7c4' ['split']('\x7c'),
    _0xfae327 = 0x0;
    while ( !! []) {
        switch (_0x2baa01[_0xfae327++]) {
        case '0':
            _0x54208f['writeString'](0x4, this['sLogo']);
            continue;
        case '1':
            _0x54208f['writeStruct'](0x0, this['tJump']);
            continue;
        case '2':
            _0x54208f['writeString'](0x5, this['sNickName']);
            continue;
        case '3':
            _0x54208f['writeString'](0x3, this['sGroupName']);
            continue;
        case '4':
            _0x54208f['writeString'](0x6, this['sStageDesc']);
            continue;
        case '5':
            _0x54208f['writeInt32'](0x2, this['iGroupID']);
            continue;
        case '6':
            _0x54208f['writeInt32'](0x1, this['iGroupType']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorBaseInfo']['prototype']['readFrom'] = function(_0x43b90b) {
    var _0x598443 = '5\x7c0\x7c1\x7c6\x7c4\x7c2\x7c3' ['split']('\x7c'),
    _0x5400db = 0x0;
    while ( !! []) {
        switch (_0x598443[_0x5400db++]) {
        case '0':
            this['iGroupType'] = _0x43b90b['readInt32'](0x1, ![], this['iGroupType']);
            continue;
        case '1':
            this['iGroupID'] = _0x43b90b['readInt32'](0x2, ![], this['iGroupID']);
            continue;
        case '2':
            this['sNickName'] = _0x43b90b['readString'](0x5, ![], this['sNickName']);
            continue;
        case '3':
            this['sStageDesc'] = _0x43b90b['readString'](0x6, ![], this['sStageDesc']);
            continue;
        case '4':
            this['sLogo'] = _0x43b90b['readString'](0x4, ![], this['sLogo']);
            continue;
        case '5':
            this['tJump'] = _0x43b90b['readStruct'](0x0, ![], this['tJump']);
            continue;
        case '6':
            this['sGroupName'] = _0x43b90b['readString'](0x3, ![], this['sGroupName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BuffInfo'] = function() {
    var _0x17cfc0 = '0\x7c3\x7c1\x7c5\x7c6\x7c4\x7c2' ['split']('\x7c'),
    _0x377bd6 = 0x0;
    while ( !! []) {
        switch (_0x17cfc0[_0x377bd6++]) {
        case '0':
            this['lPid'] = 0x0;
            continue;
        case '1':
            this['sDecoName'] = '';
            continue;
        case '2':
            this['iBuffRate'] = 0x0;
            continue;
        case '3':
            this['iTotalCount'] = 0x0;
            continue;
        case '4':
            this['iLeftSec'] = 0x0;
            continue;
        case '5':
            this['iWinNewBuff'] = 0x0;
            continue;
        case '6':
            this['iWinHour'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BuffInfo']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['BuffInfo']();
};
ActTotalFinalPeak['BuffInfo']['prototype']['\x5fwrite'] = function(_0x3ca879, _0x2bd0f3, _0x105bb7) {
    _0x3ca879['writeStruct'](_0x2bd0f3, _0x105bb7);
};
ActTotalFinalPeak['BuffInfo']['prototype']['\x5fread'] = function(_0x30481e, _0x2402eb, _0x340f67) {
    return _0x30481e['readStruct'](_0x2402eb, !![], _0x340f67);
};
ActTotalFinalPeak['BuffInfo']['prototype']['writeTo'] = function(_0xc38358) {
    var _0x38e4b7 = '3\x7c6\x7c4\x7c5\x7c1\x7c0\x7c2' ['split']('\x7c'),
    _0x2c8107 = 0x0;
    while ( !! []) {
        switch (_0x38e4b7[_0x2c8107++]) {
        case '0':
            _0xc38358['writeInt32'](0x5, this['iLeftSec']);
            continue;
        case '1':
            _0xc38358['writeInt32'](0x4, this['iWinHour']);
            continue;
        case '2':
            _0xc38358['writeInt32'](0x6, this['iBuffRate']);
            continue;
        case '3':
            _0xc38358['writeInt64'](0x0, this['lPid']);
            continue;
        case '4':
            _0xc38358['writeString'](0x2, this['sDecoName']);
            continue;
        case '5':
            _0xc38358['writeInt32'](0x3, this['iWinNewBuff']);
            continue;
        case '6':
            _0xc38358['writeInt32'](0x1, this['iTotalCount']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BuffInfo']['prototype']['readFrom'] = function(_0x1e706e) {
    var _0xd0fe9b = '3\x7c0\x7c6\x7c5\x7c4\x7c2\x7c1' ['split']('\x7c'),
    _0x1e937e = 0x0;
    while ( !! []) {
        switch (_0xd0fe9b[_0x1e937e++]) {
        case '0':
            this['iTotalCount'] = _0x1e706e['readInt32'](0x1, ![], this['iTotalCount']);
            continue;
        case '1':
            this['iBuffRate'] = _0x1e706e['readInt32'](0x6, ![], this['iBuffRate']);
            continue;
        case '2':
            this['iLeftSec'] = _0x1e706e['readInt32'](0x5, ![], this['iLeftSec']);
            continue;
        case '3':
            this['lPid'] = _0x1e706e['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '4':
            this['iWinHour'] = _0x1e706e['readInt32'](0x4, ![], this['iWinHour']);
            continue;
        case '5':
            this['iWinNewBuff'] = _0x1e706e['readInt32'](0x3, ![], this['iWinNewBuff']);
            continue;
        case '6':
            this['sDecoName'] = _0x1e706e['readString'](0x2, ![], this['sDecoName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BattlePanel'] = function() {
    var _0x587720 = '12\x7c14\x7c11\x7c10\x7c5\x7c0\x7c16\x7c8\x7c1\x7c2\x7c6\x7c9\x7c4\x7c15\x7c7\x7c3\x7c13' ['split']('\x7c'),
    _0x5b5545 = 0x0;
    while ( !! []) {
        switch (_0x587720[_0x5b5545++]) {
        case '0':
            this['lDefScore'] = 0x0;
            continue;
        case '1':
            this['iLeftTime'] = 0x0;
            continue;
        case '2':
            this['iReward'] = 0x0;
            continue;
        case '3':
            this['iType'] = 0x0;
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        case '5':
            this['tDefJump'] = new ActTotalFinalPeak['JumpChannel']();
            continue;
        case '6':
            this['iSide'] = 0x0;
            continue;
        case '7':
            this['iGroupId'] = 0x0;
            continue;
        case '8':
            this['sDefLogo'] = '';
            continue;
        case '9':
            this['iKillTime'] = 0x0;
            continue;
        case '10':
            this['sAttLogo'] = '';
            continue;
        case '11':
            this['sAttNickName'] = '';
            continue;
        case '12':
            this['tAttJump'] = new ActTotalFinalPeak['JumpChannel']();
            continue;
        case '13':
            this['iGroupType'] = 0x0;
            continue;
        case '14':
            this['lAttScore'] = 0x0;
            continue;
        case '15':
            this['iRound'] = 0x0;
            continue;
        case '16':
            this['sDefNickName'] = '';
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BattlePanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['BattlePanel']();
};
ActTotalFinalPeak['BattlePanel']['prototype']['\x5fwrite'] = function(_0x4e016c, _0x1dca6b, _0x4af8ea) {
    _0x4e016c['writeStruct'](_0x1dca6b, _0x4af8ea);
};
ActTotalFinalPeak['BattlePanel']['prototype']['\x5fread'] = function(_0x268831, _0x3c47d9, _0x511d98) {
    return _0x268831['readStruct'](_0x3c47d9, !![], _0x511d98);
};
ActTotalFinalPeak['BattlePanel']['prototype']['writeTo'] = function(_0xb365bd) {
    var _0x22a212 = '0\x7c5\x7c13\x7c11\x7c2\x7c14\x7c7\x7c6\x7c3\x7c16\x7c10\x7c12\x7c1\x7c4\x7c9\x7c15\x7c8' ['split']('\x7c'),
    _0x525677 = 0x0;
    while ( !! []) {
        switch (_0x22a212[_0x525677++]) {
        case '0':
            _0xb365bd['writeStruct'](0x0, this['tAttJump']);
            continue;
        case '1':
            _0xb365bd['writeInt64'](0xc, this['lPid']);
            continue;
        case '2':
            _0xb365bd['writeStruct'](0x4, this['tDefJump']);
            continue;
        case '3':
            _0xb365bd['writeInt32'](0x8, this['iLeftTime']);
            continue;
        case '4':
            _0xb365bd['writeInt32'](0xd, this['iRound']);
            continue;
        case '5':
            _0xb365bd['writeInt64'](0x1, this['lAttScore']);
            continue;
        case '6':
            _0xb365bd['writeString'](0x7, this['sDefLogo']);
            continue;
        case '7':
            _0xb365bd['writeString'](0x6, this['sDefNickName']);
            continue;
        case '8':
            _0xb365bd['writeInt32'](0x10, this['iGroupType']);
            continue;
        case '9':
            _0xb365bd['writeInt32'](0xe, this['iGroupId']);
            continue;
        case '10':
            _0xb365bd['writeInt32'](0xa, this['iSide']);
            continue;
        case '11':
            _0xb365bd['writeString'](0x3, this['sAttLogo']);
            continue;
        case '12':
            _0xb365bd['writeInt32'](0xb, this['iKillTime']);
            continue;
        case '13':
            _0xb365bd['writeString'](0x2, this['sAttNickName']);
            continue;
        case '14':
            _0xb365bd['writeInt64'](0x5, this['lDefScore']);
            continue;
        case '15':
            _0xb365bd['writeInt32'](0xf, this['iType']);
            continue;
        case '16':
            _0xb365bd['writeInt32'](0x9, this['iReward']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BattlePanel']['prototype']['readFrom'] = function(_0x236572) {
    var _0x26c754 = '4\x7c7\x7c13\x7c0\x7c9\x7c16\x7c11\x7c14\x7c3\x7c6\x7c5\x7c1\x7c12\x7c15\x7c10\x7c2\x7c8' ['split']('\x7c'),
    _0x306803 = 0x0;
    while ( !! []) {
        switch (_0x26c754[_0x306803++]) {
        case '0':
            this['sAttLogo'] = _0x236572['readString'](0x3, ![], this['sAttLogo']);
            continue;
        case '1':
            this['iKillTime'] = _0x236572['readInt32'](0xb, ![], this['iKillTime']);
            continue;
        case '2':
            this['iType'] = _0x236572['readInt32'](0xf, ![], this['iType']);
            continue;
        case '3':
            this['iLeftTime'] = _0x236572['readInt32'](0x8, ![], this['iLeftTime']);
            continue;
        case '4':
            this['tAttJump'] = _0x236572['readStruct'](0x0, ![], this['tAttJump']);
            continue;
        case '5':
            this['iSide'] = _0x236572['readInt32'](0xa, ![], this['iSide']);
            continue;
        case '6':
            this['iReward'] = _0x236572['readInt32'](0x9, ![], this['iReward']);
            continue;
        case '7':
            this['lAttScore'] = _0x236572['readInt64'](0x1, ![], this['lAttScore']);
            continue;
        case '8':
            this['iGroupType'] = _0x236572['readInt32'](0x10, ![], this['iGroupType']);
            continue;
        case '9':
            this['tDefJump'] = _0x236572['readStruct'](0x4, ![], this['tDefJump']);
            continue;
        case '10':
            this['iGroupId'] = _0x236572['readInt32'](0xe, ![], this['iGroupId']);
            continue;
        case '11':
            this['sDefNickName'] = _0x236572['readString'](0x6, ![], this['sDefNickName']);
            continue;
        case '12':
            this['lPid'] = _0x236572['readInt64'](0xc, ![], this['lPid']);
            continue;
        case '13':
            this['sAttNickName'] = _0x236572['readString'](0x2, ![], this['sAttNickName']);
            continue;
        case '14':
            this['sDefLogo'] = _0x236572['readString'](0x7, ![], this['sDefLogo']);
            continue;
        case '15':
            this['iRound'] = _0x236572['readInt32'](0xd, ![], this['iRound']);
            continue;
        case '16':
            this['lDefScore'] = _0x236572['readInt64'](0x5, ![], this['lDefScore']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['BattleResultPanel'] = function() {
    this['tBattle'] = new ActTotalFinalPeak['BattlePanel']();
    this['lDeltaScore'] = 0x0;
    this['iResult'] = 0x0;
};
ActTotalFinalPeak['BattleResultPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['BattleResultPanel']();
};
ActTotalFinalPeak['BattleResultPanel']['prototype']['\x5fwrite'] = function(_0x406e08, _0x62417f, _0x3b0ed0) {
    _0x406e08['writeStruct'](_0x62417f, _0x3b0ed0);
};
ActTotalFinalPeak['BattleResultPanel']['prototype']['\x5fread'] = function(_0x3b3f22, _0x42b4bf, _0x257b67) {
    return _0x3b3f22['readStruct'](_0x42b4bf, !![], _0x257b67);
};
ActTotalFinalPeak['BattleResultPanel']['prototype']['writeTo'] = function(_0x5148fd) {
    _0x5148fd['writeStruct'](0x0, this['tBattle']);
    _0x5148fd['writeInt64'](0x1, this['lDeltaScore']);
    _0x5148fd['writeInt32'](0x2, this['iResult']);
};
ActTotalFinalPeak['BattleResultPanel']['prototype']['readFrom'] = function(_0x7f3921) {
    this['tBattle'] = _0x7f3921['readStruct'](0x0, ![], this['tBattle']);
    this['lDeltaScore'] = _0x7f3921['readInt64'](0x1, ![], this['lDeltaScore']);
    this['iResult'] = _0x7f3921['readInt32'](0x2, ![], this['iResult']);
};
ActTotalFinalPeak['BattleFirstItem'] = function() {
    this['lUid'] = 0x0;
    this['iSentItemFlag'] = 0x0;
    this['lPid'] = 0x0;
};
ActTotalFinalPeak['BattleFirstItem']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['BattleFirstItem']();
};
ActTotalFinalPeak['BattleFirstItem']['prototype']['\x5fwrite'] = function(_0x5aa4a9, _0x1fe368, _0x1b4221) {
    _0x5aa4a9['writeStruct'](_0x1fe368, _0x1b4221);
};
ActTotalFinalPeak['BattleFirstItem']['prototype']['\x5fread'] = function(_0x262629, _0x183816, _0x54dcec) {
    return _0x262629['readStruct'](_0x183816, !![], _0x54dcec);
};
ActTotalFinalPeak['BattleFirstItem']['prototype']['writeTo'] = function(_0x26b674) {
    _0x26b674['writeInt64'](0x0, this['lUid']);
    _0x26b674['writeInt32'](0x1, this['iSentItemFlag']);
    _0x26b674['writeInt64'](0x2, this['lPid']);
};
ActTotalFinalPeak['BattleFirstItem']['prototype']['readFrom'] = function(_0x43e839) {
    this['lUid'] = _0x43e839['readInt64'](0x0, ![], this['lUid']);
    this['iSentItemFlag'] = _0x43e839['readInt32'](0x1, ![], this['iSentItemFlag']);
    this['lPid'] = _0x43e839['readInt64'](0x2, ![], this['lPid']);
};
ActTotalFinalPeak['AnchorRank'] = function() {
    var _0x3a664b = '1\x7c4\x7c5\x7c3\x7c2\x7c0' ['split']('\x7c'),
    _0x12356f = 0x0;
    while ( !! []) {
        switch (_0x3a664b[_0x12356f++]) {
        case '0':
            this['iStage'] = 0x0;
            continue;
        case '1':
            this['lPid'] = 0x0;
            continue;
        case '2':
            this['iPromote'] = 0x0;
            continue;
        case '3':
            this['vRank'] = new Taf['Vector'](new ActTotalFinalPeak['AnchorRankItem']());
            continue;
        case '4':
            this['iGroupType'] = 0x0;
            continue;
        case '5':
            this['iGroupID'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorRank']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['AnchorRank']();
};
ActTotalFinalPeak['AnchorRank']['prototype']['\x5fwrite'] = function(_0x5e3e78, _0x3b8d65, _0x12c5dc) {
    _0x5e3e78['writeStruct'](_0x3b8d65, _0x12c5dc);
};
ActTotalFinalPeak['AnchorRank']['prototype']['\x5fread'] = function(_0x17310c, _0x3d7a19, _0x5de218) {
    return _0x17310c['readStruct'](_0x3d7a19, !![], _0x5de218);
};
ActTotalFinalPeak['AnchorRank']['prototype']['writeTo'] = function(_0xf08f9c) {
    var _0x583139 = '1\x7c0\x7c5\x7c4\x7c3\x7c2' ['split']('\x7c'),
    _0x50e705 = 0x0;
    while ( !! []) {
        switch (_0x583139[_0x50e705++]) {
        case '0':
            _0xf08f9c['writeInt32'](0x1, this['iGroupType']);
            continue;
        case '1':
            _0xf08f9c['writeInt64'](0x0, this['lPid']);
            continue;
        case '2':
            _0xf08f9c['writeInt32'](0x5, this['iStage']);
            continue;
        case '3':
            _0xf08f9c['writeInt32'](0x4, this['iPromote']);
            continue;
        case '4':
            _0xf08f9c['writeVector'](0x3, this['vRank']);
            continue;
        case '5':
            _0xf08f9c['writeInt32'](0x2, this['iGroupID']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorRank']['prototype']['readFrom'] = function(_0x30f804) {
    var _0x38e9cd = '3\x7c2\x7c4\x7c1\x7c5\x7c0' ['split']('\x7c'),
    _0xb1c5a7 = 0x0;
    while ( !! []) {
        switch (_0x38e9cd[_0xb1c5a7++]) {
        case '0':
            this['iStage'] = _0x30f804['readInt32'](0x5, ![], this['iStage']);
            continue;
        case '1':
            this['vRank'] = _0x30f804['readVector'](0x3, ![], this['vRank']);
            continue;
        case '2':
            this['iGroupType'] = _0x30f804['readInt32'](0x1, ![], this['iGroupType']);
            continue;
        case '3':
            this['lPid'] = _0x30f804['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '4':
            this['iGroupID'] = _0x30f804['readInt32'](0x2, ![], this['iGroupID']);
            continue;
        case '5':
            this['iPromote'] = _0x30f804['readInt32'](0x4, ![], this['iPromote']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorRankItem'] = function() {
    var _0x984e3b = '0\x7c1\x7c4\x7c2\x7c3' ['split']('\x7c'),
    _0xd0b9b3 = 0x0;
    while ( !! []) {
        switch (_0x984e3b[_0xd0b9b3++]) {
        case '0':
            this['tJump'] = new ActTotalFinalPeak['JumpChannel']();
            continue;
        case '1':
            this['iRank'] = 0x0;
            continue;
        case '2':
            this['sNickName'] = '';
            continue;
        case '3':
            this['sLogo'] = '';
            continue;
        case '4':
            this['lScore'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorRankItem']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['AnchorRankItem']();
};
ActTotalFinalPeak['AnchorRankItem']['prototype']['\x5fwrite'] = function(_0x19c216, _0x118b81, _0x52c17f) {
    _0x19c216['writeStruct'](_0x118b81, _0x52c17f);
};
ActTotalFinalPeak['AnchorRankItem']['prototype']['\x5fread'] = function(_0x5513bb, _0x3e20b6, _0x4525b0) {
    return _0x5513bb['readStruct'](_0x3e20b6, !![], _0x4525b0);
};
ActTotalFinalPeak['AnchorRankItem']['prototype']['writeTo'] = function(_0x34ddb5) {
    var _0x3d00e9 = '0\x7c1\x7c3\x7c4\x7c2' ['split']('\x7c'),
    _0x37ed40 = 0x0;
    while ( !! []) {
        switch (_0x3d00e9[_0x37ed40++]) {
        case '0':
            _0x34ddb5['writeStruct'](0x0, this['tJump']);
            continue;
        case '1':
            _0x34ddb5['writeInt32'](0x1, this['iRank']);
            continue;
        case '2':
            _0x34ddb5['writeString'](0x4, this['sLogo']);
            continue;
        case '3':
            _0x34ddb5['writeInt64'](0x2, this['lScore']);
            continue;
        case '4':
            _0x34ddb5['writeString'](0x3, this['sNickName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['AnchorRankItem']['prototype']['readFrom'] = function(_0x5910cc) {
    var _0x2572c9 = '0\x7c4\x7c3\x7c2\x7c1' ['split']('\x7c'),
    _0x41d1c0 = 0x0;
    while ( !! []) {
        switch (_0x2572c9[_0x41d1c0++]) {
        case '0':
            this['tJump'] = _0x5910cc['readStruct'](0x0, ![], this['tJump']);
            continue;
        case '1':
            this['sLogo'] = _0x5910cc['readString'](0x4, ![], this['sLogo']);
            continue;
        case '2':
            this['sNickName'] = _0x5910cc['readString'](0x3, ![], this['sNickName']);
            continue;
        case '3':
            this['lScore'] = _0x5910cc['readInt64'](0x2, ![], this['lScore']);
            continue;
        case '4':
            this['iRank'] = _0x5910cc['readInt32'](0x1, ![], this['iRank']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['GroupMatchRank'] = function() {
    this['iGroupType'] = 0x0;
    this['iGroupID'] = 0x0;
    this['vRank'] = new Taf['Vector'](new ActTotalFinalPeak['GroupMatchItem']());
    this['isFinal'] = 0x0;
};
ActTotalFinalPeak['GroupMatchRank']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['GroupMatchRank']();
};
ActTotalFinalPeak['GroupMatchRank']['prototype']['\x5fwrite'] = function(_0x5bed41, _0x7d472d, _0x5ed55e) {
    _0x5bed41['writeStruct'](_0x7d472d, _0x5ed55e);
};
ActTotalFinalPeak['GroupMatchRank']['prototype']['\x5fread'] = function(_0x3241c2, _0x581070, _0x372b74) {
    return _0x3241c2['readStruct'](_0x581070, !![], _0x372b74);
};
ActTotalFinalPeak['GroupMatchRank']['prototype']['writeTo'] = function(_0x3f743c) {
    _0x3f743c['writeInt32'](0x0, this['iGroupType']);
    _0x3f743c['writeInt32'](0x1, this['iGroupID']);
    _0x3f743c['writeVector'](0x2, this['vRank']);
    _0x3f743c['writeInt32'](0x3, this['isFinal']);
};
ActTotalFinalPeak['GroupMatchRank']['prototype']['readFrom'] = function(_0x2388c6) {
    this['iGroupType'] = _0x2388c6['readInt32'](0x0, ![], this['iGroupType']);
    this['iGroupID'] = _0x2388c6['readInt32'](0x1, ![], this['iGroupID']);
    this['vRank'] = _0x2388c6['readVector'](0x2, ![], this['vRank']);
    this['isFinal'] = _0x2388c6['readInt32'](0x3, ![], this['isFinal']);
};
ActTotalFinalPeak['GroupMatchItem'] = function() {
    this['tAttItem'] = new ActTotalFinalPeak['AnchorRankItem']();
    this['tDefItem'] = new ActTotalFinalPeak['AnchorRankItem']();
    this['vHover'] = new Taf['Vector'](new ActTotalFinalPeak['GroupMatchHoverScore']());
};
ActTotalFinalPeak['GroupMatchItem']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['GroupMatchItem']();
};
ActTotalFinalPeak['GroupMatchItem']['prototype']['\x5fwrite'] = function(_0x53dc69, _0x34b9bf, _0x20084f) {
    _0x53dc69['writeStruct'](_0x34b9bf, _0x20084f);
};
ActTotalFinalPeak['GroupMatchItem']['prototype']['\x5fread'] = function(_0x29d885, _0x474120, _0x562346) {
    return _0x29d885['readStruct'](_0x474120, !![], _0x562346);
};
ActTotalFinalPeak['GroupMatchItem']['prototype']['writeTo'] = function(_0x39c727) {
    _0x39c727['writeStruct'](0x0, this['tAttItem']);
    _0x39c727['writeStruct'](0x1, this['tDefItem']);
    _0x39c727['writeVector'](0x2, this['vHover']);
};
ActTotalFinalPeak['GroupMatchItem']['prototype']['readFrom'] = function(_0x454fde) {
    this['tAttItem'] = _0x454fde['readStruct'](0x0, ![], this['tAttItem']);
    this['tDefItem'] = _0x454fde['readStruct'](0x1, ![], this['tDefItem']);
    this['vHover'] = _0x454fde['readVector'](0x2, ![], this['vHover']);
};
ActTotalFinalPeak['GroupMatchHoverScore'] = function() {
    this['iHour'] = 0x0;
    this['lLeftScore'] = 0x0;
    this['lRightScore'] = 0x0;
};
ActTotalFinalPeak['GroupMatchHoverScore']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['GroupMatchHoverScore']();
};
ActTotalFinalPeak['GroupMatchHoverScore']['prototype']['\x5fwrite'] = function(_0x28cb67, _0x251bb0, _0x501f8a) {
    _0x28cb67['writeStruct'](_0x251bb0, _0x501f8a);
};
ActTotalFinalPeak['GroupMatchHoverScore']['prototype']['\x5fread'] = function(_0x2f6f0f, _0xcf7a9d, _0x162115) {
    return _0x2f6f0f['readStruct'](_0xcf7a9d, !![], _0x162115);
};
ActTotalFinalPeak['GroupMatchHoverScore']['prototype']['writeTo'] = function(_0x56a486) {
    _0x56a486['writeInt32'](0x0, this['iHour']);
    _0x56a486['writeInt64'](0x1, this['lLeftScore']);
    _0x56a486['writeInt32'](0x2, this['lRightScore']);
};
ActTotalFinalPeak['GroupMatchHoverScore']['prototype']['readFrom'] = function(_0x358634) {
    this['iHour'] = _0x358634['readInt32'](0x0, ![], this['iHour']);
    this['lLeftScore'] = _0x358634['readInt64'](0x1, ![], this['lLeftScore']);
    this['lRightScore'] = _0x358634['readInt32'](0x2, ![], this['lRightScore']);
};
ActTotalFinalPeak['AnchorHourRank'] = function() {
    this['iHour'] = 0x0;
    this['vRank'] = new Taf['Vector'](new ActTotalFinalPeak['AnchorRankItem']());
    this['iLightUp'] = 0x0;
};
ActTotalFinalPeak['AnchorHourRank']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['AnchorHourRank']();
};
ActTotalFinalPeak['AnchorHourRank']['prototype']['\x5fwrite'] = function(_0x501741, _0x4a1c3f, _0x24acb3) {
    _0x501741['writeStruct'](_0x4a1c3f, _0x24acb3);
};
ActTotalFinalPeak['AnchorHourRank']['prototype']['\x5fread'] = function(_0x335637, _0x1416f2, _0x1fcec5) {
    return _0x335637['readStruct'](_0x1416f2, !![], _0x1fcec5);
};
ActTotalFinalPeak['AnchorHourRank']['prototype']['writeTo'] = function(_0x36a414) {
    _0x36a414['writeInt32'](0x0, this['iHour']);
    _0x36a414['writeVector'](0x1, this['vRank']);
    _0x36a414['writeInt32'](0x2, this['iLightUp']);
};
ActTotalFinalPeak['AnchorHourRank']['prototype']['readFrom'] = function(_0x393855) {
    this['iHour'] = _0x393855['readInt32'](0x0, ![], this['iHour']);
    this['vRank'] = _0x393855['readVector'](0x1, ![], this['vRank']);
    this['iLightUp'] = _0x393855['readInt32'](0x2, ![], this['iLightUp']);
};
ActTotalFinalPeak['FansContributionRank'] = function() {
    var _0x48b598 = '4\x7c2\x7c1\x7c3\x7c0' ['split']('\x7c'),
    _0x494525 = 0x0;
    while ( !! []) {
        switch (_0x48b598[_0x494525++]) {
        case '0':
            this['iUpperlimit'] = 0x0;
            continue;
        case '1':
            this['iGroupID'] = 0x0;
            continue;
        case '2':
            this['iGroupType'] = 0x0;
            continue;
        case '3':
            this['vRank'] = new Taf['Vector'](new ActTotalFinalPeak['FansRankItem']());
            continue;
        case '4':
            this['lPid'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FansContributionRank']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['FansContributionRank']();
};
ActTotalFinalPeak['FansContributionRank']['prototype']['\x5fwrite'] = function(_0x313f95, _0x498e93, _0x1621fd) {
    _0x313f95['writeStruct'](_0x498e93, _0x1621fd);
};
ActTotalFinalPeak['FansContributionRank']['prototype']['\x5fread'] = function(_0x4f1a85, _0x27d5d7, _0x1b8e4a) {
    return _0x4f1a85['readStruct'](_0x27d5d7, !![], _0x1b8e4a);
};
ActTotalFinalPeak['FansContributionRank']['prototype']['writeTo'] = function(_0x4112eb) {
    var _0x59a2b4 = '0\x7c4\x7c3\x7c1\x7c2' ['split']('\x7c'),
    _0x542fde = 0x0;
    while ( !! []) {
        switch (_0x59a2b4[_0x542fde++]) {
        case '0':
            _0x4112eb['writeInt64'](0x0, this['lPid']);
            continue;
        case '1':
            _0x4112eb['writeVector'](0x3, this['vRank']);
            continue;
        case '2':
            _0x4112eb['writeInt32'](0x4, this['iUpperlimit']);
            continue;
        case '3':
            _0x4112eb['writeInt32'](0x2, this['iGroupID']);
            continue;
        case '4':
            _0x4112eb['writeInt32'](0x1, this['iGroupType']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FansContributionRank']['prototype']['readFrom'] = function(_0x3cae99) {
    var _0x41f1d0 = '3\x7c2\x7c0\x7c1\x7c4' ['split']('\x7c'),
    _0xd9f6d6 = 0x0;
    while ( !! []) {
        switch (_0x41f1d0[_0xd9f6d6++]) {
        case '0':
            this['iGroupID'] = _0x3cae99['readInt32'](0x2, ![], this['iGroupID']);
            continue;
        case '1':
            this['vRank'] = _0x3cae99['readVector'](0x3, ![], this['vRank']);
            continue;
        case '2':
            this['iGroupType'] = _0x3cae99['readInt32'](0x1, ![], this['iGroupType']);
            continue;
        case '3':
            this['lPid'] = _0x3cae99['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '4':
            this['iUpperlimit'] = _0x3cae99['readInt32'](0x4, ![], this['iUpperlimit']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FansRankItem'] = function() {
    var _0x36257e = '1\x7c4\x7c0\x7c3\x7c2' ['split']('\x7c'),
    _0x57ed85 = 0x0;
    while ( !! []) {
        switch (_0x36257e[_0x57ed85++]) {
        case '0':
            this['lScore'] = 0x0;
            continue;
        case '1':
            this['lUid'] = 0x0;
            continue;
        case '2':
            this['sLogo'] = '';
            continue;
        case '3':
            this['sNickName'] = '';
            continue;
        case '4':
            this['iRank'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FansRankItem']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['FansRankItem']();
};
ActTotalFinalPeak['FansRankItem']['prototype']['\x5fwrite'] = function(_0x1d8f04, _0x37d253, _0x1e8124) {
    _0x1d8f04['writeStruct'](_0x37d253, _0x1e8124);
};
ActTotalFinalPeak['FansRankItem']['prototype']['\x5fread'] = function(_0xdf4fd6, _0x100670, _0x3a0ac6) {
    return _0xdf4fd6['readStruct'](_0x100670, !![], _0x3a0ac6);
};
ActTotalFinalPeak['FansRankItem']['prototype']['writeTo'] = function(_0x2fce18) {
    var _0x2debc0 = '2\x7c0\x7c1\x7c4\x7c3' ['split']('\x7c'),
    _0x36c3cf = 0x0;
    while ( !! []) {
        switch (_0x2debc0[_0x36c3cf++]) {
        case '0':
            _0x2fce18['writeInt32'](0x1, this['iRank']);
            continue;
        case '1':
            _0x2fce18['writeInt64'](0x2, this['lScore']);
            continue;
        case '2':
            _0x2fce18['writeInt64'](0x0, this['lUid']);
            continue;
        case '3':
            _0x2fce18['writeString'](0x4, this['sLogo']);
            continue;
        case '4':
            _0x2fce18['writeString'](0x3, this['sNickName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FansRankItem']['prototype']['readFrom'] = function(_0x312cdc) {
    var _0x3bf40c = '2\x7c3\x7c1\x7c4\x7c0' ['split']('\x7c'),
    _0x2ba847 = 0x0;
    while ( !! []) {
        switch (_0x3bf40c[_0x2ba847++]) {
        case '0':
            this['sLogo'] = _0x312cdc['readString'](0x4, ![], this['sLogo']);
            continue;
        case '1':
            this['lScore'] = _0x312cdc['readInt64'](0x2, ![], this['lScore']);
            continue;
        case '2':
            this['lUid'] = _0x312cdc['readInt64'](0x0, ![], this['lUid']);
            continue;
        case '3':
            this['iRank'] = _0x312cdc['readInt32'](0x1, ![], this['iRank']);
            continue;
        case '4':
            this['sNickName'] = _0x312cdc['readString'](0x3, ![], this['sNickName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteResultPanel'] = function() {
    var _0xd83d37 = '3\x7c0\x7c2\x7c6\x7c1\x7c7\x7c5\x7c4' ['split']('\x7c'),
    _0x20a462 = 0x0;
    while ( !! []) {
        switch (_0xd83d37[_0x20a462++]) {
        case '0':
            this['sNickName'] = '';
            continue;
        case '1':
            this['iGroupType'] = 0x0;
            continue;
        case '2':
            this['sDesc1'] = '';
            continue;
        case '3':
            this['lPid'] = 0x0;
            continue;
        case '4':
            this['iPromoteType'] = 0x0;
            continue;
        case '5':
            this['sGroupName'] = '';
            continue;
        case '6':
            this['sDesc2'] = '';
            continue;
        case '7':
            this['iGroupID'] = 0x0;
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteResultPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['PromoteResultPanel']();
};
ActTotalFinalPeak['PromoteResultPanel']['prototype']['\x5fwrite'] = function(_0x4699f9, _0x5729aa, _0x561b3c) {
    _0x4699f9['writeStruct'](_0x5729aa, _0x561b3c);
};
ActTotalFinalPeak['PromoteResultPanel']['prototype']['\x5fread'] = function(_0x2b1c4f, _0x219c1b, _0x5f3f7a) {
    return _0x2b1c4f['readStruct'](_0x219c1b, !![], _0x5f3f7a);
};
ActTotalFinalPeak['PromoteResultPanel']['prototype']['writeTo'] = function(_0x3695b9) {
    var _0x1912b7 = '1\x7c6\x7c5\x7c2\x7c3\x7c4\x7c0\x7c7' ['split']('\x7c'),
    _0x13f309 = 0x0;
    while ( !! []) {
        switch (_0x1912b7[_0x13f309++]) {
        case '0':
            _0x3695b9['writeString'](0x6, this['sGroupName']);
            continue;
        case '1':
            _0x3695b9['writeInt64'](0x0, this['lPid']);
            continue;
        case '2':
            _0x3695b9['writeString'](0x3, this['sDesc2']);
            continue;
        case '3':
            _0x3695b9['writeInt32'](0x4, this['iGroupType']);
            continue;
        case '4':
            _0x3695b9['writeInt32'](0x5, this['iGroupID']);
            continue;
        case '5':
            _0x3695b9['writeString'](0x2, this['sDesc1']);
            continue;
        case '6':
            _0x3695b9['writeString'](0x1, this['sNickName']);
            continue;
        case '7':
            _0x3695b9['writeInt32'](0x7, this['iPromoteType']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['PromoteResultPanel']['prototype']['readFrom'] = function(_0x19e14b) {
    var _0x102499 = '6\x7c3\x7c1\x7c0\x7c2\x7c5\x7c7\x7c4' ['split']('\x7c'),
    _0x120568 = 0x0;
    while ( !! []) {
        switch (_0x102499[_0x120568++]) {
        case '0':
            this['sDesc2'] = _0x19e14b['readString'](0x3, ![], this['sDesc2']);
            continue;
        case '1':
            this['sDesc1'] = _0x19e14b['readString'](0x2, ![], this['sDesc1']);
            continue;
        case '2':
            this['iGroupType'] = _0x19e14b['readInt32'](0x4, ![], this['iGroupType']);
            continue;
        case '3':
            this['sNickName'] = _0x19e14b['readString'](0x1, ![], this['sNickName']);
            continue;
        case '4':
            this['iPromoteType'] = _0x19e14b['readInt32'](0x7, ![], this['iPromoteType']);
            continue;
        case '5':
            this['iGroupID'] = _0x19e14b['readInt32'](0x5, ![], this['iGroupID']);
            continue;
        case '6':
            this['lPid'] = _0x19e14b['readInt64'](0x0, ![], this['lPid']);
            continue;
        case '7':
            this['sGroupName'] = _0x19e14b['readString'](0x6, ![], this['sGroupName']);
            continue;
        }
        break;
    }
};
ActTotalFinalPeak['FinalResultPanel'] = function() {
    this['tChampion'] = new ActTotalFinalPeak['AnchorBaseInfo']();
    this['tSecond'] = new ActTotalFinalPeak['AnchorBaseInfo']();
    this['tThird'] = new ActTotalFinalPeak['AnchorBaseInfo']();
};
ActTotalFinalPeak['FinalResultPanel']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['FinalResultPanel']();
};
ActTotalFinalPeak['FinalResultPanel']['prototype']['\x5fwrite'] = function(_0x43dcd3, _0x336249, _0x3ba66b) {
    _0x43dcd3['writeStruct'](_0x336249, _0x3ba66b);
};
ActTotalFinalPeak['FinalResultPanel']['prototype']['\x5fread'] = function(_0x3177e6, _0x1262b8, _0x27c39d) {
    return _0x3177e6['readStruct'](_0x1262b8, !![], _0x27c39d);
};
ActTotalFinalPeak['FinalResultPanel']['prototype']['writeTo'] = function(_0x4f0a40) {
    _0x4f0a40['writeStruct'](0x0, this['tChampion']);
    _0x4f0a40['writeStruct'](0x1, this['tSecond']);
    _0x4f0a40['writeStruct'](0x2, this['tThird']);
};
ActTotalFinalPeak['FinalResultPanel']['prototype']['readFrom'] = function(_0x3ecf74) {
    this['tChampion'] = _0x3ecf74['readStruct'](0x0, ![], this['tChampion']);
    this['tSecond'] = _0x3ecf74['readStruct'](0x1, ![], this['tSecond']);
    this['tThird'] = _0x3ecf74['readStruct'](0x2, ![], this['tThird']);
};
ActTotalFinalPeak['HideUI'] = function() {
    this['lPid'] = 0x0;
};
ActTotalFinalPeak['HideUI']['prototype']['\x5fclone'] = function() {
    return new ActTotalFinalPeak['HideUI']();
};
ActTotalFinalPeak['HideUI']['prototype']['\x5fwrite'] = function(_0x198350, _0x1999c7, _0x38f386) {
    _0x198350['writeStruct'](_0x1999c7, _0x38f386);
};
ActTotalFinalPeak['HideUI']['prototype']['\x5fread'] = function(_0x23dd60, _0x1248a3, _0x38fdf2) {
    return _0x23dd60['readStruct'](_0x1248a3, !![], _0x38fdf2);
};
ActTotalFinalPeak['HideUI']['prototype']['writeTo'] = function(_0x463d5f) {
    _0x463d5f['writeInt64'](0x0, this['lPid']);
};
ActTotalFinalPeak['HideUI']['prototype']['readFrom'] = function(_0x173c40) {
    this['lPid'] = _0x173c40['readInt64'](0x0, ![], this['lPid']);
};
var ActLiveCall = {};
ActLiveCall['GetBattleTeamInfoReq'] = function() {
    this['iLoginType'] = 0x0;
    this['lUid'] = 0x0;
    this['lPid'] = 0x0;
};
ActLiveCall['GetBattleTeamInfoReq']['prototype']['\x5fclone'] = function() {
    return new ActLiveCall['GetBattleTeamInfoReq']();
};
ActLiveCall['GetBattleTeamInfoReq']['prototype']['\x5fwrite'] = function(_0x5dfc87, _0x128d45, _0x32ce42) {
    _0x5dfc87['writeStruct'](_0x128d45, _0x32ce42);
};
ActLiveCall['GetBattleTeamInfoReq']['prototype']['\x5fread'] = function(_0x4b3d86, _0x496cca, _0x3fe1f5) {
    return _0x4b3d86['readStruct'](_0x496cca, !![], _0x3fe1f5);
};
ActLiveCall['GetBattleTeamInfoReq']['prototype']['writeTo'] = function(_0x318bcf) {
    _0x318bcf['writeInt32'](0x0, this['iLoginType']);
    _0x318bcf['writeInt64'](0x1, this['lUid']);
    _0x318bcf['writeInt64'](0x2, this['lPid']);
};
ActLiveCall['GetBattleTeamInfoReq']['prototype']['readFrom'] = function(_0x5580a8) {
    this['iLoginType'] = _0x5580a8['readInt32'](0x0, ![], this['iLoginType']);
    this['lUid'] = _0x5580a8['readInt64'](0x1, ![], this['lUid']);
    this['lPid'] = _0x5580a8['readInt64'](0x2, ![], this['lPid']);
};
ActLiveCall['GetBattleTeamInfoRsp'] = function() {
    this['vInfo'] = new Taf['Vector'](new ActLiveCall['GetBattleItem']());
};
ActLiveCall['GetBattleTeamInfoRsp']['prototype']['\x5fclone'] = function() {
    return new ActLiveCall['GetBattleTeamInfoRsp']();
};
ActLiveCall['GetBattleTeamInfoRsp']['prototype']['\x5fwrite'] = function(_0x18713e, _0x12459f, _0x502398) {
    _0x18713e['writeStruct'](_0x12459f, _0x502398);
};
ActLiveCall['GetBattleTeamInfoRsp']['prototype']['\x5fread'] = function(_0x3601a3, _0x9f5e6c, _0x33cb0f) {
    return _0x3601a3['readStruct'](_0x9f5e6c, !![], _0x33cb0f);
};
ActLiveCall['GetBattleTeamInfoRsp']['prototype']['writeTo'] = function(_0x347f31) {
    _0x347f31['writeVector'](0x0, this['vInfo']);
};
ActLiveCall['GetBattleTeamInfoRsp']['prototype']['readFrom'] = function(_0x39593e) {
    this['vInfo'] = _0x39593e['readVector'](0x0, ![], this['vInfo']);
};
ActLiveCall['GetBattleItem'] = function() {
    this['lTeamId'] = 0x0;
    this['sTeamName'] = '';
    this['sTeamLogoUrl'] = '';
    this['iScore'] = 0x0;
};
ActLiveCall['GetBattleItem']['prototype']['\x5fclone'] = function() {
    return new ActLiveCall['GetBattleItem']();
};
ActLiveCall['GetBattleItem']['prototype']['\x5fwrite'] = function(_0x582583, _0x112d31, _0x16a425) {
    _0x582583['writeStruct'](_0x112d31, _0x16a425);
};
ActLiveCall['GetBattleItem']['prototype']['\x5fread'] = function(_0x381653, _0xcac33d, _0x4af140) {
    return _0x381653['readStruct'](_0xcac33d, !![], _0x4af140);
};
ActLiveCall['GetBattleItem']['prototype']['writeTo'] = function(_0x506dbe) {
    _0x506dbe['writeInt64'](0x0, this['lTeamId']);
    _0x506dbe['writeString'](0x1, this['sTeamName']);
    _0x506dbe['writeString'](0x2, this['sTeamLogoUrl']);
    _0x506dbe['writeInt64'](0x3, this['iScore']);
};
ActLiveCall['GetBattleItem']['prototype']['readFrom'] = function(_0x152e7d) {
    this['lTeamId'] = _0x152e7d['readInt64'](0x0, ![], this['lTeamId']);
    this['sTeamName'] = _0x152e7d['readString'](0x1, ![], this['sTeamName']);
    this['sTeamLogoUrl'] = _0x152e7d['readString'](0x2, ![], this['sTeamLogoUrl']);
    this['iScore'] = _0x152e7d['readInt64'](0x3, ![], this['iScore']);
};

module['exports']={
    GUESS:GUESS,
    QAGuessWatchLive:QAGuessWatchLive,
    MatchGuess:MatchGuess,
    ActWatchTor:ActWatchTor,
    ActTotalFinalPeak:ActTotalFinalPeak,
    ActLiveCall:ActLiveCall
};