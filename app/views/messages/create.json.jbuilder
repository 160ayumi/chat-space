json.content @message.content
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user @message.user.name
json.image @message.image.url