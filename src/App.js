//API key
//16469998c647e937d782878851dbe5d2
//Secret?
//7825fdf64c88d12b



import React, { Component } from 'react';
import Search from './components/Search';
import Buttons from './components/Buttons';
import NoResultsFound from './components/No-results-found';
import Results from './components/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search />
          <Buttons />
        </header>
        <main className="App-main">
          <NoResultsFound />
          <Results />
        </main>
      </div>
    );
  }
}

export default App;




/*
	Use Create-React-App

	Stateless components
		-Container for keyword and api, fetches photos
		-Header for nav and search
		-Nav menu
		-Form component for search
		-Reusable gallery component for each category of image ie. dog, cat, coffee
		-components for list items and/or individual images?
	CSS should resemble the mock up
	Use React Router
		-install it and set up links routes and navLinks
		-URL should match Routes
		-Routes should work
	Flickr API Key
		-Use yahoo/tumblr account to sign up
		-apply for non-commercial API key https://www.flickr.com/services/apps/create/apply/
		-set up config.js; imports API key into app so can request data

    -config.js should look like :
     const apiKey = 'YOUR API KEY';
    	export default apiKey;
    -import api key into app and save it to variable for reusability
    *Config.js should be listed under the gitignore*
    	Requesting data
    		-Fetch data from API
    		-Data fetching and state should be managed by high level container
    		-https://www.flickr.com/services/api/explore/flickr.photos.search.
    			-Enter a search
    			-limit number of results using per_page argument
    			-Use JSON as output and Do not sign call
    			-click call method at the bottom of the page and it’ll give and example of api call needed to make
    	Displaying Data
    		-Make sure each image uses a key
    		-There should be no console warnings regarding key
    		-titles should be displayed dynamically
    		-url should match the route
    	Search
    		-add search field to find new categories of images

        **Extra Credit**
        	-Add a loading indicator for when the app fetches data
        	-Include 404 error route
        	-Include no matches message

  */
