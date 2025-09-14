import medTechImg from '../assets/med-tech.jpg';
import autonomousVehiclesImg from '../assets/vehicles-image.jpg';
import agriculture from '../assets/agriculture.jpg'
import store from '../assets/survelliance.png'

const ApplicationsData = [
    {
      id: 'med-tech',
      title: 'Med Tech',
      description: 'As the volume of medical images continues to grow, the use of computer vision can be used to augment the effectiveness of clinicians',
      image: medTechImg,
      imageAlt: 'Medical Technology',
      link: '/med-tech',
      className: 'med-tech-card',
      imagePosition: 'right' // image on right, content on left
    },
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicles',
      description: 'As the volume of medical images continues to grow, the use of computer vision can be used to augment the effectiveness of clinicians',
      image: autonomousVehiclesImg,
      imageAlt: 'Autonomous Vehicles',
      link: '/autonomous-vehicles',
      className: 'autonomous-vehicles-card',
      imagePosition: 'left' // image on left, content on right
    },
    {
      id: 'med-tech',
      title: 'Surveillance',
      description: 'As the volume of medical images continues to grow, the use of computer vision can be used to augment the effectiveness of clinicians',
      image: store,
      imageAlt: 'Shoppers',
      link: '/med-tech',
      className: 'med-tech-card',
      imagePosition: 'right' // image on right, content on left
    },
    {
      id: 'autonomous-vehicles',
      title: 'Agriculture',
      description: 'As the volume of medical images continues to grow, the use of computer vision can be used to augment the effectiveness of clinicians',
      image: agriculture,
      imageAlt: 'Autonomous Vehicles',
      link: '/autonomous-vehicles',
      className: 'autonomous-vehicles-card',
      imagePosition: 'left' // image on left, content on right
    },
    
  ];

export default ApplicationsData