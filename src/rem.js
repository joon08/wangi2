function rem() {
  const fontSize = document.documentElement.clientWidth / 10
  document.documentElement.style.fontSize = fontSize + 'px'
}

rem()

window.onresize = function() {
  rem()
}
