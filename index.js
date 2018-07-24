const bcrypt = require('bcrypt')
const expect = require('chai').expect
const TEST_PASSWORD = 'TEST_PASSWORD'
const SALT_ROUNDS = 10

it('should be able to encrypt a password', () => {
  return bcrypt.hash(TEST_PASSWORD, SALT_ROUNDS)
    .then(hash => console.log('The generated has is :', hash))
})

it('should be able to decrypt a password', () => {
  return bcrypt.hash(TEST_PASSWORD, SALT_ROUNDS)
    .then(hash => bcrypt.compare(TEST_PASSWORD, hash))
    .then(res => expect(res).to.be.true)
})
