import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      return error;
    }
  }

  static async postReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: review,
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}

export default RestaurantApiSource;
