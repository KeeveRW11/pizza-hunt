const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
  {
      replyId: {
          type:Schema.Types.ObjectId,
          default: () => Types.ObjectId()
      },    
      replyBody: {
          type:String
      },
      writtenBy: {
          type: String
      },
      CreatedAt: {
          type: Date,
          default: Date.now,
          get: CreatedAtVal => dateFormat(CreatedAtVal)
      }
  },
  {
    toJSON: {
      // virtuals: true,
      getters: true
    }
  } 
);

const CommentSchema = new Schema(
  {
    writtenBy: {
        type: String
    },
    CommentBody: {
        type: String
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        get: CreatedAtVal => dateFormat(CreatedAtVal)
    },
    replies: [ReplySchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

// replies: [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'Comment'
//     }
// ]



const Comment = model('Comment', CommentSchema);

module.exports = Comment;