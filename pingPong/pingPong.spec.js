const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const pingPong = require('./');

describe('pingPong', () => {
  it('responds to a ping with a pong', () => {
    const context = {
      done: () => {}
    };

    const spy = chai.spy.on(context, 'done');

    pingPong(context, { "ping": "64daf138-9ae7-41fa-b2aa-b69efa0218e0" });

    expect(spy).to.have.been.called.with(null, { "pong": "64daf138-9ae7-41fa-b2aa-b69efa0218e0" });
  });
});
