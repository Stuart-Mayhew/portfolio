var button = document.getElementsByClassName('button');


for(var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var activeButton = this.parentNode.parentNode.getElementsByClassName('active');
    for(var i = 0; i < activeButton.length; i++) {
      activeButton[i].classList.remove("active");
    }
    for(var i = 0; i < button.length; i++) {
      if (button[i].classList.contains('active') !== true) {
        document.getElementById(button[i].id.split('-').shift() + '-img').classList.remove('onscreen');
        document.getElementById(button[i].id.split('-').shift() + '-img').classList.add('offscreen');
        document.getElementById(button[i].id.split('-').shift() + '-overlay').classList.remove('display');
        document.getElementById(button[i].id.split('-').shift() + '-overlay').classList.add('no-display');
      };
    };
    this.classList.add('active');
    document.getElementById(this.id.split('-').shift() + '-img').classList.replace('offscreen', 'onscreen');
    document.getElementById(this.id.split('-').shift() + '-overlay').classList.replace('no-display', 'display');
  }, false);
};


//give buttons active / inactive classes so that only one within the category displays at a time.
//toggling no-display and display should make the image zoom off the screen and make the overlay blank
//find out how to animate elemement movements and also to make the image come back to display space. use left/right? reset it to zero to make images on screen? then give left/right a heigh number to make them zoom off again? if left/right value goes over a certain amount, overlay turns blank?
