sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPurchaseCreate: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Name": "",
				"Category": "",
				"Metal": "",
				"GemPearl": "",
				"Price": 0,
				"ProductImage": "",
				"___FK_90b940d9ff5ec71817519e15_00032": ""
			};
		},
		getDefaultValuesForCreateProvider: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Name": "",
				"email": "",
				"Phone": "",
				"URI": ""
			};
		}
	};
});
