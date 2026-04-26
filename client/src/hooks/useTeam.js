import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

const mockTeam = [
  { 
    id: 1, 
    name: 'Dr. John Vintech', 
    role: 'Founder & CEO',
    bio: 'Pioneer in VLSI design with over 20 years of experience.'
  },
  { 
    id: 2, 
    name: 'Jane Logix', 
    role: 'Head of IoT',
    bio: 'Leading innovation in smart sensor networks and cloud integration.'
  }
];

export const useTeam = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      try {
        const res = await axiosClient.get('/team-members?populate=*');
        return res.data.data;
      } catch (err) {
        console.warn('CMS API failed for team, returning mock data:', err);
        return mockTeam;
      }
    },
  });
};
