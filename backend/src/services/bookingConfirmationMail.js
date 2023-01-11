const bookingConfirmationMail = (email, company, car, startDate, endDate, city) => {
  return {
    from: "'Prime Ride' <anita-darecka_student2022@wilder.school>",
    to: email,
    subject: "Your ride is booked!",
    html: `
    <h3>We got some great news for you!</h3>
    <p>Your booking with ${company} is confirmed from ${startDate} till ${endDate} in ${city}.</p>
    <p>You will be driving an awesome ${car}.</p>
    <p>Do not hesitate to contact us with any questions.</p>
    <p>Thanks for using Prime Ride!</p>
    `,
  };
};

module.exports = { bookingConfirmationMail };
