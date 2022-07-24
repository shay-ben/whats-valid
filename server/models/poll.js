const { Schema, model, Types } = require('mongoose');

const OptionSchema = new Schema(
  {
    optionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    optionBody: {
      type: String,
      required: true,
    },
    numVotes: {
      type: Number
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);


const PollSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: [OptionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

PollSchema.virtual('totalVotes').get(function () {
  let totalVotes = 0;
  for (let i=0; i < this.options.length; i++) {
    totalVotes += this.options.numVotes;
  }
  return totalVotes;
});
  
const Poll = model('Poll', PollSchema);

module.exports = Poll;