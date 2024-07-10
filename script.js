function checkR() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-450px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
     LB1.style.display = "flex"
       RB2.style.visibility = "visible"
  
         
}
function checkL() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(0px)"
     RB1.style.display = "flex"
     RB2.style.display = "none"
     LB1.style.display = "none"
      RB2.style.visibility = "hidden"
  
         
}
function checkR2() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-900px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
     RB2.style.visibility = "hidden"
     LB1.style.display = "none"
     LB2.style.display = "flex"
  
         
}
function checkL2() {
    const List = document.getElementById("UL")
    const LB1 = document.getElementById("LB1")
    const LB2 = document.getElementById("LB2")
    const RB2 = document.getElementById("RB2")
    const RB1 = document.getElementById("RB1")
     List.style.transform = "translateX(-450px)"
     RB1.style.display = "none"
     RB2.style.display = "flex"
      RB2.style.visibility = "visible"
     LB1.style.display = "flex"
     LB2.style.display = "none"
  
         
}






function ShowMore() {
    const subscribtionFeed = document.getElementById("hideList")
    const showMoreBtn = document.getElementById("showMoreBtn")

          subscribtionFeed.style.display ="block"
          showMoreBtn.style.display ="none"
  
}
function ShowLess() {
    const subscribtionFeed = document.getElementById("hideList")
    const showMoreBtn = document.getElementById("showMoreBtn")

          subscribtionFeed.style.display ="none"
          showMoreBtn.style.display ="flex"
   
}




function checkMenu() {
    const Aside = document.getElementById("aside")
    const AsideMiddle = document.getElementById("asideMiddle")
    const AsideRight = document.getElementById("asideRight")
    const MenuOne = document.getElementById("menuOne")
    const MenuTwo = document.getElementById("menuTwo")
    const SlideBar = document.getElementById("SlideBar")
           SlideBar.style.width = "92%"
          MenuOne.style.display = "none"
          MenuTwo.style.display = "block"
          Aside.style.display = "none"
          AsideMiddle.style.display = "flex"
          AsideRight.style.width = "96%"
          AsideRight.style.transition ="0s"
 
}
function checkMenuClose() {
    const Aside = document.getElementById("aside")
    const AsideMiddle = document.getElementById("asideMiddle")
    const AsideRight = document.getElementById("asideRight")
    const MenuOne = document.getElementById("menuOne")
    const MenuTwo = document.getElementById("menuTwo")
    const SlideBar = document.getElementById("SlideBar")
          SlideBar.style.width = "84%"
          MenuOne.style.display = "block"
          MenuTwo.style.display = "none"
          Aside.style.display = "flex"
          AsideMiddle.style.display = "none"
           AsideRight.style.width = "88%"
  
}

function checkBtn() {
    const AllBtn = document.getElementById("all-btn")
         AllBtn.removeAttribute('id')

}

function checkMoreShortsVideo() {
    const HideShorts = document.getElementById("ShortsVideoHider")
    const ShowMButton = document.getElementById("ShowMButton")
    const ShowLButton = document.getElementById("ShowLButton")
           HideShorts.style.display = "flex"
           ShowMButton.style.display = "none"
           ShowLButton.style.display = "flex"
    
}
function checkLessShortsVideo() {
    const HideShorts = document.getElementById("ShortsVideoHider")
    const ShowMButton = document.getElementById("ShowMButton")
    const ShowLButton = document.getElementById("ShowLButton")
           HideShorts.style.display = "none"
           ShowMButton.style.display = "flex"
           ShowLButton.style.display = "none"
    
}


function checkShortCon() {
    const shortCon = document.getElementById("shortCon")
    const undo = document.querySelector(".undo-short")
          undo.style.display = "flex"
         shortCon.style.display ="none"
           undo.classList.add("this-animation-js")
   
}
function checkBackShort() {
    const shortCon = document.getElementById("shortCon")
      const undo = document.querySelector(".undo-short")
          undo.style.display = "none"
         shortCon.style.display ="flex"
         undo.classList.remove("this-animation-js")
    
}

