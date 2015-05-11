5/11/2015
This section is what all changes I made after the second evaluation came back.
After the feedback I made major changes to the page. I used places nearby search api results instead of hardcoding any array. I used results from the palces api to show markers on the page. Seperated the code that is related to the map only and knockoutJS part in diff js files. organized all my code better. made my search list div fluid so that it will resize based on results from search


Steps to run the app:
	1. open index.html on any modern browser
	2. it should showup a map and a search input bar
	3. click any of the markers on the map and will open a salon near you
	4. in input bar try to search for Salon (it will show all salons in our ko list)
	5. in input bar search for a salon name and it will show that salon marker only on the map and the list
	6. to see all markers on the page just refresh the page


Sites used:
	stackoverflow.com
	knockoutjs.com/documentation
	jquery.com

APIs used:
	1. google Map API
	2. google map places nearby API
	3. google streetview API

format:
	Used bootstrap to format the divs of my page 

Steps for development:
	1. included google map in our page
	2. used geolocation of html5 to get the location of the user and mark it on the page
	3. used places api to find all salons in current location of user and bound to the wind of map
	4. got result from places and saved the points in an arra
	5. showed markers for those points
	6. sued streetview to assign to image of each location 
	7. added infowindows for all points icluding the image of the lcations got from streetview
	8. added a search navigation in our page 

///////////////////////////////////////////////////////
For this project I used the following sites:

stackoverflow.com
knockoutjs.com/documentation
jquery.com

How to run this app:
1. click index.html file with a modern browser
2. in screen you should see about 5-6 location markers on the map and a list of all those locations on the left side of the screen
3. click a marker to see the street view of the location
4. in search bar you can search for one of the locations from the list and it will show only that location on the map and list
5. after search you should refresh the page to see all markers again


Steps of development:
Took the courses on apis on udacity site
Did some more reading and research on knockoutjs by going through many online tutorials
started with a list of locations of salons in Metuchen NJ
Used google Map API to show the map with those locations
Used the lat and lang of those locations to create google map markers for each of those
Used the lat and lang to use google Street View API to get the image for each of the locations
used those images in my map infowindow with the name of locations





