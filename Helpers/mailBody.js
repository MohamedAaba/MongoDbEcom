const { Transporter } = require("../Config/mailTrsp")

exports.Mail = async (from, to, subject, text, html) => {
   try {
      const mail = await Transporter.sendMail({
         from: from,
         to: to,
         subject: subject,
         text: text,
         html: html, // <a href="locagk;/"></a>
      })
      return mail
   } catch (error) {
      return "mail error"
   }
}
