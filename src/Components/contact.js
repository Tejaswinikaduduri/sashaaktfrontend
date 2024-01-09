import React from 'react';

const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <h2>Contact Information</h2>
        <p>If you have any questions or need assistance, please don't hesitate to contact us. We are here to help!</p>

        <div>
          <h3>Our Address</h3>
          <p>
            Narayanguda <br />
            Hyderabad, Telangana 500024 <br />
            India
          </p>
        </div>

        <div>
          <h3>Email</h3>
          <p>Email: <a href="mailto:Projectschool23@gmail.com">Projectschool23@gmail.com</a></p>
        </div>

        <div>
          <h3>Phone</h3>
          <p>Phone: 9030456231</p>
        </div>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()} Sashakt</p>
      </footer>
    </div>
  );
}

export default Contact;