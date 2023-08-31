const Taf = require('./Taf.js');

var HUYA = {};

HUYA.EWebSocketCommandType = {
    EWSCmd_NULL: 0,
    EWSCmd_RegisterReq: 1,
    EWSCmd_RegisterRsp: 2,
    EWSCmd_WupReq: 3,
    EWSCmd_WupRsp: 4,
    EWSCmdC2S_HeartBeat: 5,
    EWSCmdS2C_HeartBeatAck: 6,
    EWSCmdS2C_MsgPushReq: 7,
    EWSCmdC2S_DeregisterReq: 8,
    EWSCmdS2C_DeRegisterRsp: 9,
    EWSCmdC2S_VerifyCookieReq: 10,
    EWSCmdS2C_VerifyCookieRsp: 11,
    EWSCmdC2S_VerifyHuyaTokenReq: 12,
    EWSCmdS2C_VerifyHuyaTokenRsp: 13,
    EWSCmdC2S_UNVerifyReq: 14,
    EWSCmdS2C_UNVerifyRsp: 15,
    EWSCmdC2S_RegisterGroupReq: 16,
    EWSCmdS2C_RegisterGroupRsp: 17,
    EWSCmdC2S_UnRegisterGroupReq: 18,
    EWSCmdS2C_UnRegisterGroupRsp: 19,
    EWSCmdC2S_HeartBeatReq: 20,
    EWSCmdS2C_HeartBeatRsp: 21,
    EWSCmdS2C_MsgPushReq_V2: 22,
    EWSCmdC2S_UpdateUserExpsReq: 23,
    EWSCmdS2C_UpdateUserExpsRsp: 24,
    EWSCmdC2S_WSHistoryMsgReq: 25,
    EWSCmdS2C_WSHistoryMsgRsp: 26,
    EWSCmdS2C_EnterP2P: 27,
    EWSCmdS2C_EnterP2PAck: 28,
    EWSCmdS2C_ExitP2P: 29,
    EWSCmdS2C_ExitP2PAck: 30,
    EWSCmdC2S_SyncGroupReq: 31,
    EWSCmdS2C_SyncGroupRsp: 32,
    EWSCmdC2S_UpdateUserInfoReq: 33,
    EWSCmdS2C_UpdateUserInfoRsp: 34,
    EWSCmdC2S_MsgAckReq: 35,
    EWSCmdS2C_MsgAckRsp: 36
};

HUYA.EClientTemplateType = {
    TPL_LIANYUN: 128,
    TPL_PC: 64,
    TPL_WEB: 32,
    TPL_JIEDAI: 16,
    TPL_TEXAS: 8,
    TPL_MATCH: 4,
    TPL_HUYAAPP: 2,
    TPL_MIRROR: 1
};

HUYA.EStreamLineType = {
    STREAM_LINE_OLD_YY: 0,
    STREAM_LINE_WS: 1,
    STREAM_LINE_NEW_YY: 2,
    STREAM_LINE_AL: 3,
    STREAM_LINE_HUYA: 4,
    STREAM_LINE_TX: 5,
    STREAM_LINE_CDN: 8
}

HUYA.WSRegisterGroupReq = function () {
    this.vGroupId = new Taf.Vector(new Taf.STRING);
    this.sToken = ""
}
HUYA.WSRegisterGroupReq.prototype._clone = function () {
    return new HUYA.WSRegisterGroupReq
}
HUYA.WSRegisterGroupReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.WSRegisterGroupReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.WSRegisterGroupReq.prototype.writeTo = function (t) {
    t.writeVector(0, this.vGroupId);
    t.writeString(1, this.sToken)
}
HUYA.WSRegisterGroupReq.prototype.readFrom = function (t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId);
    this.sToken = t.readString(1, false, this.sToken)
}

HUYA.WebSocketCommand = function () {
    this.iCmdType = 0;
    this.vData = new Taf.BinBuffer;
    this.lRequestId = 0;
    this.traceId = ""
}
HUYA.WebSocketCommand.prototype._clone = function () {
    return new HUYA.WebSocketCommand
}
HUYA.WebSocketCommand.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.WebSocketCommand.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.WebSocketCommand.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iCmdType);
    t.writeBytes(1, this.vData);
    t.writeInt64(2, this.lRequestId);
    t.writeString(3, this.traceId);
}
HUYA.WebSocketCommand.prototype.readFrom = function (t) {
    this.iCmdType = t.readInt32(0, false, this.iCmdType);
    this.vData = t.readBytes(1, false, this.vData);
    this.lRequestId = t.readInt64(2, false, this.lRequestId);
    this.traceId = t.readString(3, false, this.traceId)
}

HUYA.WSPushMessage = function () {
    this.ePushType = 0;
    this.iUri = 0;
    this.sMsg = new Taf.BinBuffer;
    this.iProtocolType = 0;
    this.sGroupId = ""
}
HUYA.WSPushMessage.prototype._clone = function () {
    return new HUYA.WSPushMessage
}
HUYA.WSPushMessage.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.WSPushMessage.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.WSPushMessage.prototype.writeTo = function (t) {
    t.writeInt32(0, this.ePushType);
    t.writeInt64(1, this.iUri);
    t.writeBytes(2, this.sMsg);
    t.writeInt32(3, this.iProtocolType);
    t.writeString(4, this.sGroupId)
}
HUYA.WSPushMessage.prototype.readFrom = function (t) {
    this.ePushType = t.readInt32(0, false, this.ePushType);
    this.iUri = t.readInt64(1, false, this.iUri);
    this.sMsg = t.readBytes(2, false, this.sMsg);
    this.iProtocolType = t.readInt32(3, false, this.iProtocolType);
    this.sGroupId = t.readString(4, false, this.sGroupId)
}

