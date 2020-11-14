function getNow() {
  var today = new Date();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (mm < 10) {
    mm = '0' + mm;
  }

  return `${yyyy}-${mm}`;
}

export { getNow };
