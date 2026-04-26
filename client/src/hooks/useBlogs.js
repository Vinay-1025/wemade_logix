import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';

const mockBlogs = [
  {
    id: 1,
    title: 'Future of Gen AI',
    slug: 'future-of-gen-ai',
    excerpt: 'Exploring how Gen AI is reshaping the industrial landscape.',
    category: 'Technology'
  },
  {
    id: 2,
    title: 'Future of Cloud Computing',
    slug: 'future-of-cloud-computing',
    excerpt: 'Exploring how Cloud Computing is reshaping the industrial landscape.',
    category: 'Technology'
  }
];

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      try {
        const res = await axiosClient.get('/blog-posts?populate=*');
        // Strapi v4/v5 returns { data: { data: [...] } }
        return res.data.data;
      } catch (err) {
        console.warn('CMS API failed for blogs, returning mock data:', err);
        return mockBlogs;
      }
    },
  });
};
