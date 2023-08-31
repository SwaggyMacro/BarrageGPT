import fs from 'fs'
import path, { parse } from 'path'

let filepath = process.cwd() + '/template/message.json'
let b = fs.readFileSync(filepath)


function parseMesg() {
    let msg = JSON.parse(b.toString())
    let result = {
        user_nickName: msg.user.nickname,
        user_id: msg.user.id,
        user_gender: msg.user.gender === 1 ? '男' : '女',
        user_level: msg.user.level,
        user_levelImage: msg.user.badgeImageListList[0].urlListList[0],
        user_avatar: msg.user.avatarThumb.urlListList[0],
        user_isAdmin: msg.user.userAttr.isAdmin,
        user_fansLevel: parseInt(msg.user.badgeImageListV2List[0].content.level),
        user_fansLightName: msg.user.badgeImageListV2List[0].content.alternativeText,
    }
    switch (msg.common.method) {
        case 'WebcastGiftMessage':
            result = Object.assign(result, {
                message: msg.common.describe,
                isGift: true,
                gift_id: msg.gift.id,
                gift_name: msg.gift.name,
                gift_number: parseInt(msg.groupCount),
                gift_image: msg.gift.icon.urlListList[0],
                gift_diamondCount: msg.gift.diamondCount,
                gift_describe: msg.gift.describe,
            })
            break
        case 'WebcastChatMessage':
            result = Object.assign(result, {
                isGift: false,
                message: msg.content
            })
            break
    }
    return result
}

parseMesg()