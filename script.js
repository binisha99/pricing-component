const check=()=> {
    let checkBox = document.getElementById("checkbox");
    let text1 = document.getElementsByClassName("text1");
    let text2 = document.getElementsByClassName("text2");
  
    for (let i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  // check();
// alert('hi');