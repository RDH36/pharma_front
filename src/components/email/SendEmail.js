import React from "react";
import emailjs from "emailjs-com";

export default function envoieMail() {
  function sendEmail(e) {
    emailjs.send(
      "service_tb3idji",
      "template_ikzid7g",
      {
        subject: "test",
        name: "nom",
        message: "message",
        email: "lalaintsoaharioela@gmail.com",
        reply_to: "me",
      },
      "KHGasu7x19H73o9X2"
    );
    console.log("lasa");

    // emailjs
    //   .sendForm("gmail", "service_tb3idji", e.target, "KHGasu7x19H73o9X2")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
          />
          <input
            type="text"
            className="form-control"
            placeholder="email"
            name="email"
          />
          <input
            type="text"
            className="form-control"
            placeholder="subject"
            name="subject"
          />
          <input
            type="text"
            className="form-control"
            placeholder="your message"
            name="message"
          />
          <input type="submit" className="btn btn-info" value="send message" />
        </form>
        <button onClick={sendEmail}> envoyer mail2</button>
      </div>
    </div>
  );
}
