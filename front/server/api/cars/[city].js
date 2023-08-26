import cars from '@/data/cars.json';

export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event)
  let filterCars = cars.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });
  if (make) {
    filterCars = filterCars.filter((car) => {
      return car.make.toLowerCase() === make.toLowerCase();
    });
  }
  if (minPrice) {
    filterCars = filterCars.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }
  if (maxPrice) {
    filterCars = filterCars.filter((car) => {
      return car.price <= parseInt(maxPrice);
    });
  }
  return filterCars;
})