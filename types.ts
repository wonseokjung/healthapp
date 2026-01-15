
export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  time: string;
  duration: string;
  calories: number;
  type: 'aerobic' | 'strength' | 'flexibility';
  icon: string;
  color: string;
}

export interface MealItem {
  id: string;
  name: string;
  details: string;
  calories: number;
  image?: string;
}
