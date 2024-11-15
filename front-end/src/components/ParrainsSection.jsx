import { Link } from 'react-router-dom';

const ParrainsSection = () => {
  return (
    <section   style={{width: "100vw"}}>
      <div className="flex flex-col md:flex-row items-center justify-between" style={{ marginLeft: '10%', marginRight: '10%' }}>
        
      <div className="w-full md:w-2/5 mt-8 md:mt-0 text-center md:text-left">
  <h2 className="text-3xl font-bold text-blue-950 mb-4">
    Un accompagnement précieux pour nos champions en transition
  </h2>
  <p className="text-[#2f4858] mb-6">
    Nos parrains et marraines jouent un rôle clé dans le soutien de nos athlètes tout au long de leur reconversion. Grâce à leur expérience, leur bienveillance et leur engagement, ils aident nos sportifs à aborder sereinement cette nouvelle étape de leur vie. Ensemble, ils ouvrent la voie à de nouvelles perspectives professionnelles.
  </p>
  <Link to="/parrains">   
    <button className="bg-[#F46D2B] text-white py-2 px-6 rounded-full hover:bg-orange-500 transition duration-300">
      Découvrir nos parrains et marraines
    </button>
  </Link>
</div>

        {/* Left Image Slider Section */}
        <div className="flex w-full md:w-3/5 mt-4 md:m-8">
          <div className="flex w-full space-x-0">
            {/* First image */}
            <img 
              src="/asserts/img/300.jpg" 
              alt="Small 1" 
              className="w-full h-96  object-cover m-0"
            />
            {/* Second image */}
            <img 
              src="/asserts/img/300.jpg" 
              alt="Small 2" 
              className="w-1/3  object-cover m-0"
            />
            {/* Third image */}
            <img 
              src="/asserts/img/300.jpg" 
              alt="Small 3" 
              className="w-1/3  object-cover m-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ParrainsSection
