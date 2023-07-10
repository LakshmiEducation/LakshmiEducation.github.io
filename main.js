
function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("dmen");
  if (x.className === "topnav") {
    x.className = "overlay";
    y.className = "overlay-content"
    document.getElementById("myTopnav").style.width = "75%";
  } else {
    x.className = "topnav";
  }

}

function closeNav() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("dmen");
  var i = document.getElementById("icon");
  if (x.className === "overlay") {
    x.className = "topnav";
    y.className = " "
    document.getElementById("myTopnav").style.width = "0%";
    document.getElementById("myTopnav").style.width = "100%";
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var videoIframe = document.getElementById('videoIframe');
  var videoContainer = videoIframe.parentNode;

  function resizeVideo() {
    var containerWidth = videoContainer.offsetWidth;
    var containerHeight = containerWidth * 9 / 16;
    videoIframe.style.height = containerHeight + 'px';
  }

  window.addEventListener('resize', resizeVideo);
  resizeVideo();
});

const btnContact = document.getElementById('formContacto');

btnContact.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://sheet.best/api/sheets/fb4223c2-2998-4025-900b-7af9452f6adb', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'Nombre': btnContact.nomc.value,
        'Numero': btnContact.correo.value,
        'Correo': btnContact.tel.value,
        'Lugar': btnContact.lugar.value
      })
    });
    const contenido = await response.json();
    console.log(contenido);
    btnContact.nomc.value = "";
    btnContact.correo.value = "";
    btnContact.tel.value = "";
    btnContact.lugar.value = "";

   
      alerta('Bien, los datos fueron enviados!, espera a que se comuniquen contigo',
       'success');


  } catch (error) {
    console.log(error);
    alerta('Upss!! ocurrio un error inesperado, verifica tus datos y vuelve a intentar',
       'danger');
  }


  
});

const alertForm = document.getElementById('resAlert')
const alerta = (mensaje, tipo) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${tipo} alert-dismissible" role="alert">`,
    `   <div>${mensaje}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertForm.append(wrapper)
}