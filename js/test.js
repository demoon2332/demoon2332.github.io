// to stop Preloader !

// start function  hello() 
setTimeout(hello(),5000);
var x = document.getElementById("myAudio");
x.play();
// hide content
$('.content').hide();
var arr = [false,false,false,false,false,false,false];
$ = jQuery.noConflict();
setTimeout(function(){
  $('#goodbye').click();
},330000);  //5p30s
var count = 0
function getWish(count){
if(count == 1)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúc thầy cô luôn giữ gìn sức khỏe và tinh thần tươi vui mỗi ngày.</span> '
if(count == 2)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúng em chúc thầy cô có những ngày đến trường đều là những ngày tràn đầy năng lượng và thật ý nghĩa dẫu cho nó là ngày thứ 2 đầy căng thẳng hay cuối tuần thật mỏi mệt.</span>'
if(count == 3)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Dù học online với nhiều khó khăn,cản trở hay những tiết học trên trường đôi lúc tẻ nhạt,chúng em cám ơn vì sự nhiệt tình , tận tâm của thầy cô bấy lâu nay.</span>  ' 
if(count == 4)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Mong sự nghiệp giảng dạy ngày càng thành công và có thêm nhiều kỉ niệm vui buồn cùng với mái trường , đồng nghiệp và cùng các em học sinh,sinh viên.</span>'
if(count == 5)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Chúc thầy cô ngày càng có thêm nhiều kinh nghiệm cũng như kiến thức mới mẻ,quý báu đề truyền đạt , giảng dạy cho các thế hệ sinh viên sau.</span>'
if(count == 6)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Mong rằng tóc thầy , cô đừng vội bạc đi theo năm tháng để dạy chúng em được nhiều điều hay lẽ phải hơn.</span> '
if(count == 7)
  return '<span style="color:black ;font-family: Sofia ;font-size:35px ; ">Gửi các thầy cô kính yêu , thầy cô luôn là người lái đò cần mẫn dìu dắt chúng em mỗi ngày và người truyền lửa cho các sinh viên trẻ như chúng em sau này có hành trang thật tốt để bước đời <3.</span>'
}
function begin_catch(){
///////////////////
Swal.fire({
  title: '<span style="color:#333333 ; font-family: Pacifico ; font-size:35px "> ~ Catch Wish Stars ~\n</span> ',
  text : '',
  imageUrl: './img/star.png',
  imageWidth: '70px',
  width: 600,
  heightAuto: true ,
  showCancelButton :true,
  showDenyButton: true,
  confirmButtonText : '<span style="color:#333333 ;font-family: Sofia ;font-size:25px ; ">Bắt đầu</span>',
  confirmButtonColor: '#FF3333',
  cancelButtonText : '<span style="color:#333333 ;font-family: Sofia ;font-size:25px ;  ">Quay lại</span>',
  denyButtonText :  '<span style="color:#333333 ;font-family: Sofia ;font-size:25px" ;  >Tự động</span>',
  background: '#FF9966',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
  backdrop: `
  rgba(0,0,123,0.4)
  url("./img/cute2.gif")
  right top
  no-repeat
  imageWidth: 
  `
})
.then((result) => {
  if(result.isDenied)  {
    //Swal.fire('Saved!', '', 'success')
    Swal.fire({
      showConfirmButton: false,
      title: '<span style="color:#FF9933 ; font-family: Pacifico ; font-size:60px ">Sao sẽ được bắt tự động !',
      timer: '5000',
      background: ' url(./img/bling.gif)',
      showClass:{
        popup: 'animate__animated animate__rubberBand'
      },
      hideClass: {
        popup : 'animate__animated animate__fadeOutRight'
      },
      backdrop: `
        rgba(2,2,123,0.55)
        url(./img/end_backdrop.gif)
        no-repeat
    
    `
    });
    setTimeout(auto,3500);
  }
  if(result.isConfirmed){
    rule();
  }
});

// if --> wish 
// if --> wish
// arr to make sure that alert wont show when star was clicked

/////////////////////
$('.correct li:nth-child(1)').click(function(){
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    if(arr[0]==false)
    {
      count ++;
      $('.correct li:nth-child(1)').removeClass(".star li:hover");
      $('.correct li:nth-child(1)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer: '5200',
        background: 'url(./img/background2.jpg)',
        backdrop:'url(./img/background1.png) no-repeat',
        showClass:{
          popup: 'animate__animated animate__backInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOutUp'
        }
      })
      arr[0]=true;
    }
});
$('.correct li:nth-child(2)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[1]==false)
    {
      count ++;
      $('.correct li:nth-child(2)').removeClass(".star li:hover");
      $('.correct li:nth-child(2)').addClass("active");
      if(parseInt(count) == 5)
      {
        str = 'You almost fininished, only 2 stars left';
      };
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer : '5200',
        background:'url(img/dreamcatcher.jpg)',
        backdrop: 'url(img/cutestar.gif)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOutUp'
        }
      })
      arr[1]=true;
    }
});
$('.correct li:nth-child(3)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[2]==false)
    {
      count ++;
      $('.correct li:nth-child(3)').removeClass(".star li:hover");
      $('.correct li:nth-child(3)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text :"stars :"+ count + "/ " + 7,
        timer : '5200',
        background: 'url(img/s2.jpg)',
        backdrop :'url(img/rise.gif)',
        showClass: {
          popup: 'animate__animated animate__bounceInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOutUp'
        }

      })
      arr[2]=true;
    }
});
$('.correct li:nth-child(4)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[3]==false)
    {
      count ++;
      $('.correct li:nth-child(4)').removeClass(".star li:hover");
      $('.correct li:nth-child(4)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : "stars :"+count + "/ " + 7,
        timer : '5200',
        background: 'url(./img/skygate.png)',
        backdrop: 'url(img/japan.jpg) ',
        showClass: {
          popup: 'animate__animated animate__backInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOutUp'
        }
      })
      arr[3]=true;
    }
});
$('.correct li:nth-child(5)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[4]==false)
  {
    count ++;
    $('.correct li:nth-child(5)').removeClass(".star li:hover");
    $('.correct li:nth-child(5)').addClass("active");
    Swal.fire({
      title: ""+getWish(count),
      text : "stars :"+count + "/ " + 7,
      timer : '5200',
      background: 'rgba(1,1,123,0.4)',
      backdrop: 'url(img/s4.jpg)',
      showClass: {
        popup: 'animate__animated animate__bounceInLeft'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
      }
    })
    arr[4]=true;
  }
});
$('.correct li:nth-child(6)').click(function(){
  var audio = new Audio('sound/tick.mp3');
    audio.play();
  if(arr[5]==false)
  {
    count ++;
    $('.correct li:nth-child(6)').removeClass(".star li:hover");
    $('.correct li:nth-child(6)').addClass("active");
    Swal.fire({
      title: ""+getWish(count),
      text : "stars :"+count + "/ " + 7,
      timer : '5200',
      background:'rgba(1,3,123,0.4)',
      backdrop : 'url(./img/s5.jpg)',
      showClass: {
        popup: 'animate__animated animate__bounceInLeft'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
      }
    })
    arr[5]=true;
  }
});
$('.correct li:nth-child(7)').click(function(){
var audio = new Audio('sound/tick.mp3');
  audio.play();
if(arr[6]==false)
  {
    count ++;
    $('.correct li:nth-child(7)').removeClass(".star li:hover");
    $('.correct li:nth-child(7)').addClass("active");
    Swal.fire({
      title: ""+getWish(count),
      text : "stars :"+count + "/ " + 7,
      timer : '5500',
      background: 'url(./img/galaxy.gif) ',
      backdrop: 'rgba(156, 39, 176, 0.57) url(./img/thanks2.gif) no-repeat right top ',
      showClass: {
        popup: 'animate__animated animate__bounceInLeft'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
      }
    })
    arr[6]=true;
  }
})
/////////////////////

