

var keysLength = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < keysLength; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       this.style.color = "white";
    });


  function Housekeeper(year,name,cleaningRepertorie) {
      this.name = name;
      this.yearsExp = year;
      this.repertoire = cleaningRepertorie;

  }


  