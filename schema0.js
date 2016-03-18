Sales = new Mongo.Collection("sales");
Sales.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Sales.attachSchema(new SimpleSchema({
  productNum: {
    type: Number,
    label: "Product ID"
  },
  date : {
    type: Number,
    label: "Sale Date",

    autoform: {
      type:"pickadate",
    }
  },
  subproducts: {
   type: Array,
   label: "Recoupable",

   optional: true
  },
   'subproducts.$': {
     type: Object
   },
   'subproducts.$.value': {
     type: Number,
     label: "Sale Value",

     decimal: true
   },
   'subproducts.$.timeStamp': {
     label: "Sale Date",

     type: Number,
     autoform: {
       type:"pickadate"
     }
    }
}));