$('.incorrect li:nth-child(1)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(2)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(3)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(4)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(5)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(6)').click(function(){
  incorrect_star();
})
$('.incorrect li:nth-child(7)').click(function(){
  incorrect_star();
})

//////////////////
}


function hello(){
  setTimeout(function() {
    $('.spinner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
  }, 1600)
  setTimeout(function() {
    Swal.fire({
      title: '<span style="font-size:35px ;color:#009966; font-style:italic; ">Nhân ngày nhà giáo Việt Nam, em có món quà nho nhỏ gửi đến thầy cô</span> ',
      timer: '8500',
      imageUrl: './img/flower.gif',
      imageHeight: 200,
      imageWidth: 370,
      background: '#6699FF',
      backdrop: 'rgba(156, 39, 176, 0.57)',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup : 'animate__animated animate__fadeOutDown'
      },
    }).then(function(){
      $('.content').show(2000);
    });
  }, 2500)
  
}
function mess()
{
    Swal.fire({
        title: 'Gửi đến thầy cô kính mến ! ',
        text: "Nhân ngày nhà giáo Việt Nam, chúc tất cả các thầy cô giáo sức khỏe, hạnh phúc và thành công. Đặc biệt chúc thầy cô đang đọc tin nhắn này ngày nhà giáo thật vui, thật thành công, mọi lời chúc tốt đẹp nhất. Và kính chúc các thầy cô vì đã và đang cố gắng hết mình cho thế hệ trẻ hôm nay.",
        size: '10px',
        showCancelButton: true,
        showCancelButton : true,
        showDenyButton : true,
        confirmButtonText :"Tiếp tục",
        denyButtonText : "Lùi lại",
        cancelButtonText : "Hủy",
        background: '#66FFCC',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */ 
         if (result.isConfirmed) {
          Swal.fire({
            title: 'Lời nhắn nhủ của thầy cô gửi đến các bạn : ',
            input: 'text',
            inputAttribute :{
              size: '32px',
            },
            width: 600,
            padding: '3em',
            background: '#FF9999',
            backdrop: `
              rgba(43, 165, 137, 0.45)
              bottom left
              no-repeat
            `
          })     
        }
        if(result.isDenied)  {
          //Swal.fire('Saved!', '', 'success')
          Swal.fire({
            title: {
              tab1: {
                label: 'Tab 1'
              },
          
              tab2: {
                label: 'Tab 2'
              }
            },
          })
          //window.location.href = 'https://youtu.be/PwuJp0nFb0M?t=87';
        }
      });
}
function correct_star(){
  if(arr[parseInt(count)]==false)
    {
      count ++;
      $('.correct li:nth-child(1)').removeClass(".star li:hover");
      $('.correct li:nth-child(1)').addClass("active");
      Swal.fire({
        title: ""+getWish(count),
        text : count + "/ " + 7,
        timer: '8000',
        position : 'top-end',
      })
      arr[parseInt(count)]=true;
    }
}
function incorrect_star(){
  var audio = new Audio('sound/duck.mp3');
  audio.play();
  Swal.fire({
    title:'Sai rồi không phải cái này :<',
    icon: 'error',
    timer: '1400'
  });
}
function auto()
{
  var s = 6200;
  count = 0 ; // reset to zero
  arr = [false,false,false,false,false,false,false]; // reset to zero
    setTimeout(function(){
      $('.correct li:nth-child(1)').click();
  }, 1000);
    setTimeout(function(){
      $('.correct li:nth-child(2)').click();
    }, s);
    setTimeout(function(){
      $('.correct li:nth-child(3)').click();
    }, s*2);
    setTimeout(function(){
      $('.correct li:nth-child(4)').click();
    }, s*3);
    setTimeout(function(){
      $('.correct li:nth-child(5)').click();
    }, s*4);
    setTimeout(function(){
      $('.correct li:nth-child(6)').click();
    }, s*5);
    setTimeout(function(){
      $('.correct li:nth-child(7)').click();
    }, s*6);
}
function goodbye(){
  Swal.fire({
    customClass: {
      popup: 'border-radius-10'
    },
    title:'<span style="color:#333333 ; font-family: Pacifico ; font-size:125% "> Cám ơn mọi người đã ghé thăm ! <span> \nXin gửi đến mọi người 1 bài hát.... ',
    timer: '7000',
    //imageUrl: './img/goodbye.jpg',
    backdrop :'url(./img/end.gif)',
    background: 'transparent',
    confirmButtonText: '<3',
    confirmButtonColor: '#FF3333',
    //width: '65%',
    imageWidth: '400px',
    imageHeight: '280px',
    html: '<span style="color:#333333 ; font-family: Pacifico ; font-size:45px "> <strong></strong> s.</span>',
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = Math.ceil(Swal.getTimerLeft()/1000)
      }, 1000)
    },
  });
  setTimeout(function(){
    window.location.href = 'https://youtu.be/PwuJp0nFb0M';
  },7500);
 
}
function rule(){
  Swal.fire({
    title: '<span style="color:#333333 ; font-family: Pacifico ; font-size:35px "> ~ Rules: ~\n<img src="./img/rule.png" width= 280px height= 180px></img><img src="./img/rule2.png" width= 280px height= 150px></img></span> ',
    timer: 7000,
    width: 500,
    html: '<span style="color:#333333 ; font-family: Pacifico ; font-size:40px ">Are you ready..... <strong></strong> s.</span>',
    onBeforeOpen: () => {
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = Math.ceil(Swal.getTimerLeft()/1000)
      }, 1000)
    },
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__hinge'
    },
    background: 'url("./img/wood.jpg")',
   
    //<img src="./img/rule.png" width= 280px height= 220px></img> \n<img src="./img/rule2.png" width= 280px height= 180px></img>
  })
}
// onBeforeOpen: () => {
//   Swal.showLoading()
//   timerInterval = setInterval(() => {
//     Swal.getContent().querySelector('strongg')
//       .textContent = Math.ceil(Swal.getTimerLeft() / 1000)
//   }, 1000)
// },
