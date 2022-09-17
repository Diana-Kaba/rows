let n = 10;
let x = 2;
let sum = 0;
for (let i = 1; i <= n; i++) {
  //  document.write(x ** i + " ");
  sum += x;
  document.write(x + " " + sum + "<br>");
  x *= 2;
}
let m = 0.065;
m = (sum * m) / 1000;
document.write('<br>' + "Всего он получит: " + m + " кг");