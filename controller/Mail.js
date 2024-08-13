import { design } from '../design/design';

exports.sendEmail = async (req, res) => {
  try {

    console.log('------ Sending Mail.... ------\n', doc)

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    let info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: process.env.MAIL_SUBJECT,
      html: design,
    })

    console.log('------ Mail Successfully Sent ------\n', doc)

  } catch (error) {
    console.error(error)
    return res.status(400).json({
      success: false,
      message: "Something Went Wrong while Sending Mail"
    })
  }
}