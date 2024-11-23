import React from 'react';
import SEO from '../components/SEO';


const LegalPage = () => {


  return (
    <div className="container mx-auto p-8">
      <SEO
        title="À propos de Trophenix"
        description="En savoir plus sur Trophenix, une association dédiée à la reconversion des sportifs professionnels."
        keywords="association sportive, reconversion, mécénat, sponsoring"
      />

      <h1 className="text-3xl font-bold mb-8 text-center">Informations Légales et Politiques de l'Association Trophenix</h1>

      {/* Section Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 1 - Contact</h2>
        <p>Pour toute question, suggestion, ou demande d’assistance, vous pouvez nous contacter via les moyens suivants :</p>
        <ul className="list-disc list-inside ml-4">
          <li>Email : contact@trophenix.org</li>
          <li>Téléphone : 01 23 45 67 89</li>
          <li>Adresse : 123 Rue de l'Association, 75000 Paris, France</li>
        </ul>
      </section>

      {/* Section Mentions Légales */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 2 - Mentions Légales</h2>
        <p>L'Association Trophenix est enregistrée sous le numéro de SIRET XXXXXXXXX. Le siège social est situé au 123 Rue de l'Association, 75000 Paris, France.</p>
        <p><strong>Hébergement :</strong> Ce site est hébergé par [Nom de l'hébergeur], situé à [Adresse de l'hébergeur].</p>
        <p><strong>Propriété Intellectuelle :</strong> Les contenus, logos, images et textes présents sur ce site sont la propriété exclusive de l'Association Trophenix, sauf mention contraire. Toute reproduction ou représentation est interdite sans autorisation écrite préalable.</p>
      </section>

      {/* Section CGU */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 3 - Conditions Générales d'Utilisation (CGU)</h2>
        <h3 className="text-xl font-semibold mb-2">3.1 Acceptation des CGU</h3>
        <p>En accédant et en utilisant ce site, vous acceptez les présentes Conditions Générales d’Utilisation (CGU). Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser notre site.</p>

        <h3 className="text-xl font-semibold mb-2">3.2 Utilisation du site</h3>
        <p>Les utilisateurs s'engagent à ne pas utiliser le site pour des activités illicites ou dans le but de nuire à l'image de l'Association Trophenix. Tout comportement frauduleux ou non autorisé peut entraîner des poursuites judiciaires.</p>
      </section>

      {/* Section Protection des Données Personnelles */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 4 - Politique de Protection des Données Personnelles</h2>
        <h3 className="text-xl font-semibold mb-2">4.1 Collecte des Données</h3>
        <p>Nous collectons certaines données personnelles lorsque vous utilisez notre site, telles que votre nom, votre adresse e-mail, et vos préférences de navigation. Ces données sont collectées dans le respect des lois en vigueur.</p>

        <h3 className="text-xl font-semibold mb-2">4.2 Utilisation des Données</h3>
        <p>Les données recueillies sont utilisées uniquement pour améliorer votre expérience sur notre site et pour des raisons statistiques. Vos données ne seront jamais partagées avec des tiers sans votre consentement, sauf obligation légale.</p>

        <h3 className="text-xl font-semibold mb-2">4.3 Droits des Utilisateurs</h3>
        <p>Conformément au RGPD, vous disposez de droits sur vos données personnelles, y compris le droit d'accès, de rectification, de suppression et d'opposition. Pour exercer ces droits, veuillez nous contacter à l’adresse email fournie dans la section Contact.</p>
      </section>

      {/* Section Politique de Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 5 - Politique de Cookies</h2>
        <h3 className="text-xl font-semibold mb-2">5.1 Utilisation des Cookies</h3>
        <p>Notre site utilise des cookies pour améliorer l'expérience utilisateur. Un cookie est un petit fichier stocké sur votre appareil lors de votre visite sur notre site.</p>

        <h3 className="text-xl font-semibold mb-2">5.2 Types de Cookies Utilisés</h3>
        <p>Nous utilisons des cookies de session pour suivre les pages visitées et des cookies persistants pour se souvenir de vos préférences. Vous pouvez paramétrer votre navigateur pour refuser les cookies si vous le souhaitez.</p>
      </section>

      {/* Section Préférences de Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Article 6 - Préférences de Cookies</h2>
        <p>Vous pouvez gérer vos préférences de cookies en modifiant les paramètres de votre navigateur ou en accédant à notre outil de gestion des cookies. Cela vous permet de personnaliser votre expérience de navigation en fonction de vos choix.</p>
        <p>Pour en savoir plus sur la gestion des cookies, consultez la section "Politique de Cookies" ci-dessus.</p>
      </section>
    </div>
  );
};

export default LegalPage;
