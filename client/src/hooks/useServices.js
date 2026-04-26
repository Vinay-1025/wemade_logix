import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';
import { servicesData } from '../data/servicesData';

// Mock data for development is now imported from servicesData.js

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        const res = await axiosClient.get('/services');
        return res.data.data;
      } catch (err) {
        console.warn('CMS API failed, returning mock data:', err);
        return servicesData;
      }
    },
  });
};
