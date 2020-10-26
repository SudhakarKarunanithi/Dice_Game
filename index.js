
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImage1 = "dice"+randomNumber1+".png";
    var imageSource1 ="images/"+randomImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",imageSource1);


    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomImage2 = "dice"+randomNumber2+".png";
    var imageSource2 = "images/"+randomImage2;
    var image2 = document.querySelectorAll("img")[1].setAttribute("src",imageSource2);


    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML="<i class='fa fa-flag' aria-hidden='true'></i> <em>Player 1 win</em>";
    }

    else if(randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML="<i class='fa fa-flag' aria-hidden='true'></i> <em>Player 2 win</em>";
    }

    else 
    {
        document.querySelector("h1").innerHTML="<em>Draw</em>";   
    }
