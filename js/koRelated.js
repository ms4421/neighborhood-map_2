//this is where I use KOJS MVVM 
//this script will run after main.js script which loads the map
//will use points from main to assign it to markers
var MapView = function () {
	this.markers = points;
};


//Search throught the markers and only show the one that matches
var ViewModel = function () {
	this.newMap = ko.observable(new MapView());
	var self = this;
	self.searchString = ko.observable('');
	this.markers = ko.dependentObservable(function () {
		var search = self.searchString().toUpperCase();
		//using the arrayFilter of knockout here   
		return ko.utils.arrayFilter(self.newMap().markers, function (marker) {
			if (marker.name.toUpperCase().indexOf(search) >= 0) {
				marker.flag = true;
				return marker.showFlag(true);
			} else {
				marker.flag = false;
				createAllMapLocations();
				return marker.showFlag(false);
			}
		});
	});

};
//apply bindings to the view model
ko.applyBindings(new ViewModel());