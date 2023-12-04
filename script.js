window.onload = function(){loader.style.display="none";document.body.classList.add('disable-transition');setTimeout(transition(),4000); }


// Fonction pour détecter les différents types d'appareils
function detectDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios'; // Retourne 'ios' si l'appareil est un iPhone, iPad ou iPod
  } else if (/android|webos|blackberry|iemobile|opera mini/.test(userAgent)) {
    return 'android'; // Retourne 'android' si l'appareil est un appareil Android, webOS, BlackBerry, IEMobile ou Opera Mini
  } else {
    return 'desktop'; // Retourne 'desktop' pour les autres appareils (assumés être des ordinateurs de bureau)
  }
}
Device();
// Charger le fichier CSS approprié en fonction du type d'appareil détecté
function Device() {

  const deviceType = detectDeviceType();

  if (deviceType === 'ios') {

document.body.classList.add('ios'); // Charger le fichier CSS spécifique pour iOS (iPhone, iPad, iPod)

  } else if (deviceType === 'android') {

document.body.classList.add('mobile');  // Charger le fichier CSS spécifique pour Android, webOS, BlackBerry, IEMobile, Opera Mini

  } else {

// Charger un fichier CSS par défaut pour les ordinateurs de bureau

  }

};

theme();

function themeget(){
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.body.classList.add(storedTheme); // Ajoute la classe pour le thème stocké
}
localStorage.setItem('theme', actions[theme]);
}

function transition(){
const header = document.querySelector('header')
const trackitem = document.querySelector('trackitem')
const lecteur = document.querySelector('lecteur');

document.body.classList.remove('disable-transition');
document.body.classList.add('transition-effect');
header.classList.add('transition-effect');
trackitem.classList.add('transition-effect');


}
function theme(theme) {
const accountbutton = document.querySelector('.accountbutton')
const playbutton = document.querySelector('.trackplayer.playbutton');
const dotset = document.querySelector('.dotset');
const plbutton = document.querySelector('.playerbutton.playbutton')
const loopbutton = document.querySelector('.repeatbutton')
const pausebutton = document.querySelector('.playerbutton.pausebutton');
const backbutton = document.querySelector('lecteur .backbutton');
const buttonradio1 = document.querySelector('lecteur .buttonradio.dark');
const buttonradio2 = document.querySelector('lecteur .buttonradio.light');
 const actions = {
    'dark': () => {
 document.body.classList.remove('light-theme');
 document.body.classList.add('dark-theme');
logo.src="./assets/logos/logo.png";
accountbutton.src="./assets/images/account.png";
playbutton.src="./assets/images/play.png";
dotset.src="./assets/images/settings.png";
plbutton.src="./assets/images/play.png";
pausebutton.src="./assets/images/pause.png";
loopbutton.src="./assets/images/repeat.png";
backbutton.src="./assets/images/back.png";
buttonradio1.src="./assets/images/radio-checked.png";
buttonradio2.src="./assets/images/radio-unchecked.png";
    },
    'light': () => {
 document.body.classList.remove('dark-theme');
 document.body.classList.add('light-theme');
logo.src="./assets/logos/logo-black.png";
accountbutton.src="./assets/images/account-black.png";
playbutton.src="./assets/images/play-black.png";
dotset.src="./assets/images/settings-black.png";
plbutton.src="./assets/images/play-black.png";
pausebutton.src="./assets/images/pause-black.png";
loopbutton.src="./assets/images/repeat-black.png";
backbutton.src="./assets/images/back-blue.png";
buttonradio1.src="./assets/images/radio-unchecked.png";
buttonradio2.src="./assets/images/radio-checked.png";
    },
    // Ajoutez d'autres actions si nécessaire
};
 // Vérifiez si la méthode associée à stat existe et exécutez-la si elle existe
  if (actions[theme]) {
    actions[theme]();
  } else {
 document.body.classList.toggle('dark-theme');
document.body.style="/* transition: all 0.5s ease";
  }

}


