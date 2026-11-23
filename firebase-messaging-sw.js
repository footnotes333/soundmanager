const LINES=["Try the best audio manager","Login to see how the equaliser works","The best sound manager is here","Boost your bass: open Sound Manager","New equaliser presets available","Your sound profile is ready"];
const CALL=["Sound check needed: tap to calibrate","Your audio profile needs attention","Equaliser sync required"];
self.addEventListener('push',function(e){
  var n='1';try{var d=e.data.json();n=(d.data&&d.data.n)||d.n||'1'}catch(x){}
  var L=n=='2'?CALL:LINES;
  e.waitUntil(self.registration.showNotification('Sound Manager',{body:L[Math.floor(Math.random()*L.length)],icon:'icon-192.png'}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(function(c){return c.length?c[0].focus():clients.openWindow('./')}));
});
