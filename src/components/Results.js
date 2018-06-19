  import React, {Component} from 'react';

  let apiPath = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ceeb20e173205666a75dbc47e6852b82&per_page=12&format=json&nojsoncallback=1&auth_token=72157696437573661-7ac8bcdd07c6a56f&api_sig=a0b22c3f565956692078899773e4e78b"

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


  class Results extends Component {

    constructor(props){
      super(props);
        this.state = {
          pictures: []
        };
    }

    componentDidMount(){
      fetch(apiPath)
          .then(res => res.json())
            .then(
              (results) => {
                this.setState({
                  pictures: results.photos.photo[0]
                });
                console.log(results.photos.photo);
              }
          )
          console.log(this.state.pictures);
    }



    render() {
      return (
        <div>

        </div>
      );
    }
  }

  export default Results;
