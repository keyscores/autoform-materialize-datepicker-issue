if (Meteor.isClient) {

  Session.setDefault('doc', 0);

  Template.hello.helpers({
    doc: function(){
      return Sales.find().fetch()[ Session.get('doc') ]
    }
  });

  Template.hello.events({
    'click .change': function () {
      console.log("changed");

      if (Session.get('doc') == 1) {
        Session.set('doc', 0 );
      } else {
        Session.set('doc', 1 );
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function(){
    Sales.remove({});

    Sales.insert({
      productNum: 9999,
      date : 1458313442673,
      subproducts: [{ value: 1, timeStamp: 1458313442673}]
    });

    Sales.insert({
      productNum: 10,
      date : 1358313441673,
      subproducts: [{ value: 999, timeStamp: 1358313441673}]
    });
  });
}
