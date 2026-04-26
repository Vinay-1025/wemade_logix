import { 
  Monitor, 
  Cpu, 
  Terminal, 
  Zap, 
  BookOpen, 
  BarChart,
  Smartphone,
  Globe,
  Settings,
  Shield,
  Layers,
  Database,
  Code,
  PenTool,
  Users
} from 'lucide-react';

const iconMap = {
  Monitor,
  Cpu,
  Terminal,
  Zap,
  BookOpen,
  BarChart,
  Smartphone,
  Globe,
  Settings,
  Shield,
  Layers,
  Database,
  Code,
  PenTool,
  Users
};

export const getIcon = (name) => {
  return iconMap[name] || Settings; // Fallback to Settings icon
};
