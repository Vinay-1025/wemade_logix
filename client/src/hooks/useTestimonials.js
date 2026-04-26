import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

const mockTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechFlow',
    content: 'Wemade Logix delivered exceptional results on our Gen AI and software systems project.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Engineering, Innovate Corp',
    content: 'Their expertise in Gen AI and software design is unmatched in the industry.'
  }
];

export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      try {
        const res = await axiosClient.get('/testimonials?populate=*');
        return res.data.data;
      } catch (err) {
        console.warn('CMS API failed for testimonials, returning mock data:', err);
        return mockTestimonials;
      }
    },
  });
};
