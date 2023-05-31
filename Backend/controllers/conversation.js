const Conversation = require('../models/conversation');

const setConversation = async (request, response) => {
  const senderID = request.body.senderId;
  const recieverID = request.body.recieverId;

  try {
    const exist = await Conversation.findOne({ members: { $all: [senderID, recieverID] } });
    if (exist) {
      return response.status(200).json('Conversation Already exist');
    }
    const newConversation = new Conversation({
      members: [senderID, recieverID],
    });
    await newConversation.save();
    return response.status(200).json('Conversation Saved Successfully');
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = { setConversation };