HUYA.MessageNotice = function () {
    this.tUserInfo = new HUYA.SenderInfo;
    this.lTid = 0;
    this.lSid = 0;
    this.sContent = "";
    this.iShowMode = 0;
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.iTermType = 0;
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vAtSomeone = new Taf.Vector(new HUYA.UidNickName);
    this.lPid = 0;
    this.vBulletPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.sIconUrl = "";
    this.iType = 0;
    this.vBulletSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
HUYA.MessageNotice.prototype._clone = function () {
    return new HUYA.MessageNotice
}
HUYA.MessageNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.MessageNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.MessageNotice.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tUserInfo);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeString(3, this.sContent);
    t.writeInt32(4, this.iShowMode);
    t.writeStruct(5, this.tFormat);
    t.writeStruct(6, this.tBulletFormat);
    t.writeInt32(7, this.iTermType);
    t.writeVector(8, this.vDecorationPrefix);
    t.writeVector(9, this.vDecorationSuffix);
    t.writeVector(10, this.vAtSomeone);
    t.writeInt64(11, this.lPid);
    t.writeVector(12, this.vBulletPrefix);
    t.writeString(13, this.sIconUrl);
    t.writeInt32(14, this.iType);
    t.writeVector(15, this.vBulletSuffix)
}
HUYA.MessageNotice.prototype.readFrom = function (t) {
    this.tUserInfo = t.readStruct(0, false, this.tUserInfo);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.sContent = t.readString(3, false, this.sContent);
    this.iShowMode = t.readInt32(4, false, this.iShowMode);
    this.tFormat = t.readStruct(5, false, this.tFormat);
    this.tBulletFormat = t.readStruct(6, false, this.tBulletFormat);
    this.iTermType = t.readInt32(7, false, this.iTermType);
    this.vDecorationPrefix = t.readVector(8, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(9, false, this.vDecorationSuffix);
    this.vAtSomeone = t.readVector(10, false, this.vAtSomeone);
    this.lPid = t.readInt64(11, false, this.lPid);
    this.vBulletPrefix = t.readVector(12, false, this.vBulletPrefix);
    this.sIconUrl = t.readString(13, false, this.sIconUrl);
    this.iType = t.readInt32(14, false, this.iType);
    this.vBulletSuffix = t.readVector(15, false, this.vBulletSuffix)
}


HUYA.VipEnterBanner = function () {
    this.lUid = 0;
    this.sNickName = "";
    this.lPid = 0;
    this.tNobleInfo = new HUYA.NobleInfo;
    this.tGuardInfo = new HUYA.GuardInfo;
    this.tWeekRankInfo = new HUYA.WeekRankInfo;
    this.sLogoURL = "";
    this.bFromNearby = false;
    this.sLocation = "";
    this.tDecorationInfo = new HUYA.DecorationInfoRsp;
    this.tWeekHeartStirRankInfo = new HUYA.WeekRankInfo;
    this.tWeekHeartBlockRankInfo = new HUYA.WeekRankInfo
}
HUYA.VipEnterBanner.prototype._clone = function () {
    return new HUYA.VipEnterBanner
}
HUYA.VipEnterBanner.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.VipEnterBanner.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.VipEnterBanner.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt64(2, this.lPid);
    t.writeStruct(3, this.tNobleInfo);
    t.writeStruct(4, this.tGuardInfo);
    t.writeStruct(5, this.tWeekRankInfo);
    t.writeString(6, this.sLogoURL);
    t.writeBoolean(7, this.bFromNearby);
    t.writeString(8, this.sLocation);
    t.writeStruct(9, this.tDecorationInfo);
    t.writeStruct(10, this.tWeekHeartStirRankInfo);
    t.writeStruct(11, this.tWeekHeartBlockRankInfo)
}
HUYA.VipEnterBanner.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.tNobleInfo = t.readStruct(3, false, this.tNobleInfo);
    this.tGuardInfo = t.readStruct(4, false, this.tGuardInfo);
    this.tWeekRankInfo = t.readStruct(5, false, this.tWeekRankInfo);
    this.sLogoURL = t.readString(6, false, this.sLogoURL);
    this.bFromNearby = t.readBoolean(7, false, this.bFromNearby);
    this.sLocation = t.readString(8, false, this.sLocation);
    this.tDecorationInfo = t.readStruct(9, false, this.tDecorationInfo);
    this.tWeekHeartStirRankInfo = t.readStruct(10, false, this.tWeekHeartStirRankInfo);
    this.tWeekHeartBlockRankInfo = t.readStruct(11, false, this.tWeekHeartBlockRankInfo)
}


HUYA.VipBarListRsp = function () {
    this.iStart = 0;
    this.iCount = 0;
    this.iTotal = 0;
    this.vVipBarItem = new Taf.Vector(new HUYA.VipBarItem);
    this.sBadgeName = "";
    this.iChangedHighestRank = 0;
    this.lPid = 0;
    this.sVLogo = ""
}
HUYA.VipBarListRsp.prototype._clone = function () {
    return new HUYA.VipBarListRsp
}
HUYA.VipBarListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.VipBarListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.VipBarListRsp.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iStart);
    t.writeInt32(2, this.iCount);
    t.writeInt32(3, this.iTotal);
    t.writeVector(4, this.vVipBarItem);
    t.writeString(5, this.sBadgeName);
    t.writeInt32(6, this.iChangedHighestRank);
    t.writeInt64(7, this.lPid);
    t.writeString(8, this.sVLogo)
}
HUYA.VipBarListRsp.prototype.readFrom = function (t) {
    this.iStart = t.readInt32(1, false, this.iStart);
    this.iCount = t.readInt32(2, false, this.iCount);
    this.iTotal = t.readInt32(3, false, this.iTotal);
    this.vVipBarItem = t.readVector(4, false, this.vVipBarItem);
    this.sBadgeName = t.readString(5, false, this.sBadgeName);
    this.iChangedHighestRank = t.readInt32(6, false, this.iChangedHighestRank);
    this.lPid = t.readInt64(7, false, this.lPid);
    this.sVLogo = t.readString(8, false, this.sVLogo)
}


HUYA.SendItemSubBroadcastPacket = function () {
    this.iItemType = 0;
    this.strPayId = "";
    this.iItemCount = 0;
    this.lPresenterUid = 0;
    this.lSenderUid = 0;
    this.sPresenterNick = "";
    this.sSenderNick = "";
    this.sSendContent = "";
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.iSuperPupleLevel = 0;
    this.iComboScore = 0;
    this.iDisplayInfo = 0;
    this.iEffectType = 0;
    this.iSenderIcon = "";
    this.iPresenterIcon = "";
    this.iTemplateType = 0;
    this.sExpand = "";
    this.bBusi = false;
    this.iColorEffectType = 0;
    this.sPropsName = "";
    this.iAccpet = 0;
    this.iEventType = 0;
    this.userInfo = new HUYA.UserIdentityInfo;
    this.lRoomId = 0;
    this.lHomeOwnerUid = 0;
    this.streamerInfo = new HUYA.StreamerNode
}
HUYA.SendItemSubBroadcastPacket.prototype._clone = function () {
    return new HUYA.SendItemSubBroadcastPacket
}
HUYA.SendItemSubBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.SendItemSubBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.SendItemSubBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType);
    t.writeString(1, this.strPayId);
    t.writeInt32(2, this.iItemCount);
    t.writeInt64(3, this.lPresenterUid);
    t.writeInt64(4, this.lSenderUid);
    t.writeString(5, this.sPresenterNick);
    t.writeString(6, this.sSenderNick);
    t.writeString(7, this.sSendContent);
    t.writeInt32(8, this.iItemCountByGroup);
    t.writeInt32(9, this.iItemGroup);
    t.writeInt32(10, this.iSuperPupleLevel);
    t.writeInt32(11, this.iComboScore);
    t.writeInt32(12, this.iDisplayInfo);
    t.writeInt32(13, this.iEffectType);
    t.writeString(14, this.iSenderIcon);
    t.writeString(15, this.iPresenterIcon);
    t.writeInt32(16, this.iTemplateType);
    t.writeString(17, this.sExpand);
    t.writeBoolean(18, this.bBusi);
    t.writeInt32(19, this.iColorEffectType);
    t.writeString(20, this.sPropsName);
    t.writeInt16(21, this.iAccpet);
    t.writeInt16(22, this.iEventType);
    t.writeStruct(23, this.userInfo);
    t.writeInt64(24, this.lRoomId);
    t.writeInt64(25, this.lHomeOwnerUid);
    t.writeStruct(26, this.streamerInfo)
}
HUYA.SendItemSubBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.strPayId = t.readString(1, false, this.strPayId);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid);
    this.lSenderUid = t.readInt64(4, false, this.lSenderUid);
    this.sPresenterNick = t.readString(5, false, this.sPresenterNick);
    this.sSenderNick = t.readString(6, false, this.sSenderNick);
    this.sSendContent = t.readString(7, false, this.sSendContent);
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup);
    this.iSuperPupleLevel = t.readInt32(10, false, this.iSuperPupleLevel);
    this.iComboScore = t.readInt32(11, false, this.iComboScore);
    this.iDisplayInfo = t.readInt32(12, false, this.iDisplayInfo);
    this.iEffectType = t.readInt32(13, false, this.iEffectType);
    this.iSenderIcon = t.readString(14, false, this.iSenderIcon);
    this.iPresenterIcon = t.readString(15, false, this.iPresenterIcon);
    this.iTemplateType = t.readInt32(16, false, this.iTemplateType);
    this.sExpand = t.readString(17, false, this.sExpand);
    this.bBusi = t.readBoolean(18, false, this.bBusi);
    this.iColorEffectType = t.readInt32(19, false, this.iColorEffectType);
    this.sPropsName = t.readString(20, false, this.sPropsName);
    this.iAccpet = t.readInt16(21, false, this.iAccpet);
    this.iEventType = t.readInt16(22, false, this.iEventType);
    this.userInfo = t.readStruct(23, false, this.userInfo);
    this.lRoomId = t.readInt64(24, false, this.lRoomId);
    this.lHomeOwnerUid = t.readInt64(25, false, this.lHomeOwnerUid);
    this.streamerInfo = t.readStruct(26, false, this.streamerInfo)
}


