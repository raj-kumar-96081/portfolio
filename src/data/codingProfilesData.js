import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

export const codingProfilesData = [
  {
    id: 1,
    platform: 'LeetCode',
    icon: SiLeetcode,
    username: '@rajkumar', // Replace with your username
    glowColor: 'rgba(255, 161, 22, 0.5)', // LeetCode Orange
    stats: [
      { label: 'Problems Solved', value: '150+' },
      { label: 'Max Rating', value: '800' },
      { label: 'Top', value: '30%' }
    ],
    link: 'https://leetcode.com/u/RAJ_KUMAR_GUPTA/',
  },
  {
    id: 2,
    platform: 'Codeforces',
    icon: SiCodeforces,
    username: '@rajkumar', // Replace with your username
    glowColor: 'rgba(31, 138, 203, 0.5)', // Codeforces Blue
    stats: [
      { label: 'Rating', value: '968' },
      { label: 'Max Rating', value: '1088' },
      { label: 'Contests', value: '12' }
    ],
    link: 'https://codeforces.com/profile/rl7031177',
  }
];