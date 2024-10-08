import AllRecipes from '../ui/AllRecipes';
import Breakfast from '../ui/Breakfast';
import Desserts from '../ui/Desserts';
import Dinners from '../ui/Dinners';
import Lunches from '../ui/Lunches';

export const categories = [
  {
    Elem: AllRecipes,
    title: 'All recipes',
    key: 'all',
  },
  {
    Elem: Breakfast,
    title: 'Breakfasts',
    key: 'breakfast',
  },
  {
    Elem: Dinners,
    title: 'Dinners',
    key: 'dinners',
  },
  {
    Elem: Lunches,
    title: 'Lunches',
    key: 'lunches',
  },
  {
    Elem: Desserts,
    title: 'Desserts',
    key: 'desserts',
  },
] as const;