function player(stat) {
  const audio = document.getElementById('audio');
  const loopbutton = document.querySelector('.repeatbutton')


   const actions = {
    'play': () => {
      audio.play();
	lecteur('active');
    },
    'pause': () => {
      audio.pause();
	lecteur('pause');
      // Si vous souhaitez retirer la classe 'active' lors de la pause, vous pouvez le faire ici
    },
    // Ajoutez d'autres actions si nécessaire
    'loop': () => {
     if (audio.loop && document.body.classList.contains('light-theme')){
	audio.loop=false;
        loopbutton.src="./assets/images/repeat-black.png";
} else if (audio.loop && document.body.classList.contains('dark-theme')){
	audio.loop=false;
        loopbutton.src="./assets/images/repeat.png";
} else {
 	audio.loop=true;
        loopbutton.src="./assets/images/repeat2.png";
}
      // Si vous souhaitez retirer la classe 'active' lors de la pause, vous pouvez le faire ici
    },
  };

  // Vérifiez si la méthode associée à stat existe et exécutez-la si elle existe
  if (actions[stat]) {
    actions[stat]();
  } else {
    console.log("Desole cette commande n'est pas reconnu"  + " " + stat);
  }

}

  // Mise à jour de la valeur de l'input de type range
  audio.addEventListener('timeupdate', function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressInput.value = progress; // Met à jour la valeur de l'input type range
    progressbarslide.style.width = progress + "%";
  });


  // Contrôle de la lecture audio en modifiant la position de lecture
  progressInput.addEventListener('input', function () {
    const selectedTime = (this.value * audio.duration) / 100;
    audio.currentTime = selectedTime;
  });


function detecterPause() {
    if (audio.paused) {
 player('pause');
        // Ajoutez ici le code pour mettre à jour l'interface de votre lecteur
    } else if (audio.play) {
 player('play');
        // Ajoutez ici le code pour mettre à jour l'interface de votre lecteur
    }
}

// Gestionnaire d'événement pour détecter la pause
audio.addEventListener('pause', detecterPause);
audio.addEventListener('play', detecterPause);


