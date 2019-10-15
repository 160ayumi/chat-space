json.content @message.content
json.created_at @message.created_at.to_s
json.user @message.user.name
json.image @message.image.url
json.id @message.id