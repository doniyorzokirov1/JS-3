var user = Number(prompt(`Masofani kiriting?`, 0))
var onTheFoot = 3.6
var byCycle = 20.1
var byTaxi = 70
var airplane = 800
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
var tFoot = Math.round(user / onTheFoot);
var tCycle = Math.round(user / byCycle) ;
var tTaxi = Math.round(user / byTaxi);
var tPlane = Math.round(user / airplane);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
var tFoot1 = Math.round(user / onTheFoot * 60);
var tCycle1 = Math.round(user / byCycle * 60);
var tTaxi1 = Math.round(user / byTaxi * 60);
var tPlane1 = Math.round(user / airplane * 60);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
var foot = document.querySelector(`.onthefoot`);
var cycle = document.querySelector(`.bycycle`);
var taxi = document.querySelector(`.bytaxi`);
var plane = document.querySelector(`.airplane`);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
if (user > 0) {
  foot.textContent = 'Soatda: ' + tFoot + 's' + '  |  ' + 'Daqiqada: ' + tFoot1 + `d`;
  cycle.textContent = `Soatda: ` + tCycle + 's' + `  |  ` + `Daqiqada: ` + tCycle1 + `d`;
  taxi.textContent = `Soatda: ` + tTaxi + 's' + `   |  ` + `Daqiqada: ` + tTaxi1 + `d`;
  plane.textContent = `Soatda: ` + tPlane + 's' + `   |  ` + `Daqiqada: ` + tPlane1 + `d`;
} else {
  foot.textContent = `Qiymat kiritilmagan`
  cycle.textContent = `Qiymat kiritilmagan`
  taxi.textContent = `Qiymat kiritilmagan`
  plane.textContent = `Qiymat kiritilmagan`
}
