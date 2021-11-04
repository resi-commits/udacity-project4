import { exportAllDeclaration } from '@babel/types'
// babel-polyfill because of ReferenceError: https://knowledge.udacity.com/questions/174638
import "babel-polyfill";
import {checkForURL} from '../client/js/urlChecker'

describe('Testing the checkForURL() function', () => {
  describe('checkForURL() function should exist', () => {
    test('It should return true', async () => {
      expect(checkForURL).toBeDefined();
    })
  })
  describe('checkForURL() function should be a function', () => {
    test('It should be a function', async () => {
      expect(typeof checkForURL).toBe('function');
    })
  })
  describe('checkForURL() function with valid URL', () => {
    test('It should return true', async () => {
      const res = checkForURL('https://news.google.com/topstories?hl=de&gl=DE&ceid=DE:de');
      expect(res).toBe(true);
    })
  })
  describe('checkForURL() function with not valid URL', () => {
    test('It should return false', async () => {
      const res = checkForURL('iamnotanURL');
      expect(res).toBe(false);
    })
  })
})