var counter=1;
function autoslide(){
  if(counter==10)
  {
    counter=1;
  }else{
      counter++;

  }
// the reason why we have an index because we need to specify the postion of the class since we can have many same name of the class
  // that we mentioned it's place in the html,Where using "id" no need to specify the position
  // in the html since it can detacte it it auto because we only use it once
  document.getElementsByClassName("slideshow")[0].src="images/"+counter+".jpg"
}
setInterval(autoslide,1000);
