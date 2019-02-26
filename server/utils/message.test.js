var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object', ()=>{
       var from = 'Nuruzzaman Khan';
       var text = 'Hi there, How about you?';
       var message = generateMessage(from, text);

       expect(message.createdAt).toBeA('number');
       expect(message).toInclude({from, text});

    })
})