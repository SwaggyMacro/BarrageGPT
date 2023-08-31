import json


class BarrageMessage:
    def __init__(self, data):
        data = json.loads(data)
        self.action = data.get("action")
        message_data = data.get("message", {})
        self.repeat_count = message_data.get("repeatCount")
        self.gift_id = message_data.get("gift_id")
        self.gift_name = message_data.get("gift_name")
        self.gift_number = message_data.get("gift_number")
        self.gift_image = message_data.get("gift_image")
        self.gift_diamond_count = message_data.get("gift_diamondCount")
        self.gift_describe = message_data.get("gift_describe")
        self.user_level = message_data.get("user_level")
        self.user_fans_level = message_data.get("user_fansLevel")
        self.user_id = message_data.get("user_id")
        self.user_nickname = message_data.get("user_nickName")
        self.user_avatar = message_data.get("user_avatar")
        self.user_gender = message_data.get("user_gender")
        self.user_isAdmin = message_data.get("user_isAdmin")
        self.user_fans_lightName = message_data.get("user_fansLightName")
        self.user_level_image = message_data.get("user_levelImage")
        self.msg_content = message_data.get("msg_content")
        self.isGift = message_data.get("isGift")

    def __str__(self):
        attributes = vars(self)
        attribute_str = ", ".join(f"{key}={value}" for key, value in attributes.items())
        return f"BarrageMessage({attribute_str})"
