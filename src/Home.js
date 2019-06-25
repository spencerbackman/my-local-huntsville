import React from 'react';
import Poppy from './bars/Poppy';
import ArtTrail from './activities/ArtTrail';
import Bullet from './activities/Bullet';
import Gardens from './activities/Gardens';
import Bar805 from './bars/Bar805';
import Brickhouse from './bars/Brickhouse';
import Btr from './bars/Btr';
import Otbx from './bars/Otbx';
import Straight from './bars/Straight';
import Yellowhammer from './bars/Yellowhammer';
import Boot from './restaurants/Boot';
import BrokenEgg from './restaurants/BrokenEgg';
import { Link } from 'react-router-dom';
import BackgroundSlideshow from 'react-background-slideshow';
import News from './News';
import HomeEvents from './HomeEvents';
import './css/styles.css';
import background from './ashleyPhotos/welcome_to_huntsville.png';
import background3 from './ashleyPhotos/diners.png';
import background2 from './ashleyPhotos/jefferson_st.png';
import background1 from './ashleyPhotos/big_springs_park.png';
import background5 from './ashleyPhotos/pond.png';
import background6 from './ashleyPhotos/street_exposure.png';
import smallBack from './ashleyPhotos/lowe_mill.png';
import smallBack2 from './ashleyPhotos/usa_rocket.png';
import smallBack3 from './ashleyPhotos/soldier_statue.png';
import smallBack4 from './ashleyPhotos/clinton_row.jpg';
import { Helmet } from 'react-helmet';

class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      isBig: true
    }
    this.findWidth = this.findWidth.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0,0);
    this.findWidth();
    window.addEventListener('resize', this.findWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.findWidth);
  }
  findWidth = () => {
    if(window.innerWidth > 420 && !this.state.isBig) {
      this.setState({
        isBig: true
      })
    } else if(window.innerWidth <= 420 && this.state.isBig) {
      this.setState({
        isBig: false
      })
    }
  }
  showRestaurants = () => {
    var places = [
      <Yellowhammer key="1"/>, <Brickhouse key="2"/>, <Btr key="3"/>, <Straight key="4"/>, <Boot key="5"/>, <BrokenEgg key="6"/>, <Poppy key="7"/>, <Otbx key="8"/>, <Bar805 key="9"/>
    ];
    var a = [0,1,2,3,4,5,6,7,8];
    var n;
    var r = []
    for (n=0; n < 4; ++n) {
      var i = Math.floor((Math.random() * (9-n)));
      r.push(a[i]);
      a[i] = a[8-n];
    }
    var first = r[0]
    var second = r[1]
    var third = r[2]
    var fourth = r[3]
    let width = window.innerWidth;
    if(width <= 1250) {
      return [places[first], places[second]]
    }else if (width <= 1650) {
      return [places[first], places[second], places[third]]
    } else {
      return [
        places[first], places[second], places[third], places[fourth]
      ]
    } 
  }

  showThings = () => {
    let width = window.innerWidth;
    if(width <= 1250) {
      return [ <Gardens key="Botanical_Gardens"/>, <Bullet key="Bullet & Barrel" /> ]
    } else if(width <= 1650) {
      return [<Gardens key="Botanical_Gardens"/>, <Bullet key="Bullet & Barrel" />, <ArtTrail key="Secret_Art_Trail" />]
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title> My Local Huntsville </title>
          <link rel="canonical" href="https://www.mylocalhuntsville.com/"/>
          <meta name="description" content="My Local Huntsville is a all around guide to Huntsville Alabama. Whether you are in town visiting or a local we keep up to date with whats happening and the best things to do in Huntsville Alabama." />
        </Helmet>
        <div className="top-wrapper">
          {this.state.isBig
          ?  <BackgroundSlideshow images={[background,background1,background2,background3,background5,background6]} />
          : <BackgroundSlideshow images={[smallBack, smallBack2, smallBack3, smallBack4]} />}
        </div>
        <div className="top-container">
          <h2 className="top-header2"> MY LOCAL</h2>
          <h1 className="top-header"> HUNTSVILLE </h1>
        </div>
        <a className="weatherwidget-io" href="https://forecast7.com/en/34d73n86d59/huntsville/?unit=us" data-label_1="HUNTSVILLE" data-label_2="WEATHER" data-theme="original" data-basecolor="#454063" >HUNTSVILLE WEATHER</a>        
        <div className="spacer"></div>
        <div className="home-news-wrapper">
          <News />    
        </div>
        <h2 className="home-news-header"> Upcoming Events </h2>
        <div className="home-events">
          <iframe className="home-video" title="Crush Wine Festival Press Conference" src="https://player.vimeo.com/video/344067489" frameborder="0" allowFullScreen></iframe>
          <HomeEvents />
        </div>
        <div className="line"></div>
        <h2 className="header2"> Restaurants, Breweries, & Bars </h2>
        <div className="page-link-holder">
          <Link className="page-link" to="/partners"> SEE ALL </Link>
        </div>
        <div className="line"></div>
        <div className="mid-wrapper">
          {this.showRestaurants()}
        </div>
        <div className="line1"></div>
        <h2 className="header2"> Things to Do </h2>
        <div className="page-link-holder">
          <Link className="page-link" to="/partners"> SEE ALL </Link>
        </div>
        <div className="line"></div>
        <div className="mid-wrapper">
            {this.showThings()}
        </div>
      </div>
    )
  }
}

export default Home;