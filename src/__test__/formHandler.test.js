// babel-polyfill because of ReferenceError: https://knowledge.udacity.com/questions/174638
import "babel-polyfill";
import { handleSubmit } from '../client/js/formHandler'

describe('Testing the handleSubmit() function', () => {
  describe('handleSubmit() function should exist', () => {
    test('It should return true', async () => {
      expect(handleSubmit).toBeDefined();
    })
  })
  describe('handleSubmit() function should be a function', () => {
    test('It should be a function', async () => {
      expect(typeof handleSubmit).toBe('function');
    })
  })
})