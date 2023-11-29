import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`http://localhost:8080/api/lockers/zipcode/12345`, () => {
    return HttpResponse.json([
      {
        "id": 1,
        "name": "Postnord Lähiboksi Prisma Limingantulli",
        "totalCabinets": 20,
        "city": "OULU",
        "address": "Nuottasaarentie 1",
        "zipcode": "12345"
      }
    ])
  }),
  http.get(`http://localhost:8080/api/lockers/zipcode/67890`, () => (new HttpResponse.json([])))
]