HUYA.SendItemNoticeWordBroadcastPacket = function () {
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lSenderSid = 0;
    this.lSenderUid = 0;
    this.sSenderNick = "";
    this.lPresenterUid = 0;
    this.sPresenterNick = "";
    this.lNoticeChannelCount = 0;
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.iDisplayInfo = 0;
    this.iSuperPupleLevel = 0;
    this.iTemplateType = 0;
    this.sExpand = "";
    this.bBusi = false;
    this.iShowTime = 0;
    this.lPresenterYY = 0;
    this.lSid = 0;
    this.lSubSid = 0;
    this.lRoomId = 0
}
HUYA.SendItemNoticeWordBroadcastPacket.prototype._clone = function () {
    return new HUYA.SendItemNoticeWordBroadcastPacket
}
HUYA.SendItemNoticeWordBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.SendItemNoticeWordBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.SendItemNoticeWordBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount);
    t.writeInt64(2, this.lSenderSid);
    t.writeInt64(3, this.lSenderUid);
    t.writeString(4, this.sSenderNick);
    t.writeInt64(5, this.lPresenterUid);
    t.writeString(6, this.sPresenterNick);
    t.writeInt64(7, this.lNoticeChannelCount);
    t.writeInt32(8, this.iItemCountByGroup);
    t.writeInt32(9, this.iItemGroup);
    t.writeInt32(10, this.iDisplayInfo);
    t.writeInt32(11, this.iSuperPupleLevel);
    t.writeInt32(12, this.iTemplateType);
    t.writeString(13, this.sExpand);
    t.writeBoolean(14, this.bBusi);
    t.writeInt32(15, this.iShowTime);
    t.writeInt64(16, this.lPresenterYY);
    t.writeInt64(17, this.lSid);
    t.writeInt64(18, this.lSubSid);
    t.writeInt64(19, this.lRoomId)
}
HUYA.SendItemNoticeWordBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount);
    this.lSenderSid = t.readInt64(2, false, this.lSenderSid);
    this.lSenderUid = t.readInt64(3, false, this.lSenderUid);
    this.sSenderNick = t.readString(4, false, this.sSenderNick);
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid);
    this.sPresenterNick = t.readString(6, false, this.sPresenterNick);
    this.lNoticeChannelCount = t.readInt64(7, false, this.lNoticeChannelCount);
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup);
    this.iDisplayInfo = t.readInt32(10, false, this.iDisplayInfo);
    this.iSuperPupleLevel = t.readInt32(11, false, this.iSuperPupleLevel);
    this.iTemplateType = t.readInt32(12, false, this.iTemplateType);
    this.sExpand = t.readString(13, false, this.sExpand);
    this.bBusi = t.readBoolean(14, false, this.bBusi);
    this.iShowTime = t.readInt32(15, false, this.iShowTime);
    this.lPresenterYY = t.readInt64(16, false, this.lPresenterYY);
    this.lSid = t.readInt64(17, false, this.lSid);
    this.lSubSid = t.readInt64(18, false, this.lSubSid);
    this.lRoomId = t.readInt64(19, false, this.lRoomId)
}


HUYA.SendItemNoticeGameBroadcastPacket = function () {
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lSenderUid = 0;
    this.sSenderNick = "";
    this.lPresenterUid = 0;
    this.sPresenterNick = "";
    this.lSid = 0;
    this.lSubSid = 0;
    this.lRoomId = 0;
    this.iTemplateType = 0
}
HUYA.SendItemNoticeGameBroadcastPacket.prototype._clone = function () {
    return new HUYA.SendItemNoticeGameBroadcastPacket
}
HUYA.SendItemNoticeGameBroadcastPacket.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.SendItemNoticeGameBroadcastPacket.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.SendItemNoticeGameBroadcastPacket.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount);
    t.writeInt64(3, this.lSenderUid);
    t.writeString(4, this.sSenderNick);
    t.writeInt64(5, this.lPresenterUid);
    t.writeString(6, this.sPresenterNick);
    t.writeInt64(7, this.lSid);
    t.writeInt64(8, this.lSubSid);
    t.writeInt64(9, this.lRoomId);
    t.writeInt32(10, this.iTemplateType)
}
HUYA.SendItemNoticeGameBroadcastPacket.prototype.readFrom = function (t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount);
    this.lSenderUid = t.readInt64(3, false, this.lSenderUid);
    this.sSenderNick = t.readString(4, false, this.sSenderNick);
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid);
    this.sPresenterNick = t.readString(6, false, this.sPresenterNick);
    this.lSid = t.readInt64(7, false, this.lSid);
    this.lSubSid = t.readInt64(8, false, this.lSubSid);
    this.lRoomId = t.readInt64(9, false, this.lRoomId);
    this.iTemplateType = t.readInt32(10, false, this.iTemplateType)
}


HUYA.AttendeeCountNotice = function () {
    this.iAttendeeCount = 0
}
HUYA.AttendeeCountNotice.prototype._clone = function () {
    return new HUYA.AttendeeCountNotice
}
HUYA.AttendeeCountNotice.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.AttendeeCountNotice.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.AttendeeCountNotice.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iAttendeeCount)
}
HUYA.AttendeeCountNotice.prototype.readFrom = function (t) {
    this.iAttendeeCount = t.readInt32(0, false, this.iAttendeeCount)
}