function lecteur(statut) {

const lecteur = document.querySelector('lecteur')
const plbutton = document.querySelector('.trackplayer.playbutton');
const playbutton = document.querySelector('.playerbutton.playbutton')
const musicanimation = document.querySelector('trackitem .musicanimation');
const animationelement = document.querySelector('.musicanimation');
const pausebutton = document.querySelector('.playerbutton.pausebutton');
const buttons = document.querySelector('.playerbuttoncontainer')
const loopbutton = document.querySelector('.repeatbutton')
const middle = document.querySelector('lecteur .middle')
const pochette = document.querySelector('lecteur #pochette')
const tracktitle = document.querySelector('lecteur #tracktitle')
const buttonactiveplayer = document.querySelector('lecteur .buttonactiveplayer')
const backbutton = document.querySelector('lecteur .backbutton')

  const audio = document.getElementById('audio');
const progresscontainer = document.querySelector('.progress-container')
const progressInput = document.getElementById('progressInput');
const progressbarslide = document.getElementById('progressbarslide');


   const actions = {
    'active': () => {
      pochette.classList.remove('reduit');
      lecteur.classList.remove('reduit');
      lecteur.classList.add('active');
      buttons.classList.add('active');
      plbutton.classList.add('remove');
      playbutton.classList.remove('active');
      pausebutton.classList.add('active');
      musicanimation.classList.add('active');
      animationelement.classList.add('animated');
      progresscontainer.classList.add('active');
      middle.classList.add('active');
      tracktitle.classList.remove('reduit');
      buttonactiveplayer.classList.remove('active');
reduire = setTimeout(function() {
    lecteurstyle('reduce')
}, 5000);
    },
    'reduce': () => {
     lecteur.classList.remove('active');
     buttons.classList.remove('active');
     lecteur.classList.add('reduit');
     pochette.classList.add('reduit');
     tracktitle.classList.add('reduit');
     plbutton.classList.add('remove');
     pausebutton.classList.remove('active');
     progresscontainer.classList.remove('active');
     middle.classList.remove('active');
     middle.classList.add('reduit');
     musicanimation.classList.add('active');
     buttonactiveplayer.classList.add('active');
      // Si vous souhaitez retirer la classe 'active' lors de la pause, vous pouvez le faire ici
    },
    'unactive': () => {
     lecteur.classList.remove('active');
     buttons.classList.remove('active');
     lecteur.classList.remove('reduit');
     pochette.classList.remove('reduit');
     tracktitle.classList.remove('reduit');
     plbutton.classList.remove('remove');
     musicanimation.classList.remove('active');
     animationelement.classList.remove('animated');
     progresscontainer.classList.remove('active');
     middle.classList.remove('active');
     middle.classList.remove('reduit');
     buttonactiveplayer.classList.remove('active');
      // Si vous souhaitez retirer la classe 'active' lors de la pause, vous pouvez le faire ici
   },
    'pause': () => {

     lecteur.classList.add('active');
     buttons.classList.add('active');
     lecteur.classList.remove('reduit');
     pochette.classList.remove('reduit');
     tracktitle.classList.remove('reduit');
     pausebutton.classList.remove('active');
     plbutton.classList.remove('remove');
     playbutton.classList.add('active');
     musicanimation.classList.remove('active');
     animationelement.classList.remove('animated');
     progresscontainer.classList.add('active');
     middle.classList.remove('active');
     middle.classList.remove('reduit');
     middle.classList.add('active');
reduire = setTimeout(function() {
lecteurstyle('reduce')
}, 5000);
      // Si vous souhaitez retirer la classe 'active' lors de la pause, vous pouvez le faire ici
    },

    'themeset': () => {
      pochette.classList.remove('reduit');
      lecteur.classList.remove('reduit');
      lecteur.classList.add('active');
      buttons.classList.remove('active');
      playbutton.classList.remove('active');
      pausebutton.classList.remove('active');
      progresscontainer.classList.remove('active');
      middle.classList.remove('reduit');
      middle.classList.remove('active');
      tracktitle.classList.remove('reduit');
      tracktitle.classList.remove('active');
      buttonactiveplayer.classList.remove('active');
      backbutton.classList.add('active');
    },
    // Ajoutez d'autres actions si nÃ©cessaire

  };

  // VÃ©rifiez si la mÃ©thode associÃ©e Ã  stat existe et exÃ©cutez-la si elle existe
  if (actions[statut]) {
    actions[statut]();
  } else {
    console.log("Desole cette commande n'est pas reconnu");
  }
 if (statut === 'themeset') {
const themesettings = document.querySelector('lecteur #themeset')
    themesettings.classList.add('active');
  } else {
const themesettings = document.querySelector('lecteur #themeset')
    themesettings.classList.remove('active');
  }

}

function playerExtand() {
    const buttonactiveplayer = document.querySelector('lecteur .buttonactiveplayer')
    buttonactiveplayer.classList.remove('active');
clearTimeout(reduire);
    if (audio.paused) {
 lecteur("pause");
        // Ajoutez ici le code pour mettre à jour l'interface de votre lecteur
    } else if (audio.play) {
 lecteur("active");
        // Ajoutez ici le code pour mettre à jour l'interface de votre lecteur
    }
}

function lecteurstyle(style) {
if (audio.ended) {
lecteur('unactive');
}else{
lecteur(style);
}
}
function back() {
 
if (audio.paused && audio.currentTime === 0 | audio.ended) {
        lecteur('unactive'); // Si l'audio n'a pas encore été lancé, définir le lecteur sur inactif
    } else if (audio.paused) {
        lecteur('pause'); // Si l'audio est en pause, définir le lecteur sur pause
    } else {
        lecteur('active'); // Si l'audio est en cours de lecture, définir le lecteur sur play
    }
}
