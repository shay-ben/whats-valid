const { Schema, model, Types } = require('mongoose');

const optionSchema = new Schema(
  {
    optionBody: {
      type: String,
      required: true,
    },
    numVotes: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);


const pollSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: [optionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

pollSchema.virtual('totalVotes').get(function () {
  let totalVotes = 0;
  for (let i=0; i < this.options.length; i++) {
    totalVotes += this.options.numVotes;
  }
  return totalVotes;
});

pollSchema.methods = {
	vote: function (optionId) {
		const option = this.options.find(x => x._id == optionId);
		option.numVotes++;
		return this;
	}
};
  
const Poll = model('Poll', pollSchema);

module.exports = {Poll, pollSchema, optionSchema};