HUYA.NobleInfo = function () {
    this.lUid = 0;
    this.lPid = 0;
    this.lValidDate = 0;
    this.sNobleName = "";
    this.iNobleLevel = 0;
    this.iNoblePet = 0;
    this.iNobleStatus = 0;
    this.iNobleType = 0;
    this.iRemainDays = 0
}
HUYA.NobleInfo.prototype._clone = function () {
    return new HUYA.NobleInfo
}
HUYA.NobleInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.NobleInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.NobleInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lValidDate);
    t.writeString(3, this.sNobleName);
    t.writeInt32(4, this.iNobleLevel);
    t.writeInt32(5, this.iNoblePet);
    t.writeInt32(6, this.iNobleStatus);
    t.writeInt32(7, this.iNobleType);
    t.writeInt32(8, this.iRemainDays)
}
HUYA.NobleInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lValidDate = t.readInt64(2, false, this.lValidDate);
    this.sNobleName = t.readString(3, false, this.sNobleName);
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel);
    this.iNoblePet = t.readInt32(5, false, this.iNoblePet);
    this.iNobleStatus = t.readInt32(6, false, this.iNobleStatus);
    this.iNobleType = t.readInt32(7, false, this.iNobleType);
    this.iRemainDays = t.readInt32(8, false, this.iRemainDays)
}

HUYA.GuardInfo = function () {
    this.lUid = 0;
    this.lPid = 0;
    this.iGuardLevel = 0;
    this.lEndTime = 0
}
HUYA.GuardInfo.prototype._clone = function () {
    return new HUYA.GuardInfo
}
HUYA.GuardInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.GuardInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.GuardInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iGuardLevel);
    t.writeInt64(3, this.lEndTime)
}
HUYA.GuardInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iGuardLevel = t.readInt32(2, false, this.iGuardLevel);
    this.lEndTime = t.readInt64(3, false, this.lEndTime)
}


HUYA.UserIdentityInfo = function () {
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
HUYA.UserIdentityInfo.prototype._clone = function () {
    return new HUYA.UserIdentityInfo
}
HUYA.UserIdentityInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.UserIdentityInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.UserIdentityInfo.prototype.writeTo = function (t) {
    t.writeVector(0, this.vDecorationPrefix);
    t.writeVector(1, this.vDecorationSuffix)
}
HUYA.UserIdentityInfo.prototype.readFrom = function (t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix)
}


HUYA.DecorationInfo = function () {
    this.iAppId = 0;
    this.iViewType = 0;
    this.vData = new Taf.BinBuffer
}
HUYA.DecorationInfo.prototype._clone = function () {
    return new HUYA.DecorationInfo
}
HUYA.DecorationInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.DecorationInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.DecorationInfo.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iAppId);
    t.writeInt32(1, this.iViewType);
    t.writeBytes(2, this.vData)
}
HUYA.DecorationInfo.prototype.readFrom = function (t) {
    this.iAppId = t.readInt32(0, false, this.iAppId);
    this.iViewType = t.readInt32(1, false, this.iViewType);
    this.vData = t.readBytes(2, false, this.vData)
}


HUYA.SenderInfo = function () {
    this.lUid = 0;
    this.lImid = 0;
    this.sNickName = "";
    this.iGender = 0;
    this.sAvatarUrl = "";
    this.iNobleLevel = 0
}
HUYA.SenderInfo.prototype._clone = function () {
    return new HUYA.SenderInfo
}
HUYA.SenderInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.SenderInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.SenderInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lImid);
    t.writeString(2, this.sNickName);
    t.writeInt32(3, this.iGender);
    t.writeString(4, this.sAvatarUrl);
    t.writeInt32(5, this.iNobleLevel)
}
HUYA.SenderInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lImid = t.readInt64(1, false, this.lImid);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.iGender = t.readInt32(3, false, this.iGender);
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl);
    this.iNobleLevel = t.readInt32(5, false, this.iNobleLevel)
}


HUYA.ContentFormat = function () {
    this.iFontColor = -1;
    this.iFontSize = 4;
    this.iPopupStyle = 0
}
HUYA.ContentFormat.prototype._clone = function () {
    return new HUYA.ContentFormat
}
HUYA.ContentFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.ContentFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.ContentFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFontColor);
    t.writeInt32(1, this.iFontSize);
    t.writeInt32(2, this.iPopupStyle)
}
HUYA.ContentFormat.prototype.readFrom = function (t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor);
    this.iFontSize = t.readInt32(1, false, this.iFontSize);
    this.iPopupStyle = t.readInt32(2, false, this.iPopupStyle)
}


HUYA.WeekRankInfo = function () {
    this.lUid = 0;
    this.iRank = 0
}
HUYA.WeekRankInfo.prototype._clone = function () {
    return new HUYA.WeekRankInfo
}
HUYA.WeekRankInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.WeekRankInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.WeekRankInfo.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iRank)
}
HUYA.WeekRankInfo.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iRank = t.readInt32(1, false, this.iRank)
}


HUYA.StreamerNode = function () {
    this.iGiftLevel = 0;
    this.iStreamerLevel = 0;
    this.iMaterialType = 0
}
HUYA.StreamerNode.prototype._clone = function () {
    return new HUYA.StreamerNode
}
HUYA.StreamerNode.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.StreamerNode.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.StreamerNode.prototype.writeTo = function (t) {
    t.writeInt16(0, this.iGiftLevel);
    t.writeInt16(1, this.iStreamerLevel);
    t.writeInt16(2, this.iMaterialType)
}
HUYA.StreamerNode.prototype.readFrom = function (t) {
    this.iGiftLevel = t.readInt16(0, false, this.iGiftLevel);
    this.iStreamerLevel = t.readInt16(1, false, this.iStreamerLevel);
    this.iMaterialType = t.readInt16(2, false, this.iMaterialType)
}


HUYA.DecorationInfoRsp = function () {
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.vForwardChannels = new Taf.Vector(new HUYA.ChannelPair);
    this.iModifyMask = 0;
    this.vBulletPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tUserInfo = new HUYA.SenderInfo;
    this.vBulletSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
HUYA.DecorationInfoRsp.prototype._clone = function () {
    return new HUYA.DecorationInfoRsp
}
HUYA.DecorationInfoRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.DecorationInfoRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.DecorationInfoRsp.prototype.writeTo = function (t) {
    t.writeVector(0, this.vDecorationPrefix);
    t.writeVector(1, this.vDecorationSuffix);
    t.writeStruct(2, this.tFormat);
    t.writeStruct(3, this.tBulletFormat);
    t.writeVector(4, this.vForwardChannels);
    t.writeInt32(5, this.iModifyMask);
    t.writeVector(6, this.vBulletPrefix);
    t.writeStruct(7, this.tUserInfo);
    t.writeVector(8, this.vBulletSuffix)
}
HUYA.DecorationInfoRsp.prototype.readFrom = function (t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix);
    this.tFormat = t.readStruct(2, false, this.tFormat);
    this.tBulletFormat = t.readStruct(3, false, this.tBulletFormat);
    this.vForwardChannels = t.readVector(4, false, this.vForwardChannels);
    this.iModifyMask = t.readInt32(5, false, this.iModifyMask);
    this.vBulletPrefix = t.readVector(6, false, this.vBulletPrefix);
    this.tUserInfo = t.readStruct(7, false, this.tUserInfo);
    this.vBulletSuffix = t.readVector(8, false, this.vBulletSuffix)
}

