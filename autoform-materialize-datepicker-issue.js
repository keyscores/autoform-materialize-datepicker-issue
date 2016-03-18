if (Meteor.isClient) {
  // counter starts at 0

  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    doc: function(){
      return Sales.find().fetch()[0]
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function(){
    Sales.upsert({
      productNum: 10
      date : 1458313442673
      subproducts: { value: 1, timeStamp: 1458313442673}
    });
  });
}
