  import React from 'react';
  import Images from './Images';


  // function apiCall(){
  //   var xhr =new XMLHttpRequest();
  //   xhr.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       let  flickData = JSON.parse(this.responseText);
  //       console.log(flickData);
  //       for(let i =0; i < flickData.photos.photo.length; i++){
  //       let farm = flickData.photos.photo[i].farm;
  //       let server =flickData.photos.photo[i].server;
  //       let id = flickData.photos.photo[i].id;
  //       let secret = flickData.photos.photo[i].secret;
  //       console.log('<img src="https://farm' + farm+ '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"/>')
  //       let pictures = "<img src='https://farm' + farm+ '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'/>";
  //     }
  //       let photoContainer = document.getElementsByClassName('photos-container');
  //       photoContainer[0].innerHMTL = pictures;
  //    }
  //   };
  //     xhr.open("GET",apiPath);
  //     xhr.send();
  // }
// https://teamtreehouse.com/library/data-fetching-in-react



  const Results = props => {

      const resultsData = props.data;
      let pictures = resultsData.map(data =>
        <Images key ={data.id} url = {"https://farm" + data.farm + ".staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_n.jpg"} />
      );
      return (
        <div className="results-container">
          {pictures}
        </div>
      );
    }

  export default Results;
