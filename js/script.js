$(document).ready(function(){

   var currentUser=1;
   var usersNumber=$('.users-conatiner .user-item').length

  $('.prev-btn').on('click', function(){
    if(currentUser >1){
        currentUser-=1
        displayUser(currentUser)
    }
    else{
      currentUser=usersNumber
      displayUser(currentUser)
  }
  })
  $('.next-btn').on('click', function(){
      if(currentUser !==usersNumber){
          currentUser+=1
          displayUser(currentUser)
      }
      else{
        currentUser=1
        displayUser(currentUser)
    }
})


    displayUser=(userId)=>{
        $('article').removeClass('active')
        $(`article[data-id=${userId}]`).addClass('active')

        $('.current_slide').text(currentUser)
    }
    
    $('.count_slide .total_slides').text(usersNumber)
   


})