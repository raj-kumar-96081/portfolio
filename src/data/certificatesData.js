import { FaReact, FaPython, FaDumbbell, FaTrophy, FaServer } from 'react-icons/fa';
import { SiHackerrank, SiCoursera, SiUdemy ,SiInfosys} from 'react-icons/si';

export const certificatesData = [
  
  {
    id: 1,
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    issuerIcon: SiUdemy,
    category: 'Technical',
    date: 'Aug 2024',
    skillIcon: FaServer,
    link: 'https://www.udemy.com/certificate/UC-367c097d-84e9-41d7-90a9-a276e691a4b3/',
  },
  {
    id: 2,
    title: 'Problem Solving (Advanced) Certificate',
    issuer: 'AlgoTutor',
    issuerIcon: SiHackerrank,
    category: 'Technical',
    date: 'July 2025',
    skillIcon: FaTrophy,
    link: 'https://drive.google.com/drive/u/0/folders/1RQTWMA-SkPwF0f-0S1bmfFS96_X5MRkW',
  },
  {
    id: 3,
    title: 'Build Generative AI Apps and Solutions',
    issuer: 'Infosys Springboard',
    issuerIcon: SiInfosys,
    category: 'Technical',
    date: 'Sep 2025',
    skillIcon: FaPython,
    link: 'https://drive.google.com/drive/u/0/folders/1--rx1vB4Rn18Pal3zBBfex7XVBiNd5yS', 
  },
  {
    id: 4,
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    issuerIcon: SiCoursera,
    category: 'Technical',
    date: 'Nov 2025',
    skillIcon: FaPython,
    link: '#',
  }

];