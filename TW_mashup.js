var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );


//require( ["js/qlik", "./qBlob.js"], function ( qlik, qBlob )  {
require( ["js/qlik"], function ( qlik ) {
window.qlik = qlik;

	
	qlik.setOnError( function (error) {
		console.log(error);
	});
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
		
	});
	//qlik app
	var app ;
	//data for case listing
	
	

	function getQlikApp () {
	
		return qlik.openApp( "Consumer Sales.qvf", config );
		//return qlik.openApp( "ddaefb3c-66a4-4d49-ade7-048cc43025f5", config );
				

		
		
	}
	
		

	//callbacks -- inserted here 
	

	//
	// Defining Module
	//
	var helpdeskApp = angular.module( "helpdeskApp", ['ngRoute'] );
	
	//
	// Defining Routes
	//
	
	helpdeskApp.config( function ( $routeProvider ) {
		$routeProvider.when( '/Executive_TW_Business', {
			templateUrl: 'main.html',
			controller: 'MainCtrl'
		} )
		
		
		.when( '/Digital_TW_Business_MIS', {
			templateUrl: 'digital.html',
			controller: 'Digital_TWCtrl'
		} )
		
		.when( '/Manufacture_Analysis', {
			templateUrl: 'manufacture.html',
			controller: 'Manufacture_AnalysisCtrl'
		} )
		

		.when( '/', {
				controller: 'MainCtrl',
				templateUrl: './main.html'
			} );
	} );
	
	
	function exportData(objId){
	  
	app.getObject(objId).then(function(model){
	var table = qlik.table(model);
	table.exportData().then(function(reply){
	window.open(prefix.substring(0,prefix.length - 1)+reply.result.qUrl,"_blank");
	});
	table.exportData({download:true,filename:'data'});
	
	
	});
	
	}
	
	
	
	//controllers
	helpdeskApp.controller( "MainCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}
		//get objects -- inserted here --
		
	 
		
		
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
	});
	
	
			app.getObject('qfilter','mHzvAm');
		
	app.getObject( 'QV00', 'CurrentSelections' );

	
	
	app.getObject('QV-6','ajMAEu');
	app.getObject('QV-5','NrHfp');
	app.getObject('QV-4','ajMAEu');
	app.getObject('QV-3','bJSZttJ');
	app.getObject('QV-2','ajMAEu');
	app.getObject('QV-1','NrHfp');

	
$("#a1").click(function(){


});
	
	
	
	
	$('#a2').click(function(e){
	exportData("JnVGP");
	
	});
	$('#a3').click(function(e){
	exportData("FwJhNM");
	
	});
	
	
		$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app level commands
				case 'page1':
					page1();
					break;
				case 'page2':
					page2();
					break;					
				case 'clearAll':
					app.clearAll();
					break;
				
			}
		} );
	
	
	
	
		var visList = [];
	
	page1();
	function page1() {
		cleanup();
		// using app.visualization.get instead of app.getObject
		app.visualization.get('vCNaSe').then(function(vis){vis.show('QV1-03');visList.push(vis);});
		app.visualization.get('MEAjCJ').then(function(vis){vis.show('QV1-02');visList.push(vis);});
		app.visualization.get('qamd').then(function(vis){vis.show('QV1-01');visList.push(vis);});
	}
	
	function page2() {	
		cleanup();
		// using app.visualization.get instead of app.getObject
		app.visualization.get('KnASd').then(function(vis){vis.show('QV1-03');visList.push(vis);});
		app.visualization.get('dcksUYY').then(function(vis){vis.show('QV1-02');visList.push(vis);});
		app.visualization.get('akDGX').then(function(vis){vis.show('QV1-01');visList.push(vis);});
	}	

	function cleanup(){
		visList.forEach(function(vis){
			vis.close().then(function(ret){console.log('closed ' + vis.id);});
		});
		visList = [];
	}
	
	
	qlik.resize();
	
	}] );
	
	
	
	
	
	
	
	
		//Product_Analysis
	helpdeskApp.controller( "Digital_TWCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}	//get objects -- inserted here --
		
		
		
	
			app.getObject('qfilter','BfSqyC');
		app.getObject( 'QV00', 'CurrentSelections' );
		
		app.getObject('QV1-06','KnASd');
	app.getObject('QV1-07','dcksUYY');
	app.getObject('QV1-04','akDGX');
	
	
	app.getObject('QV1-05','vvAbDn');
	
	
	app.getObject('QV-9','bJSZttJ');
	app.getObject('QV-8','ajMAEu');
	app.getObject('QV-7','NrHfp');
	
	
	$('#a4').click(function(e){
	exportData("SZDMW");
	
	});
	$('#a5').click(function(e){
	exportData("FbatZj");
	
	});
	$('#a6').click(function(e){
	exportData("mftXMnV");
	
	});
	$('#a7').click(function(e){
	exportData("RtjUNj");
	
	});
		
	
	
	
	
	
	/*$("#save05").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-05', 'chart.jpg');
	});
	
	
	$("#save06").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-06', 'chart.jpg');
	});
	
	
	$("#save07").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-07', 'chart.jpg');
	});
	
	$("#save08").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-08', 'chart.jpg');
	});*/
	
	
	qlik.resize();
	
	
	}] );
	
	
		//Order_Commissioning
	helpdeskApp.controller( "Manufacture_AnalysisCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}	//get objects -- inserted here --
		
	
			app.getObject('qfilter','BfSqyC');
		app.getObject( 'QV00', 'CurrentSelections' );
		
		app.getObject('QV1-08','qEqbcMm');
	app.getObject('QV1-09','LXAaTP');
		app.getObject('QV1-10','TqwwFf');
		
	
	
	
	$('#a8').click(function(e){
	exportData("gnGZnKK");
	
	});
	
	$('#a9').click(function(e){
	exportData("pwJj");
	
	});
	
	

	/*
		$("#save08").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-08', 'chart.jpg');
	});
	
		$("#save09").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-09', 'chart.jpg');
	});*/
	
	qlik.resize();
	
	}] );
	
	
	angular.bootstrap( document, ["helpdeskApp", "qlik-angular"] );
	qlik.setOnError( function ( error ) {
		//TODO:bootstrap removes html elements on dismiss..should hide instead
		$( "#errmsg" ).html( error.message ).parent().show();
	} );

	//

} );