import nodemailer from 'nodemailer';

export default async function nodeMailer(req, res) {
  const canSend = (body) => {
    if (
      !body.firstname ||
      !body.lastname ||
      !body.phone ||
      !body.message ||
      !body.sender
    )
      return false;
    return true;
  };
  if (!canSend(req.body))
    return res.status(500).send({ message: 'Missing field' });

  const {
    body: { firstname, lastname, phone, message, email, sender },
  } = req;

  const options = {
    port: 587,
    host: 'smtp.office365.com',
    auth: {
      user: `${sender}@eukleia.eu`,
      pass:
        sender === 'recrutement'
          ? process.env.RECRUTEMENT_MAIL_PASSWORD
          : process.env.INFO_MAIL_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(options);

  try {
    await transporter.verify();

    const payload = {
      from: `${sender}@eukleia.eu`,
      to: ['charline.marion@eukleia.eu'],
      subject: 'Eukleia, Candidature spontanée',
      html: `<p>${email}</p><p>${firstname} ${lastname},</p><p>${phone}</p><p>${message}</p>`,
    };
    // const responseUser = {
    //   from: 'info@mindsapp.io',
    //   to: email,
    //   subject: 'Confirmation de réception',
    //   html: `<h2>Chers ${firstname} ${lastname},</h2>
    //   <p>Avant tout, nous souhaitons vous remercier pour votre candidature spontanée.</p>
    //   <p>Nous vous contacterons le plus rapidement possible</p>
    //   <p>Cordialement, l'Equipe Mindsapp</p>
    //   <p>
    //     Eukelia
    //   <br/>
    //   Rue Eugène-Marziano, 17A
    //   <br/>
    //   1227 Carouge, Suisse
    //   <br />
    //   Tel: +41 22 301 30 04
    //   <br />
    //   info@mindsapp.io
    //   </p>
    //   `,
    // };
    await transporter.sendMail(payload);
    // await transporter.sendMail(responseUser);
    return res.status(200).send({ message: 'Message Envoyé' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}
