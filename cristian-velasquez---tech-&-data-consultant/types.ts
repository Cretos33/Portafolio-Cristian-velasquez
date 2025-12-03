import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  percentage: string;
  description: string;
  icon: LucideIcon;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ToolItem {
  name: string;
  category: string;
}