function checkDescmore() {
    const Desc = document.getElementById("descHider")
    const Smore = document.getElementById("descMore")
    const Sless = document.getElementById("descLess")
          Smore.style.display = "none"
          Sless.style.display = "block"

          Desc.style.display = "block"
}
function checkDescless() {
    const Desc = document.getElementById("descHider")
    const Smore = document.getElementById("descMore")
    const Sless = document.getElementById("descLess")
          Smore.style.display = "block"
          Sless.style.display = "none"

          Desc.style.display = "none"
}


function checkcommentBTN() {
    const CommentSubmit = document.getElementById("commentAriaa")

       CommentSubmit.style.display = "flex"
   
      
}
function checkComCL() {
    const CommentSubmit = document.getElementById("commentAriaa")
    const Input = document.getElementById("textInput")
         
       CommentSubmit.style.display = "none"
   
      console.log(Input)
}
function checkColorBT() {
    const coometBT = document.getElementById("coomet-btn")
           coometBT.removeAttribute('id')

       coometBT.classList.add("commmet-js")
   
      
}

function checkIn2Slide() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Left1 = document.getElementById("Left1")
        Right1.style.display = "none"
        Right2.style.display = "flex"
        Left1.style.display = "flex"
       SlideDivIn2.style.transform = "translateX(-100px)"
}
function checkIn2SlideR1() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Right3 = document.getElementById("Right3")
    const Left1 = document.getElementById("Left1")
    const Left2 = document.getElementById("Left2")
        Right1.style.display = "none"
        Right2.style.display = "none"
        Right3.style.display = "flex"
        Left1.style.display = "none"
        Left2.style.display = "flex"
       SlideDivIn2.style.transform = "translateX(-200px)"
}
function checkIn2SlideR2() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Right3 = document.getElementById("Right3")
    const Left1 = document.getElementById("Left1")
    const Left2 = document.getElementById("Left2")
    const Left3 = document.getElementById("Left3")
        Right1.style.display = "none"
        Right2.style.display = "none"
        Right3.style.display = "none"
        Left1.style.display = "none"
        Left2.style.display = "none"
        Left3.style.display = "flex"
       SlideDivIn2.style.transform = "translateX(-300px)"
}
function checkIn2SlideL2() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Right3 = document.getElementById("Right3")
    const Left1 = document.getElementById("Left1")
    const Left2 = document.getElementById("Left2")
    const Left3 = document.getElementById("Left3")
        Right1.style.display = "none"
        Right2.style.display = "none"
        Right3.style.display = "flex"
        Left1.style.display = "none"
        Left2.style.display = "flex"
        Left3.style.display = "none"
       SlideDivIn2.style.transform = "translateX(-200px)"
}
function checkIn2SlideL1() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Right3 = document.getElementById("Right3")
    const Left1 = document.getElementById("Left1")
    const Left2 = document.getElementById("Left2")
    const Left3 = document.getElementById("Left3")
        Right1.style.display = "none"
        Right2.style.display = "flex"
        Right3.style.display = "none"
        Left1.style.display = "flex"
        Left2.style.display = "none"
        Left3.style.display = "none"
       SlideDivIn2.style.transform = "translateX(-100px)"
}
function checkIn2SlideL() {
    const SlideDivIn2 = document.getElementById("InvisibleId")
    const Right1 = document.getElementById("Right1")
    const Right2 = document.getElementById("Right2")
    const Right3 = document.getElementById("Right3")
    const Left1 = document.getElementById("Left1")
    const Left2 = document.getElementById("Left2")
    const Left3 = document.getElementById("Left3")
        Right1.style.display = "flex"
        Right2.style.display = "none"
        Right3.style.display = "none"
        Left1.style.display = "none"
        Left2.style.display = "none"
        Left3.style.display = "none"
       SlideDivIn2.style.transform = "translateX(0px)"
}


function checkAbn() {
    window.location.href = "index4.html"
}
function checkAbn2() {
    window.location.href = "index2.html"
}
function checkAb3() {
    window.location.href = "index3.html"
  
}