HUYA.BulletFormat = function () {
    this.iFontColor = -1;
    this.iFontSize = 4;
    this.iTextSpeed = 0;
    this.iTransitionType = 1;
    this.iPopupStyle = 0;
    this.tBorderGroundFormat = new HUYA.BulletBorderGroundFormat
}
HUYA.BulletFormat.prototype._clone = function () {
    return new HUYA.BulletFormat
}
HUYA.BulletFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.BulletFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.BulletFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iFontColor);
    t.writeInt32(1, this.iFontSize);
    t.writeInt32(2, this.iTextSpeed);
    t.writeInt32(3, this.iTransitionType);
    t.writeInt32(4, this.iPopupStyle);
    t.writeStruct(5, this.tBorderGroundFormat)
}
HUYA.BulletFormat.prototype.readFrom = function (t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor);
    this.iFontSize = t.readInt32(1, false, this.iFontSize);
    this.iTextSpeed = t.readInt32(2, false, this.iTextSpeed);
    this.iTransitionType = t.readInt32(3, false, this.iTransitionType);
    this.iPopupStyle = t.readInt32(4, false, this.iPopupStyle);
    this.tBorderGroundFormat = t.readStruct(5, false, this.tBorderGroundFormat)
}


HUYA.BulletBorderGroundFormat = function () {
    this.iEnableUse = 0;
    this.iBorderThickness = 0;
    this.iBorderColour = -1;
    this.iBorderDiaphaneity = 100;
    this.iGroundColour = -1;
    this.iGroundColourDiaphaneity = 100;
    this.sAvatarDecorationUrl = "";
    this.iFontColor = -1
}
HUYA.BulletBorderGroundFormat.prototype._clone = function () {
    return new HUYA.BulletBorderGroundFormat
}
HUYA.BulletBorderGroundFormat.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.BulletBorderGroundFormat.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.BulletBorderGroundFormat.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iEnableUse);
    t.writeInt32(1, this.iBorderThickness);
    t.writeInt32(2, this.iBorderColour);
    t.writeInt32(3, this.iBorderDiaphaneity);
    t.writeInt32(4, this.iGroundColour);
    t.writeInt32(5, this.iGroundColourDiaphaneity);
    t.writeString(6, this.sAvatarDecorationUrl);
    t.writeInt32(7, this.iFontColor)
}
HUYA.BulletBorderGroundFormat.prototype.readFrom = function (t) {
    this.iEnableUse = t.readInt32(0, false, this.iEnableUse);
    this.iBorderThickness = t.readInt32(1, false, this.iBorderThickness);
    this.iBorderColour = t.readInt32(2, false, this.iBorderColour);
    this.iBorderDiaphaneity = t.readInt32(3, false, this.iBorderDiaphaneity);
    this.iGroundColour = t.readInt32(4, false, this.iGroundColour);
    this.iGroundColourDiaphaneity = t.readInt32(5, false, this.iGroundColourDiaphaneity);
    this.sAvatarDecorationUrl = t.readString(6, false, this.sAvatarDecorationUrl);
    this.iFontColor = t.readInt32(7, false, this.iFontColor)
}

HUYA.UidNickName = function () {
    this.lUid = 0;
    this.sNickName = ""
}
HUYA.UidNickName.prototype._clone = function () {
    return new HUYA.UidNickName
}
HUYA.UidNickName.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.UidNickName.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.UidNickName.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName)
}
HUYA.UidNickName.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName)
}

HUYA.ChannelPair = function () {
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
HUYA.ChannelPair.prototype._clone = function () {
    return new HUYA.ChannelPair
}
HUYA.ChannelPair.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.ChannelPair.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.ChannelPair.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lPid)
}
HUYA.ChannelPair.prototype.readFrom = function (t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lPid = t.readInt64(2, false, this.lPid)
}


HUYA.GetPropsListReq = function () {
    this.tUserId = new HUYA.UserId;
    this.sMd5 = "";
    this.iTemplateType = 64;
    this.sVersion = "";
    this.iAppId = 0;
    this.lPresenterUid = 0;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iGameId = 0
}
HUYA.GetPropsListReq.prototype._clone = function () {
    return new HUYA.GetPropsListReq
}
HUYA.GetPropsListReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.GetPropsListReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.GetPropsListReq.prototype.writeTo = function (t) {
    t.writeStruct(1, this.tUserId);
    t.writeString(2, this.sMd5);
    t.writeInt32(3, this.iTemplateType);
    t.writeString(4, this.sVersion);
    t.writeInt32(5, this.iAppId);
    t.writeInt64(6, this.lPresenterUid);
    t.writeInt64(7, this.lSid);
    t.writeInt64(8, this.lSubSid);
    t.writeInt32(9, this.iGameId)
}
HUYA.GetPropsListReq.prototype.readFrom = function (t) {
    this.tUserId = t.readStruct(1, false, this.tUserId);
    this.sMd5 = t.readString(2, false, this.sMd5);
    this.iTemplateType = t.readInt32(3, false, this.iTemplateType);
    this.sVersion = t.readString(4, false, this.sVersion);
    this.iAppId = t.readInt32(5, false, this.iAppId);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.lSid = t.readInt64(7, false, this.lSid);
    this.lSubSid = t.readInt64(8, false, this.lSubSid);
    this.iGameId = t.readInt32(9, false, this.iGameId)
}


HUYA.UserId = function () {
    this.lUid = 0;
    this.sGuid = "";
    this.sToken = "";
    this.sHuYaUA = "";
    this.sCookie = "";
    this.iTokenType = 0
}
HUYA.UserId.prototype._clone = function () {
    return new HUYA.UserId
}
HUYA.UserId.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.UserId.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.UserId.prototype.writeTo = function (t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sGuid);
    t.writeString(2, this.sToken);
    t.writeString(3, this.sHuYaUA);
    t.writeString(4, this.sCookie);
    t.writeInt32(5, this.iTokenType)
}
HUYA.UserId.prototype.readFrom = function (t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sGuid = t.readString(1, false, this.sGuid);
    this.sToken = t.readString(2, false, this.sToken);
    this.sHuYaUA = t.readString(3, false, this.sHuYaUA);
    this.sCookie = t.readString(4, false, this.sCookie);
    this.iTokenType = t.readInt32(5, false, this.iTokenType)
}


HUYA.GetPropsListRsp = function () {
    this.vPropsItemList = new Taf.Vector(new HUYA.PropsItem);
    this.sMd5 = "";
    this.iNewEffectSwitch = 0;
    this.iMirrorRoomShowNum = 0;
    this.iGameRoomShowNum = 0
}
HUYA.GetPropsListRsp.prototype._clone = function () {
    return new HUYA.GetPropsListRsp
}
HUYA.GetPropsListRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.GetPropsListRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.GetPropsListRsp.prototype.writeTo = function (t) {
    t.writeVector(1, this.vPropsItemList);
    t.writeString(2, this.sMd5);
    t.writeInt16(3, this.iNewEffectSwitch);
    t.writeInt16(4, this.iMirrorRoomShowNum);
    t.writeInt16(5, this.iGameRoomShowNum)
}
HUYA.GetPropsListRsp.prototype.readFrom = function (t) {
    this.vPropsItemList = t.readVector(1, false, this.vPropsItemList);
    this.sMd5 = t.readString(2, false, this.sMd5);
    this.iNewEffectSwitch = t.readInt16(3, false, this.iNewEffectSwitch);
    this.iMirrorRoomShowNum = t.readInt16(4, false, this.iMirrorRoomShowNum);
    this.iGameRoomShowNum = t.readInt16(5, false, this.iGameRoomShowNum)
}


