document.getElementById("button").addEventListener("click", function() {
    confirm("Кнопка нажата!,перейти на другую страницу?");

    if (window.confirm('Really go to another page?'))
        {
            window.location = 'index-2.html'
        }
        else
        {
            window.location = 'index.html'
        }
  });
  
document.getElementById("time").addEventListener("click", function() {
    const today = new Date();
  
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // месяцы с 0!
    const year = today.getFullYear();
  
    const formattedDate = `${day}.${month}.${year}`;
    alert("Сегодняшняя дата: " + formattedDate);
    });

   
document.getElementById("send-info").onclick = function(){ 
    var myName = document.getElementById("info").value;
    if (myName !== ""){
    document.getElementById('inner-text').innerText = 'Привет ' + myName;}
}
    
document.getElementById("get-info-browser").onclick = function(){ 
alert("Браузер: " + navigator.userAgent);
alert("Название браузера (устаревшее): " + navigator.appName);
alert("Версия браузера (устаревшее): " + navigator.appVersion);
alert("Платформа: " + navigator.platform);
alert("Язык: " + navigator.language);
alert("Онлайн ли пользователь: " + navigator.onLine);}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на 0";
        break;
      case "power":
        result = Math.pow(num1, num2);
        break;
      case "sqrt":
        result = num1 >= 0 ? Math.sqrt(num1) : "Ошибка: корень из отриц. числа";
        break;
      default:
        result = "Неизвестная операция";
    }

    document.getElementById("result").innerText = "Результат: " + result;
  }