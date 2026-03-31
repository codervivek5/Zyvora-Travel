import ContactDetails from '../components/ContactDetails';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">We'd love to hear from you</p>
      </div>
      <ContactDetails />
    </div>
  );
};

export default Contact;
