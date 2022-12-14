const internshipDetails = {
  companyName: {
    type: String,
    // required: [true, "Please provide company name"],
    maxlength: 30,
    minlength: 2,
  },
  companyAddress: {
    type: String,
    // required: [true, "Please provide company address"],
    maxlength: 70,
    minlength: 5,
  },
  supervisor: {
    type: String,
    // required: [true, "Please provide supervisor name"],
    maxlength: 20,
    minlength: 2,
  },
  supervisorContact: {
    type: String,
  },
  typeOfWork: {
    type: String,
    maxlength: 20,
    minlength: 2,
  },
  renderedHours: {
    type: String,
    default: "0",
    maxlength: 4,
    minlenght: 1,
  },
};

const internsAssets = {
  // profile img- bg image- notif - chat - feedback
  profileImage: {
    type: String,
  },
  backgroundImage: {
    type: String,
  },
  notification: {
    // type: mongoose.Schema.Types.ObjectId,
    notif: [],
  },
  chat: {
    // type: mongoose.Schema.Types.ObjectId,
    // required: [true, "Message is required!!!!"],
    // red: "users",
    messages: [],
    //sender, receiver and message
  },
  feedback: {
    feedBack: [],
  },
};

const verification = {
  isVerified: {
    type: Boolean,
    default: false,
  },
  hasSentVerification: {
    type: Boolean,
    default: false,
  },
  isRejected: {
    type: Boolean,
    default: false,
  },
  remarks: {
    type: String,
  },
};

module.exports = {internshipDetails, internsAssets, verification};
