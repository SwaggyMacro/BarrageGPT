import json


import json

class BarrageMessage:
    def __init__(self, type, room_id, timestamp, uid, nickname, msg_content=None, face=None, gift_type=None, gfid=None, gfcnt=None, gift_name=None, gift_icon=None, price_big=None, price_total=None):
        self.type = type
        self.room_id = room_id
        self.timestamp = timestamp
        self.uid = uid
        self.nickname = nickname
        self.msg_content = msg_content
        self.face = face
        self.gift_type = gift_type
        self.gfid = gfid
        self.gfcnt = gfcnt
        self.gift_name = gift_name
        self.gift_icon = gift_icon
        self.price_big = price_big
        self.price_total = price_total

    @classmethod
    def from_json(cls, json_str):
        data = json.loads(json_str)
        if data["type"] == "chat":
            data = data['data']
            return cls(
                "chat",
                data.get("room_id", None),
                data.get("timestamp", None),
                data.get("uid", None),
                data.get("nickname", None),
                data.get("msg_content", None),
                data.get("face", None)
            )
        elif data["type"] == "gift":
            data = data['data']
            return cls(
                "gift",
                data.get("room_id", None),
                data.get("timestamp", None),
                data.get("uid", None),
                data.get("nickname", None),
                None,  # chat 类型没有这些属性，因此设置为 None
                data.get("face", None),
                data.get("gift_type", None),
                data.get("gfid", None),
                data.get("gfcnt", None),
                data.get("gift_name", None),
                data.get("gift_icon", None),
                data.get("price_big", None),
                data.get("price_total", None)
            )

    def to_json(self):
        data = {
            "type": self.type,
            "room_id": self.room_id,
            "timestamp": self.timestamp,
            "uid": self.uid,
            "nickname": self.nickname,
        }
        if self.type == "chat":
            data["msg_content"] = self.msg_content
            data["face"] = self.face
        elif self.type == "gift":
            data["gfid"] = self.gfid
            data["gfcnt"] = self.gfcnt
            data["gift_name"] = self.gift_name
            data["gift_icon"] = self.gift_icon
            data["price_big"] = self.price_big
            data["price_total"] = self.price_total

        return json.dumps(data)

    def __str__(self):
        return self.to_json()
