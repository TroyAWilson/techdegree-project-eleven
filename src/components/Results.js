import React from 'react';

let apiPath = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=53cf66d3c089556312212a14427c1c84&per_page=12&format=json&nojsoncallback=1&auth_token=72157670220667788-d99aed3053f675ac&api_sig=55092d8b08bd7ef0f4b43849a0fd809f"

let pictures = "";

function apiCall(){
  var xhr =new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let  flickData = JSON.parse(this.responseText);
      console.log(flickData);
      for(let i =0; i < flickData.photos.photo.length; i++){
      let farm = flickData.photos.photo[i].farm;
      let server =flickData.photos.photo[i].server;
      let id = flickData.photos.photo[i].id;
      let secret = flickData.photos.photo[i].secret;
      console.log('<img src="https://farm' + farm+ '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"/>')
      pictures = "<img src='https://farm' + farm+ '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'/>";
    }
    document.getElementsByClassName('photos-container').innerHMTL = pictures;
   // $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
 }
};
  xhr.open("GET",apiPath);
  xhr.send();
}


class Results extends React.Component{
  render(){
    apiCall();

    return(
      <div className ="photos-container">

      </div>
    );
  }
}
 export default Results;
