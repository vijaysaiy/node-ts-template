import { calculateDiscount } from './utils';
import request from 'supertest';
import app from './app';

describe('App', () => {
    it('should calculate the discount', () => {
        const discount = calculateDiscount(100, 10);
        expect(discount).toBe(10);
    });

    it('should return 200 status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
