define(['aloha/plugin'], function (Plugin) {
    'use strict';
 
    return Plugin.create('knockout-binding', {
        init: function () {
        	/*
        	require (["jquery", "ko"], function ($, ko) {
        		"use strict";
        				
        		ko.bindingHandlers.aloha = (function () {
        			var nextAvailableBindingId = 0;
        			var bindedObservables = {};
        			
        			var lastUsedBindingId = -1;
        			
        			Aloha.bind("aloha-smart-content-changed", function(event, editable) {
        				var actBindingId = lastUsedBindingId = parseInt (editable.editable.obj.attr("__alohaBindingId__"));
        				bindedObservables[actBindingId](editable.editable.getContents ());
        			});
        			
        			return {
        				init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        					bindedObservables[nextAvailableBindingId] = valueAccessor();
        					viewModel["__alohaBindingId__"] = nextAvailableBindingId;
        					$(element).attr("__alohaBindingId__", nextAvailableBindingId);
        					
        					nextAvailableBindingId += 1;
        					
        					$(element).aloha ();
        				},
        				update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        					var actBindingId = parseInt ($(element).attr("__alohaBindingId__"));
        					if (actBindingId !== lastUsedBindingId) {		    		
        						var observable = valueAccessor();
        						$(element).html(observable());
        					} 
        				}
        			};
        		} ());
        	});
        	*/
        }
    });
});