import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

export const codingProfilesData = [
  {
    id: 1,
    platform: 'LeetCode',
    icon: SiLeetcode,
    username: '@rajkumar', // Replace with your username
    glowColor: 'rgba(255, 161, 22, 0.5)', // LeetCode Orange
    stats: [
      { label: 'Problems Solved', value: '450+' },
      { label: 'Max Rating', value: '1650' },
      { label: 'Top', value: '10%' }
    ],
    link: 'https://leetcode.com/u/yourusername/',
  },
  {
    id: 2,
    platform: 'Codeforces',
    icon: SiCodeforces,
    username: '@rajkumar', // Replace with your username
    glowColor: 'rgba(31, 138, 203, 0.5)', // Codeforces Blue
    stats: [
      { label: 'Rating', value: '1420' },
      { label: 'Max Rating', value: '1500' },
      { label: 'Contests', value: '45' }
    ],
    link: 'https://codeforces.com/profile/yourusername',
  }
];