HUYA.PropsItem = function () {
    this.iPropsId = 0;
    this.sPropsName = "";
    this.iPropsYb = 0;
    this.iPropsGreenBean = 0;
    this.iPropsWhiteBean = 0;
    this.iPropsGoldenBean = 0;
    this.iPropsRed = 0;
    this.iPropsPopular = 0;
    this.iPropsExpendNum = -1;
    this.iPropsFansValue = -1;
    this.vPropsNum = new Taf.Vector(new Taf.INT32);
    this.iPropsMaxNum = 0;
    this.iPropsBatterFlag = 0;
    this.vPropsChannel = new Taf.Vector(new Taf.INT32);
    this.sPropsToolTip = "";
    this.vPropsIdentity = new Taf.Vector(new HUYA.PropsIdentity);
    this.iPropsWeights = 0;
    this.iPropsLevel = 0;
    this.tDisplayInfo = new HUYA.DisplayInfo;
    this.tSpecialInfo = new HUYA.SpecialInfo;
    this.iPropsGrade = 0;
    this.iPropsGroupNum = 0;
    this.sPropsCommBannerResource = "";
    this.sPropsOwnBannerResource = "";
    this.iPropsShowFlag = 0;
    this.iTemplateType = 0;
    this.iShelfStatus = 0;
    this.sAndroidLogo = "";
    this.sIpadLogo = "";
    this.sIphoneLogo = "";
    this.sPropsCommBannerResourceEx = "";
    this.sPropsOwnBannerResourceEx = "";
    this.vPresenterUid = new Taf.Vector(new Taf.INT64);
    this.vPropView = new Taf.Vector(new HUYA.PropView);
    this.iFaceUSwitch = 0;
    this.iDisplayCd = 0;
    this.iCount = 0;
    this.iVbCount = 0;
    this.vWebPropsNum = new Taf.Vector(new Taf.STRING)
}
HUYA.PropsItem.prototype._clone = function () {
    return new HUYA.PropsItem
}
HUYA.PropsItem.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.PropsItem.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.PropsItem.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iPropsId);
    t.writeString(2, this.sPropsName);
    t.writeInt32(3, this.iPropsYb);
    t.writeInt32(4, this.iPropsGreenBean);
    t.writeInt32(5, this.iPropsWhiteBean);
    t.writeInt32(6, this.iPropsGoldenBean);
    t.writeInt32(7, this.iPropsRed);
    t.writeInt32(8, this.iPropsPopular);
    t.writeInt32(9, this.iPropsExpendNum);
    t.writeInt32(10, this.iPropsFansValue);
    t.writeVector(11, this.vPropsNum);
    t.writeInt32(12, this.iPropsMaxNum);
    t.writeInt32(13, this.iPropsBatterFlag);
    t.writeVector(14, this.vPropsChannel);
    t.writeString(15, this.sPropsToolTip);
    t.writeVector(16, this.vPropsIdentity);
    t.writeInt32(17, this.iPropsWeights);
    t.writeInt32(18, this.iPropsLevel);
    t.writeStruct(19, this.tDisplayInfo);
    t.writeStruct(20, this.tSpecialInfo);
    t.writeInt32(21, this.iPropsGrade);
    t.writeInt32(22, this.iPropsGroupNum);
    t.writeString(23, this.sPropsCommBannerResource);
    t.writeString(24, this.sPropsOwnBannerResource);
    t.writeInt32(25, this.iPropsShowFlag);
    t.writeInt32(26, this.iTemplateType);
    t.writeInt32(27, this.iShelfStatus);
    t.writeString(28, this.sAndroidLogo);
    t.writeString(29, this.sIpadLogo);
    t.writeString(30, this.sIphoneLogo);
    t.writeString(31, this.sPropsCommBannerResourceEx);
    t.writeString(32, this.sPropsOwnBannerResourceEx);
    t.writeVector(33, this.vPresenterUid);
    t.writeVector(34, this.vPropView);
    t.writeInt16(35, this.iFaceUSwitch);
    t.writeInt16(36, this.iDisplayCd);
    t.writeInt16(37, this.iCount);
    t.writeInt32(38, this.iVbCount);
    t.writeVector(39, this.vWebPropsNum)
}
HUYA.PropsItem.prototype.readFrom = function (t) {
    this.iPropsId = t.readInt32(1, false, this.iPropsId);
    this.sPropsName = t.readString(2, false, this.sPropsName);
    this.iPropsYb = t.readInt32(3, false, this.iPropsYb);
    this.iPropsGreenBean = t.readInt32(4, false, this.iPropsGreenBean);
    this.iPropsWhiteBean = t.readInt32(5, false, this.iPropsWhiteBean);
    this.iPropsGoldenBean = t.readInt32(6, false, this.iPropsGoldenBean);
    this.iPropsRed = t.readInt32(7, false, this.iPropsRed);
    this.iPropsPopular = t.readInt32(8, false, this.iPropsPopular);
    this.iPropsExpendNum = t.readInt32(9, false, this.iPropsExpendNum);
    this.iPropsFansValue = t.readInt32(10, false, this.iPropsFansValue);
    this.vPropsNum = t.readVector(11, false, this.vPropsNum);
    this.iPropsMaxNum = t.readInt32(12, false, this.iPropsMaxNum);
    this.iPropsBatterFlag = t.readInt32(13, false, this.iPropsBatterFlag);
    this.vPropsChannel = t.readVector(14, false, this.vPropsChannel);
    this.sPropsToolTip = t.readString(15, false, this.sPropsToolTip);
    this.vPropsIdentity = t.readVector(16, false, this.vPropsIdentity);
    this.iPropsWeights = t.readInt32(17, false, this.iPropsWeights);
    this.iPropsLevel = t.readInt32(18, false, this.iPropsLevel);
    this.tDisplayInfo = t.readStruct(19, false, this.tDisplayInfo);
    this.tSpecialInfo = t.readStruct(20, false, this.tSpecialInfo);
    this.iPropsGrade = t.readInt32(21, false, this.iPropsGrade);
    this.iPropsGroupNum = t.readInt32(22, false, this.iPropsGroupNum);
    this.sPropsCommBannerResource = t.readString(23, false, this.sPropsCommBannerResource);
    this.sPropsOwnBannerResource = t.readString(24, false, this.sPropsOwnBannerResource);
    this.iPropsShowFlag = t.readInt32(25, false, this.iPropsShowFlag);
    this.iTemplateType = t.readInt32(26, false, this.iTemplateType);
    this.iShelfStatus = t.readInt32(27, false, this.iShelfStatus);
    this.sAndroidLogo = t.readString(28, false, this.sAndroidLogo);
    this.sIpadLogo = t.readString(29, false, this.sIpadLogo);
    this.sIphoneLogo = t.readString(30, false, this.sIphoneLogo);
    this.sPropsCommBannerResourceEx = t.readString(31, false, this.sPropsCommBannerResourceEx);
    this.sPropsOwnBannerResourceEx = t.readString(32, false, this.sPropsOwnBannerResourceEx);
    this.vPresenterUid = t.readVector(33, false, this.vPresenterUid);
    this.vPropView = t.readVector(34, false, this.vPropView);
    this.iFaceUSwitch = t.readInt16(35, false, this.iFaceUSwitch);
    this.iDisplayCd = t.readInt16(36, false, this.iDisplayCd);
    this.iCount = t.readInt16(37, false, this.iCount);
    this.iVbCount = t.readInt32(38, false, this.iVbCount);
    this.vWebPropsNum = t.readVector(39, false, this.vWebPropsNum)
}


