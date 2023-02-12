const bookingConfirmationMail = (email, company, car, startDate, endDate, city) => {
  return {
    from: "'Prime Ride' <anita-darecka_student2022@wilder.school>",
    to: email,
    subject: "Your ride is booked!",
    html: `
    <h2>We got some great news for you!</h2>
    <h2>Your booking with ${company} is confirmed from ${startDate} till ${endDate} in ${city}.</h2>
    <h2>You will be driving an awesome ${car}.</h2>
    <h1>Find here your promo code to enter on amazon prime to benefit from a free trial during your rental, without obligation : GOFORARIDE90</h1>
    <h3>Do not hesitate to contact us with any questions.</h3>
    <h3>Thanks for choosing Prime Ride!</h3>
    `,
  };
};

module.exports = { bookingConfirmationMail };
