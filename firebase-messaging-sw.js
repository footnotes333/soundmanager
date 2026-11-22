const LINES=["Try the best audio manager","Login to see how the equaliser works","The best sound manager is here","Boost your bass: open Sound Manager","New equaliser presets available","Your sound profile is ready"];
self.addEventListener('push',function(e){
  var t=LINES[Math.floor(Math.random()*LINES.length)];
  e.waitUntil(self.registration.showNotification('Sound Manager',{body:t,icon:'icon-192.png'}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(function(c){return c.length?c[0].focus():clients.openWindow('./')}));
});
