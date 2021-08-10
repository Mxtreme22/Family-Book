var images = [
    "https://openclipart.org/image/800px/282746",
    "https://clipartmag.com/images/girl-cartoons-to-draw-27.png",
    "https://www.pngkey.com/png/full/90-905691_cartoon-dad-png-vector-free-library-cartmans-dad.png",
    "https://image.freepik.com/free-vector/middle-aged-woman-formal-clothes-illustration_82574-1421.jpg"
    ];
    
    var family_name = [
    "Mannan Mahajan",
    "Mannat Mahajan",
    "Manoj Gupta",
    "Manila Gupta"
    ];
    
    
    var i = 0;
    function nextslide() {
      document.getElementById("album").src = images[i];
      document.getElementById("names").innerHTML= family_name[i];
      i++;
      if(i == 4)
      {
        i=0;
      }
    }
    
    