HUYA.PropsIdentity = function () {
    this.iPropsIdType = 0;
    this.sPropsPic18 = "";
    this.sPropsPic24 = "";
    this.sPropsPicGif = "";
    this.sPropsBannerResource = "";
    this.sPropsBannerSize = "";
    this.sPropsBannerMaxTime = "";
    this.sPropsChatBannerResource = "";
    this.sPropsChatBannerSize = "";
    this.sPropsChatBannerMaxTime = "";
    this.iPropsChatBannerPos = 0;
    this.iPropsChatBannerIsCombo = 0;
    this.sPropsRollContent = "";
    this.iPropsBannerAnimationstyle = 0;
    this.sPropFaceu = "";
    this.sPropH5Resource = "";
    this.sPropsWeb = "";
    this.sWitch = 0;
    this.sCornerMark = "";
    this.iPropViewId = 0;
    this.sPropStreamerResource = "";
    this.iStreamerFrameRate = 0;
    this.sPropsPic108 = "";
    this.sPcBannerResource = "";
    this.sPropBigGiftPc = "";
    this.sPropBigGiftWeb = "";
    this.iWebBigGiftFrameRate = 0
}
HUYA.PropsIdentity.prototype._clone = function () {
    return new HUYA.PropsIdentity
}
HUYA.PropsIdentity.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.PropsIdentity.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.PropsIdentity.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iPropsIdType);
    t.writeString(2, this.sPropsPic18);
    t.writeString(3, this.sPropsPic24);
    t.writeString(4, this.sPropsPicGif);
    t.writeString(5, this.sPropsBannerResource);
    t.writeString(6, this.sPropsBannerSize);
    t.writeString(7, this.sPropsBannerMaxTime);
    t.writeString(8, this.sPropsChatBannerResource);
    t.writeString(9, this.sPropsChatBannerSize);
    t.writeString(10, this.sPropsChatBannerMaxTime);
    t.writeInt32(11, this.iPropsChatBannerPos);
    t.writeInt32(12, this.iPropsChatBannerIsCombo);
    t.writeString(13, this.sPropsRollContent);
    t.writeInt32(14, this.iPropsBannerAnimationstyle);
    t.writeString(15, this.sPropFaceu);
    t.writeString(16, this.sPropH5Resource);
    t.writeString(17, this.sPropsWeb);
    t.writeInt32(18, this.sWitch);
    t.writeString(19, this.sCornerMark);
    t.writeInt32(20, this.iPropViewId);
    t.writeString(21, this.sPropStreamerResource);
    t.writeInt16(22, this.iStreamerFrameRate);
    t.writeString(23, this.sPropsPic108);
    t.writeString(24, this.sPcBannerResource);
    t.writeString(25, this.sPropBigGiftPc);
    t.writeString(26, this.sPropBigGiftWeb);
    t.writeInt32(27, this.iWebBigGiftFrameRate)
}
HUYA.PropsIdentity.prototype.readFrom = function (t) {
    this.iPropsIdType = t.readInt32(1, false, this.iPropsIdType);
    this.sPropsPic18 = t.readString(2, false, this.sPropsPic18);
    this.sPropsPic24 = t.readString(3, false, this.sPropsPic24);
    this.sPropsPicGif = t.readString(4, false, this.sPropsPicGif);
    this.sPropsBannerResource = t.readString(5, false, this.sPropsBannerResource);
    this.sPropsBannerSize = t.readString(6, false, this.sPropsBannerSize);
    this.sPropsBannerMaxTime = t.readString(7, false, this.sPropsBannerMaxTime);
    this.sPropsChatBannerResource = t.readString(8, false, this.sPropsChatBannerResource);
    this.sPropsChatBannerSize = t.readString(9, false, this.sPropsChatBannerSize);
    this.sPropsChatBannerMaxTime = t.readString(10, false, this.sPropsChatBannerMaxTime);
    this.iPropsChatBannerPos = t.readInt32(11, false, this.iPropsChatBannerPos);
    this.iPropsChatBannerIsCombo = t.readInt32(12, false, this.iPropsChatBannerIsCombo);
    this.sPropsRollContent = t.readString(13, false, this.sPropsRollContent);
    this.iPropsBannerAnimationstyle = t.readInt32(14, false, this.iPropsBannerAnimationstyle);
    this.sPropFaceu = t.readString(15, false, this.sPropFaceu);
    this.sPropH5Resource = t.readString(16, false, this.sPropH5Resource);
    this.sPropsWeb = t.readString(17, false, this.sPropsWeb);
    this.sWitch = t.readInt32(18, false, this.sWitch);
    this.sCornerMark = t.readString(19, false, this.sCornerMark);
    this.iPropViewId = t.readInt32(20, false, this.iPropViewId);
    this.sPropStreamerResource = t.readString(21, false, this.sPropStreamerResource);
    this.iStreamerFrameRate = t.readInt16(22, false, this.iStreamerFrameRate);
    this.sPropsPic108 = t.readString(23, false, this.sPropsPic108);
    this.sPcBannerResource = t.readString(24, false, this.sPcBannerResource);
    this.sPropBigGiftPc = t.readString(25, false, this.sPropBigGiftPc);
    this.sPropBigGiftWeb = t.readString(26, false, this.sPropBigGiftWeb);
    this.iWebBigGiftFrameRate = t.readInt32(27, false, this.iWebBigGiftFrameRate)
}


HUYA.DisplayInfo = function () {
    this.iMarqueeScopeMin = 0;
    this.iMarqueeScopeMax = 0;
    this.iCurrentVideoNum = 0;
    this.iCurrentVideoMin = 0;
    this.iCurrentVideoMax = 0;
    this.iAllVideoNum = 0;
    this.iAllVideoMin = 0;
    this.iAllVideoMax = 0;
    this.iCurrentScreenNum = 0;
    this.iCurrentScreenMin = 0;
    this.iCurrentScreenMax = 0
}
HUYA.DisplayInfo.prototype._clone = function () {
    return new HUYA.DisplayInfo
}
HUYA.DisplayInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.DisplayInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.DisplayInfo.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iMarqueeScopeMin);
    t.writeInt32(2, this.iMarqueeScopeMax);
    t.writeInt32(3, this.iCurrentVideoNum);
    t.writeInt32(4, this.iCurrentVideoMin);
    t.writeInt32(5, this.iCurrentVideoMax);
    t.writeInt32(6, this.iAllVideoNum);
    t.writeInt32(7, this.iAllVideoMin);
    t.writeInt32(8, this.iAllVideoMax);
    t.writeInt32(9, this.iCurrentScreenNum);
    t.writeInt32(10, this.iCurrentScreenMin);
    t.writeInt32(11, this.iCurrentScreenMax)
}
HUYA.DisplayInfo.prototype.readFrom = function (t) {
    this.iMarqueeScopeMin = t.readInt32(1, false, this.iMarqueeScopeMin);
    this.iMarqueeScopeMax = t.readInt32(2, false, this.iMarqueeScopeMax);
    this.iCurrentVideoNum = t.readInt32(3, false, this.iCurrentVideoNum);
    this.iCurrentVideoMin = t.readInt32(4, false, this.iCurrentVideoMin);
    this.iCurrentVideoMax = t.readInt32(5, false, this.iCurrentVideoMax);
    this.iAllVideoNum = t.readInt32(6, false, this.iAllVideoNum);
    this.iAllVideoMin = t.readInt32(7, false, this.iAllVideoMin);
    this.iAllVideoMax = t.readInt32(8, false, this.iAllVideoMax);
    this.iCurrentScreenNum = t.readInt32(9, false, this.iCurrentScreenNum);
    this.iCurrentScreenMin = t.readInt32(10, false, this.iCurrentScreenMin);
    this.iCurrentScreenMax = t.readInt32(11, false, this.iCurrentScreenMax)
}


