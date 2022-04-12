import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    topic: String,
    postedBy: {
      userName: {
        type: String,
        default: "Jon",
      },
    },
    liked: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: true,
    },
    handle: {
      type: String,
      default: "JonShih",
    },
    time: {
      type: Date,
      default: Date.now.toUTCString,
    },
    title: String,
    tuit: String,
    profileImage: {
      type: String,
      default: "../../tuiter/assets/rat-jam.gif",
    },
    linkedImage: String,
    stats: {
      comments: {
        type: Number,
        default: 0,
      },
      retuits: {
        type: Number,
        default: 0,
      },
      likes: {
        type: Number,
        default: 0,
      },
    },
  },
  { collection: "tuits" }
);
export default schema;
