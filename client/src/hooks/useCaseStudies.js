import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

const mockCaseStudies = [
  { 
    id: 1, 
    title: 'Smart City Integration', 
    slug: 'smart-city',
    client: 'Metro City Council',
    category: 'IoT'
  },
  { 
    id: 2, 
    title: 'Next-Gen Processor Architecture', 
    slug: 'next-gen-processor',
    client: 'Silicon Dynamics',
    category: 'VLSI'
  }
];

export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['case-studies'],
    queryFn: async () => {
      try {
        const res = await axiosClient.get('/case-studies?populate=*');
        return res.data.data;
      } catch (err) {
        console.warn('CMS API failed for case studies, returning mock data:', err);
        return mockCaseStudies;
      }
    },
  });
};
