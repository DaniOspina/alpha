// TABLE

const allnamesincountr = JSON.parse(
  `["María","Josefa","Ana","Carmen","Rosa","Laura","Marta","Flor","Andrea","Adriana","Olga","Karla","Elizabeth","Karen","Silvia","Sandra","Sonia","Katherine","Luz","Adriana","José","Luis","Carlos","Juan","David","Daniel","Mario","Francisco","Jorge","Manuel","Miguel","Eduardo","Alejandro","Fernando","Rafael","Antonio","Sergio","Ricardo","Roberto","Victor","Manuel","Miguel","Eduardo","Alejandro"]`
);
const citiesincountr = JSON.parse(
  `["San José","Alajuela","Cartago","Heredia","Guanacaste","Puntarenas","Limón","San Carlos","Puntarenas","Guanacaste","Limón","San Carlos","Puntarenas","Guanacaste","Limón"]`
);
const datamoney = 135000;
const randomNumbers = [];
setInterval(() => {
  for (let i = 1; i <= 10; i++) {
    const name = document.querySelector("#namedata-" + i);
    const moneydata = document.querySelector("#windata-" + i);
    const citidata = document.querySelector("#citydata-" + i);

    const randomNumber = Math.floor(Math.random() * 40);
    const randomcityNumber = Math.floor(Math.random() * 14);
    const moneyRandom =
      Math.random() * (datamoney * 10 - datamoney) + datamoney;

    name.innerHTML = allnamesincountr[randomNumber];
    citidata.innerHTML = citiesincountr[randomcityNumber];
    moneydata.innerHTML = moneyRandom.toLocaleString("es-CR", {
      style: "currency",
      currency: "CRC",
      maximumFractionDigits: 0,
    });
  }
}, 5000);

//BTN CLOSE
var barmodal = document.getElementById("barmodal");
barmodal.classList.remove("hidebar");
function closebtn() {
  barmodal.classList.add("hidebar");
}

// ERROR FORM

const errorMsg = document.querySelector("#error-msg");
var constinput = document.getElementById('phone');

constinput.addEventListener('input', () => {            
      if (iti.isValidNumberPrecise() ) {
        constinput.classList.remove('errorinput');
        constinput.classList.add("allokinput");
        document.getElementById('msg-importand-hone').classList.add('d-none');
        
        } else {      
          if (constinput.value.length >= 4){
            constinput.classList.add('errorinput');
            constinput.classList.remove('allokinput');
            document.getElementById('msg-importand-hone').classList.remove('d-none')
            return 
          }   
          
        }
  });

// alert

$(window).on('load', function() {

    var plusless = (1000000 * 2);
    var visitors = Math.floor(Math.random() * (50 - 10) + 10);

    alertify.set('notifier', 'position', 'top-right');
    alertify.message(visitors + ' personas están viendo esto.   <i class="fas fa-eye fa-lg"></i>');

    var users = ['José López', 'Luis Martínez', 'Carlos Rodríguez', 'María García', 'Juan Mejía',
        'Daniel López', 'Mario Cruz', 'Mario Flores', 'Francisco Rodríguez', 'Jorge Martínez',
        'Jorge Rivera', 'Josefa Reyes', 'Manuel López', 'Miguel Pineda', 'Eduardo Ramos', 'Alejandro Mejía',
        'Fernando Zelaya', 'Laura Cruz', 'Rosa Paz', 'Flor Fúnez', 'Andrea Pineda',
        'Karen Aguilar', 'Antonio Cruz', 'Sergio Gómez', 'Sergio López', 'Josefa Castillo',
        'Daniel Rivera', 'Olga Vásquez', 'Miguel Sánchez', 'Eduardo Paz', 'Adriana Orellana',
        'Manuel Pineda', 'Miguel Romero', 'Karla López', 'Eduardo Suazo', 'Alejandro Vásquez'
    ];

    function displayWinners(count) {
        var inv = 1000000; // Define el valor de 'inv'
        var money = Math.round(Math.random() * (inv - 200)) + plusless;
        var moneyindexado = money.toLocaleString('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 });
        alertify.notify('<div class="imgface"><img src="img/' + count + '.jpg" /></div><div class="textface"><p class="fb-user">' + users[count] + '</p><p class="pwin"> acaba de generar ' + moneyindexado + ' de un depósito de ₡135 000</p></div>', 'facebook');
    }

    var count = 0;

    (function loop() {
        var rand = Math.round(Math.random() * (50000 - 10000)) + 10000; // Entre 5 y 10 segundos
        setTimeout(function() {
            if (count == users.length) { count = 0; }
            displayWinners(count);
            count++;
            loop();
        }, rand);
    }());
});
