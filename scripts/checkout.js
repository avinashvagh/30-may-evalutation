function details(event) {
  event.preventDefault();
  setTimeout(() => {
    alert("your order is accepted");
  }, 0);
  setTimeout(() => {
    alert("your order is preparing");
  }, 3000);
  setTimeout(() => {
    alert("your order is packing");
  }, 8000);
  setTimeout(() => {
    alert("your order is on the way");
  }, 10000);
  setTimeout(() => {
    alert("your order is delivered");
  }, 12000);
}
