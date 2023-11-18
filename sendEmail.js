const nodemailer = require('nodemailer');

// Create a transporter using iCloud SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 1025,
  secure: false,
  auth: {
    user: 'Project.1', // Your iCloud email address
    pass: 'Secret.1' // Your iCloud password or app-specific password
  }
});

// Function to send appointment details via email
function sendAppointmentDetails(appointmentDetails) {
    from: 'njabulosteve@icloud.com',
    to; 'njabulosteve@icloud.com', // Your iCloud email for receiving appointment details
    subject; 'New Appointment Booking',
    text, `Name: ${appointmentDetails.firstName} ${appointmentDetails.lastName}\nEmail: ${appointmentDetails.email}\nDate & Time: ${appointmentDetails.dateTime}\nService: ${appointmentDetails.service}`
  }

// Function to send appointment details via email
function sendAppointmentDetails(appointmentDetails) {
  const mailOptions = {
    from: 'njabulosteve@icloud.com',
    to: 'njabulosteve@icloud.com', // Your iCloud email for receiving appointment details
    subject: 'New Appointment Booking',
    text: `Name: ${appointmentDetails.firstName} ${appointmentDetails.lastName}\nEmail: ${appointmentDetails.email}\nDate & Time: ${appointmentDetails.dateTime}\nService: ${appointmentDetails.service}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Example appointment details (to be obtained from your booking form)
const appointment = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  dateTime: '2023-12-01 10:00 AM',
  service: 'Haircut'
};

// Call the function to send appointment details
sendAppointmentDetails(appointment);