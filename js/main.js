window.onload = function() {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookies = document.getElementById('accept-cookies');
    var declineCookies = document.getElementById('decline-cookies');
  
    function getCookie(name) {
      var cookies = document.cookie.split('; ');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        if (cookie[0] === name) return cookie[1];
      }
      return null;
    }
  
    // Function to enable Google Maps
    function enableGoogleMaps() {
      var mapIframe = document.createElement('iframe');
      mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.2540365355575!2d22.95026864869535!3d40.62845764083103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839ccd9ebf701%3A0xe0a530f3d322cb52!2sALEXANDER%20INNOVATION%20ZONE!5e0!3m2!1sen!2sgr!4v1699396164300!5m2!1sen!2sgr';
      mapIframe.width = '100%';
      mapIframe.height = '450';
      mapIframe.style.border = '0';
      mapIframe.allowFullscreen = '';
      mapIframe.loading = 'lazy';
      mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
      document.getElementById('map-placeholder').appendChild(mapIframe);
    }

    // function to disable Google Maps
    function disableGoogleMaps() {
      var map = document.getElementById('map-placeholder');
      map.style.display = 'none';
    }
  
    // Only show the banner if the user hasn't seen it before
    var cookieBannerDisplayed = getCookie('cookieBannerDisplayed');
    console.log('cookieBannerDisplayed:', cookieBannerDisplayed);
    if (!cookieBannerDisplayed) {
      cookieBanner.style.display = 'block';
    } else {
      cookieBanner.style.display = 'none';
      if (cookieBannerDisplayed === 'true') {
        if (document.getElementById('map-placeholder')) {
          enableGoogleMaps();
        }
      }
    }
  
    // When the user accepts cookies, hide the banner and remember their choice
    acceptCookies.addEventListener('click', function() {
      cookieBanner.style.display = 'none';
      document.cookie = 'cookieBannerDisplayed=true; max-age=2592000'; // Set the cookie to expire in 1 year
      enableGoogleMaps(); // Enable Google Maps
    });
  
    // When the user declines cookies, just hide the banner and remember their choice
    declineCookies.addEventListener('click', function() {
      cookieBanner.style.display = 'none';
      document.cookie = 'cookieBannerDisplayed=false; max-age=2592000'; // Set the cookie to expire in 1 year
    });

    var headerContainer = document.querySelector('.header-container');
    var main = document.querySelector('main');
  
    var headerContainerHeight = headerContainer.offsetHeight;
    main.style.marginTop = headerContainerHeight + 'px';
  };

var resetCookies = document.getElementById('reset-cookies');

resetCookies.addEventListener('click', function() {
  document.cookie = 'cookieBannerDisplayed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  location.reload();
});

window.onscroll = function() {
  var headerContainer = document.querySelector('.header-container');
  var headerTop = document.querySelector('.header-top');
  var companyLogo = document.querySelector('.company-logo');
  var companyLogoLink = document.querySelector('.company-logo a');
  var h1 = document.querySelector('.header-top h1');
  var nav = document.querySelector('nav');
  var services = document.querySelector('main');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > window.innerHeight / 2) {
    headerContainer.style.position = 'fixed';
    headerContainer.style.top = '0';
    services.style.marginTop = headerContainer.offsetHeight + 'px';
    companyLogo.style.justifyContent = 'center';
    companyLogoLink.style.transform = 'translateX(-37%)';
    h1.style.display = 'none';
    if (window.innerWidth < 500) {
       nav.style.display = 'none';
    }
    headerTop.style.justifyContent = 'center';
  } else {
    headerContainer.style.position = 'static';
    services.style.marginTop = '0';
    companyLogo.style.justifyContent = 'flex-end';
    companyLogoLink.style.transform = 'translateX(0)';
    h1.style.display = 'block';
    nav.style.display = 'block';
    headerTop.style.justifyContent = 'space-between';
  }
};

document.querySelector('.company-logo a').addEventListener('click', function(event) {
  event.preventDefault();
  var header = document.querySelector('#header');
  header.scrollIntoView({ behavior: 'smooth' });
});