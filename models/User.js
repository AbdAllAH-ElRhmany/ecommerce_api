const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
// const {boolean} = require('webidl-conversions')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    // isAdmin: { type: boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    // createdAt: Date.now()
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  this.password = CryptoJS.AES.encrypt(
    this.password,
    process.env.PASS_SEC
  ).toString();
  console.log(this);
  next();
});

module.exports = mongoose.model("User", UserSchema);
