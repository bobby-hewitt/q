var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
 
var Investment = new Schema({
	  title: '',
	  imageUrl: '',
	  videoUrl: '',
	  files: [],
	  updates: [],
	  financeTarget: '',
	  financePreMoneyVal: '',
	  financeRevenue: '',
	  financeComittedFunds: '',
	  financeMinimumInvestment: '',
	  description: '',
	  feature1: '',
	  feature2: '',
	  feature3: '',
});
 
var Investment = module.exports = mongoose.model('Investment', Investment);