/*

# How To Use!
` go to youtube and open console (ctrl + i + shift)
then go to console section and put the script then click (Enter) 
----------------------- Simple Ads Skipper ------------------------------------
`
*/

setTimeout(() => {
const buttonSkipper1 = document.querySelector('.ytp-ad-skip-button');
const buttonSkipper2 = document.querySelector('.ytp-ad-overlay-close-button'); 

  if(buttonSkipper1) {
    buttonSkipper1.click(); 
    console.log('ads skip.')
} else if(buttonSkipper2){
  buttonSkipper2.click(); 
  console.log('ads skip.');
}
},1500)
