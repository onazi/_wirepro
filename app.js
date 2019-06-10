//BUNCH OF FUNCTIONS TO PERFORM A PARTICULAR TASK...

//This is to hide the second form__
document.querySelector('.form__signIN').style.display = 'none';

//This function ==> is to display the sign__in page when it being clicked on & remove the signup page
document.querySelector('.formHead__heading--2').addEventListener('click', function(){

    document.querySelector('.form__signUP').style.display = 'none';
    document.querySelector('.form__signIN').style.display = 'block';


});


//This function ==> is to display the sign__up page when it being clicked on & remove the signin page

document.querySelector('.formHead__heading--1').addEventListener('click', function(){

    document.querySelector('.form__signUP').style.display = 'block';
    document.querySelector('.form__signIN').style.display = 'none';

});


//This function ==> is to display the active class on sign__in page  & remove it on signup page

document.querySelector('.formHead__heading--2').addEventListener('click', function(){

      document.querySelector('.formHead__heading--2').classList.add('--activeheader');
      document.querySelector('.formHead__heading--1').classList.remove('--activeheader');

});


//This function ==> is to display the active class on sign__up page  & remove it on signin page

document.querySelector('.formHead__heading--1').addEventListener('click', function(){

    document.querySelector('.formHead__heading--1').classList.add('--activeheader');
    document.querySelector('.formHead__heading--2').classList.remove('--activeheader');
   
}); 