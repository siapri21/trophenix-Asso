import React, { useState } from 'react';
import Marquee from '../components/Partenaires';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès !');
        setFormData({ // Reset form data
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });

      } else {
        toast.error("Erreur lors de l'envoi du message.");
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
      toast.error("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <div className="flex flex-wrap -mx-4 items-center px-9">
        {/* Left: Team and Explanation */}
        <div className="w-full md:w-1/2 px-4">
          <div className="flex justify-center space-x-4 mb-6">
            <img src="/asserts/img/ivan.png" alt="John Doe" className="w-20 h-20 rounded-full" />
            <img src="/asserts/img/jean.png" alt="Jane Smith" className="w-20 h-20 rounded-full" />
            <img src="/asserts/img/merrine.png" alt="Mike Johnson" className="w-20 h-20 rounded-full" />
          </div>
          <p className="text-gray-600 text-center font-bold text-4xl mb-4">
             Nous serions ravis de pouvoir échanger avec vous !
          </p>
          <ul className="space-y-2 text-gray-600 mt-10 ">
            <li>⭐ <span className='font-bold'>Nous écoutons vos enjeux</span> : Pour vous renseigner et vous épauler sur vos projets de reconversion sportive avec enthousiasme et détermination.</li>
            <li>⭐ <span className='font-bold'>Nous vous présentons notre association</span> : Pour vous présenter nos solutions et vous aider à définir votre démarche de reconversion.</li>
            <li>⭐ <span className='font-bold'>Nous vous accompagnons étape par étape</span> : Pour réussir ensemble votre transition vers une nouvelle carrière après le sport professionnel !</li>
          </ul>
          {/* <div className="flex justify-center">
            <img src="/asserts/img/hand-drawn-phoenix-silhouette_23-2150429160.jpg" alt="Phénix" className="w-36 h-40 mt-20" />
            <img src="/asserts/img/DALL·E 2024-11-15 12.15.53 - A stylized phoenix taking flight, with subtle motifs of sports like a basketball, football, or running silhouette integrated into its wings. The image.webp" alt="Phénix" className="w-36 h-40 mt-20" />
          </div> */}
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 mt-5">
          <div className="bg-[#50B4D9] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nom <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Entreprise/Ville</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Objet <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Ils ont fait le pas, et ne le regrettent pas !
        </h1>
        <Marquee>
          <div className="flex justify-center space-x-8">
            <img src="/asserts/img/Invitation_Rencontre_Art-SporTech (5).png" alt="Partenaire 1" className="h-12" />
            <img src="/asserts/img/Invitation_Rencontre_Art-SporTech.png" alt="Partenaire 2" className="h-12" />
            <img src="/asserts/img/Invitation_Rencontre_Art-SporTech (4).png" alt="Partenaire 3" className="h-12" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Contact;