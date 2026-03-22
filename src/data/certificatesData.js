import { FaReact, FaPython, FaDumbbell, FaTrophy, FaServer } from 'react-icons/fa';
import { SiHackerrank, SiCoursera, SiUdemy } from 'react-icons/si';

export const certificatesData = [
  {
    id: 1,
    title: 'Advanced React and Web Vitals',
    issuer: 'Coursera',
    issuerIcon: SiCoursera,
    category: 'Technical',
    date: 'Jan 2026',
    skillIcon: FaReact,
    link: '#', // Add your actual certificate URL here
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    issuerIcon: SiCoursera,
    category: 'Technical',
    date: 'Nov 2025',
    skillIcon: FaPython,
    link: '#',
  },
  {
    id: 3,
    title: 'Backend APIs and Node.js',
    issuer: 'Udemy',
    issuerIcon: SiUdemy,
    category: 'Technical',
    date: 'Aug 2025',
    skillIcon: FaServer,
    link: '#',
  },
  {
    id: 4,
    title: 'Problem Solving (Advanced) Certificate',
    issuer: 'HackerRank',
    issuerIcon: SiHackerrank,
    category: 'Technical',
    date: 'Mar 2025',
    skillIcon: FaTrophy,
    link: '#',
  },
  {
    id: 5,
    title: 'State Level Powerlifting Championship',
    issuer: 'State Sports Authority',
    issuerIcon: FaTrophy,
    category: 'Non-Technical',
    date: 'Dec 2024',
    skillIcon: FaDumbbell,
    link: '#',
  }
];