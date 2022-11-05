import ListRestaurant from '../views/pages/list-restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
