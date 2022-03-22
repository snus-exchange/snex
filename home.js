
  var chatEl = document.getElementById("chatbtn")
  var homeEl = document.getElementById('home')
  var imenuEl = document.getElementById('imenu')
  var closeEl = document.getElementById('closebtn')
  function closechatbtn() {
    homeEl.style.display = 'block'
    imenuEl.style.display = 'none'
  }
  function hideHome() {
    homeEl.style.display = 'none'
    imenuEl.style.display = 'block'
  }
  chatEl.addEventListener('click', hideHome, false);
  closeEl.addEventListener('click', closechatbtn, false);
