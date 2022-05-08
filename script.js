// //var name = 'Senior';
// var num = 50;
// var sum = name + num + 30;
// //console.log(sum);
// var Fname = prompt('What is your first name?')
// var Lname = prompt('What is your last name?')
// var name = Fname + ' ' + Lname
// var num1 = 10
// var num2 = 50
// var total = Number(num2) + Number(10)
// console.log(total)

// let grade = 90

// if(grade === 80)
// {
//     alert("Pass")
// }
// else
// {
//    alert ("Fail")
// }

// var na ='kevon';
// // console.log(na.toUpperCase());
// // console.log(na.toLowerCase());

// console.log(na.substring(0, 4))


// for(i = 1; i <= 5; i++)
// {
//     console.log(i)
// }

// const name = ['Kevon', 'Andre', 'Senior']

// // for(i = 0; i < 2; i++)
// // {
// //     console.log(name[1])
// // }

// const bar = name.map(function(barName) {
//     return barName
// })
// console.log(bar)

// function myFunction() 
// {
//     console.log('Hello, my name is Kevon!', 
//              'I am an aspiring developer')
// }

// myFunction()

// const dam = (document.getElementsByClassName('col'));

// console.log(dam[4])

// $(document).ready(function(){
//     $("p").fadeIn(5000);
// })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}