HUYA.SpecialInfo = function () {
    this.iFirstSingle = 0;
    this.iFirstGroup = 0;
    this.sFirstTips = "";
    this.iSecondSingle = 0;
    this.iSecondGroup = 0;
    this.sSecondTips = "";
    this.iThirdSingle = 0;
    this.iThirdGroup = 0;
    this.sThirdTips = "";
    this.iWorldSingle = 0;
    this.iWorldGroup = 0;
    this.iAmbilightNum = 0;
    this.iAmbilightUpgradeNum = 0;
    this.iWorldBannerNum = 0;
    this.iShowType = 0;
    this.iOpenFaceu = 0;
    this.iOpenGesture = 0
}
HUYA.SpecialInfo.prototype._clone = function () {
    return new HUYA.SpecialInfo
}
HUYA.SpecialInfo.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.SpecialInfo.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.SpecialInfo.prototype.writeTo = function (t) {
    t.writeInt32(1, this.iFirstSingle);
    t.writeInt32(2, this.iFirstGroup);
    t.writeString(3, this.sFirstTips);
    t.writeInt32(4, this.iSecondSingle);
    t.writeInt32(5, this.iSecondGroup);
    t.writeString(6, this.sSecondTips);
    t.writeInt32(7, this.iThirdSingle);
    t.writeInt32(8, this.iThirdGroup);
    t.writeString(9, this.sThirdTips);
    t.writeInt32(10, this.iWorldSingle);
    t.writeInt32(11, this.iWorldGroup);
    t.writeInt32(12, this.iAmbilightNum);
    t.writeInt32(13, this.iAmbilightUpgradeNum);
    t.writeInt32(14, this.iWorldBannerNum);
    t.writeInt16(15, this.iShowType);
    t.writeInt16(16, this.iOpenFaceu);
    t.writeInt16(17, this.iOpenGesture)
}
HUYA.SpecialInfo.prototype.readFrom = function (t) {
    this.iFirstSingle = t.readInt32(1, false, this.iFirstSingle);
    this.iFirstGroup = t.readInt32(2, false, this.iFirstGroup);
    this.sFirstTips = t.readString(3, false, this.sFirstTips);
    this.iSecondSingle = t.readInt32(4, false, this.iSecondSingle);
    this.iSecondGroup = t.readInt32(5, false, this.iSecondGroup);
    this.sSecondTips = t.readString(6, false, this.sSecondTips);
    this.iThirdSingle = t.readInt32(7, false, this.iThirdSingle);
    this.iThirdGroup = t.readInt32(8, false, this.iThirdGroup);
    this.sThirdTips = t.readString(9, false, this.sThirdTips);
    this.iWorldSingle = t.readInt32(10, false, this.iWorldSingle);
    this.iWorldGroup = t.readInt32(11, false, this.iWorldGroup);
    this.iAmbilightNum = t.readInt32(12, false, this.iAmbilightNum);
    this.iAmbilightUpgradeNum = t.readInt32(13, false, this.iAmbilightUpgradeNum);
    this.iWorldBannerNum = t.readInt32(14, false, this.iWorldBannerNum);
    this.iShowType = t.readInt16(15, false, this.iShowType);
    this.iOpenFaceu = t.readInt16(16, false, this.iOpenFaceu);
    this.iOpenGesture = t.readInt16(17, false, this.iOpenGesture)
}

HUYA.PropView = function () {
    this.id = 0;
    this.name = "";
    this.uids = new Taf.Map(new Taf.INT64, new Taf.INT16);
    this.tips = "";
    this.gameids = new Taf.Map(new Taf.INT64, new Taf.INT16)
}
HUYA.PropView.prototype._clone = function () {
    return new HUYA.PropView
}
HUYA.PropView.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.PropView.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.PropView.prototype.writeTo = function (t) {
    t.writeInt32(0, this.id);
    t.writeString(1, this.name);
    t.writeMap(2, this.uids);
    t.writeString(3, this.tips);
    t.writeMap(4, this.gameids)
}
HUYA.PropView.prototype.readFrom = function (t) {
    this.id = t.readInt32(0, false, this.id);
    this.name = t.readString(1, false, this.name);
    this.uids = t.readMap(2, false, this.uids);
    this.tips = t.readString(3, false, this.tips);
    this.gameids = t.readMap(4, false, this.gameids)
}

HUYA.UserHeartBeatReq = function () {
    this.tId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.bWatchVideo = false;
    this.eLineType = HUYA.EStreamLineType.STREAM_LINE_OLD_YY;
    this.iFps = 0;
    this.iAttendee = 0;
    this.iBandwidth = 0;
    this.iLastHeartElapseTime = 0
}
HUYA.UserHeartBeatReq.prototype._clone = function () {
    return new HUYA.UserHeartBeatReq
}
HUYA.UserHeartBeatReq.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.UserHeartBeatReq.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.UserHeartBeatReq.prototype.writeTo = function (t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(4, this.lPid);
    t.writeBoolean(5, this.bWatchVideo);
    t.writeInt32(6, this.eLineType);
    t.writeInt32(7, this.iFps);
    t.writeInt32(8, this.iAttendee);
    t.writeInt32(9, this.iBandwidth);
    t.writeInt32(10, this.iLastHeartElapseTime)
}
HUYA.UserHeartBeatReq.prototype.readFrom = function (t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(4, false, this.lPid);
    this.bWatchVideo = t.readBoolean(5, false, this.bWatchVideo);
    this.eLineType = t.readInt32(6, false, this.eLineType);
    this.iFps = t.readInt32(7, false, this.iFps);
    this.iAttendee = t.readInt32(8, false, this.iAttendee);
    this.iBandwidth = t.readInt32(9, false, this.iBandwidth);
    this.iLastHeartElapseTime = t.readInt32(10, false, this.iLastHeartElapseTime)
}

HUYA.UserHeartBeatRsp = function () {
    this.iRet = 0
}
HUYA.UserHeartBeatRsp.prototype._clone = function () {
    return new HUYA.UserHeartBeatRsp
}
HUYA.UserHeartBeatRsp.prototype._write = function (t, e, i) {
    t.writeStruct(e, i)
}
HUYA.UserHeartBeatRsp.prototype._read = function (t, e, i) {
    return t.readStruct(e, true, i)
}
HUYA.UserHeartBeatRsp.prototype.writeTo = function (t) {
    t.writeInt32(0, this.iRet)
}
HUYA.UserHeartBeatRsp.prototype.readFrom = function (t) {
    this.iRet = t.readInt32(0, false, this.iRet)
}


module.exports = HUYA;