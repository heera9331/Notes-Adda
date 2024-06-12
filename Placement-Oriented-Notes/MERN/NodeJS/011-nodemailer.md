# Nodemailer

Nodemailer is nodejs libraries or module that used to provided facility to work with email

**Install**

```sh
npm install nodemailer
```

**Create Transport**

```js
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT, // 465
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME, // cpanle email username if you have
    pass: process.env.MAIL_PASSWORD, // not google email password
  },
});

```

**Send Mail**

```js
const  sendMail = async ({ from, to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({ from, to, subject, text, html });
    console.log("Mail sent successfully:", info);
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error;
  }
}

```



