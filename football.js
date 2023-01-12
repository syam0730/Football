    var topNum = 0;
        leftNum = 0;
        rightNum = 0;
        downNum = 0;
      
      function moveleft() {
        leftNum -= 20;
        document.getElementById("ball").style.marginLeft = leftNum + "px";
        if(leftNum == -500){
          alert("goal completed");
        }
        else if(leftNum < -500){
          alert("ball exceeds");
          leftNum = -500
        }
        
      }

      function moveright() {
        rightNum += 20;
        document.getElementById("ball").style.marginLeft = rightNum + "px";
        if(rightNum == 560){
          alert("goal completed");
        }
        else if(rightNum > 570){
          alert("ball exceeds");
          rightNum = 570
        }
      }

      function moveup() {
        topNum -= 20;
        document.getElementById("ball").style.marginTop = topNum + "px";
        if(topNum < -250){
          alert("ball exceeds");
          topNum = -250
        }
      }

      function movedown() {
        downNum += 20;
        document.getElementById("ball").style.marginTop = downNum + "px";
        if(downNum > 90){
          alert("ball exceeds");
          downNum = 90
        }
      }
        