  const blobCursor = function() {
  const cursor = document.querySelector('#cursor-blob');
  const links = document.querySelectorAll('.link');
  
  const setCursorPos = (e) => {
    let posX = e.pageX;
    let posY = e.pageY;
    
    cursor.style.top = posY - (cursor.offsetHeight/2) + 'px';
    cursor.style.left = posX - (cursor.offsetWidth/2) + 'px';
  }
  
  document.addEventListener('mousemove', setCursorPos);
  
  const setCursorHover = function() {
    cursor.style.transform = 'scale(2.5)';
  }
  const removeCursorHover = function() {
    cursor.style.transform = '';
  }
  links.forEach(link => link.addEventListener('mouseover', setCursorHover));
  links.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
}

blobCursor(); 

