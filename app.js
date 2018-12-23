function setDate(){
  //For Seconds
  const secondHand=document.querySelector('.second-hand');
  const now=new Date();
  const seconds=now.getSeconds();
  const secondsDegrees=((seconds/60)*360)+90;
  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
  //For Minutes
  const minHand=document.querySelector('.min-hand');
  const min=now.getMinutes();
  const minDegrees=((min/60)*360)+90;
  minHand.style.transform=`rotate(${minDegrees}deg)`;
  //For Hours
  const hourHand=document.querySelector('.hour-hand');
  const hour=now.getHours();
  const hourDegrees=((hour/12)*360)+90;
  hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}
 
//The timeout in setInterval is 1000miliSeconds=1sec
setInterval(setDate,1000);