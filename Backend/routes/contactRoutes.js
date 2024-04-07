const Contact = require("../models/contact");

function contactUs(req, res) {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    if (!newContact) return res.json({ msg: " Field Required" });
    // const existingmsg = await User.findOne({ $or: [{ name }, { email }] });
    // if (existingUser) {
    //   return res.status(400).json({ success: false, message: 'MSG already exists' });
    // }
    if (!name == "" || !email == "" || !message == "") {
      return res.json({ msg: "Field Required" });
    }
    newContact.save();
    console.log(newContact);
    return res.json({ status: "MSG SAVED" }).status(201);
  } catch (error) {
    console.log(" contact us : ", error);
  }
}

module.exports = contactUs;
