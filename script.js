
    function girisYap() {
      var ad = document.getElementById("kullanici").value;
      window.location.href = "sayfalar/map.html?kullanici=" + encodeURIComponent(ad);
    }



    const muzik = document.getElementById("muzik");
    const muzikBtn = document.getElementById("muzikBtn");


    const params = new URLSearchParams(window.location.search);
const kullanici = params.get("kullanici");
const adSpan = document.getElementById("ad");

if (adSpan) {
  adSpan.textContent = kullanici;
}



if (muzik && muzikBtn) {
    let muzikBasladi = false;
  
    window.addEventListener("click", () => {
      if (!muzikBasladi) {
        muzik.volume = 0.3;
        muzik.play();
        muzikBtn.textContent = "🔇 Sesi Kapat";
        muzikBasladi = true;
      }
    });
  
    function muzikToggle() {
      if (muzik.paused) {
        muzik.play();
        muzikBtn.textContent = "🔇 Sesi Kapat";
      } else {
        muzik.pause();
        muzikBtn.textContent = "🎵 Sesi Aç";
      }
    }
  
    function sesAyarla(deger) {
      muzik.volume = deger;
    }
  
    // Fonksiyonları global yap
    window.muzikToggle = muzikToggle;
    window.sesAyarla = sesAyarla;
  }


    function bolgeGoster(bolge) {
      let ceteler = [];

      if (bolge === "Los Santos") {
        ceteler = ["Grove Street Families", "Ballas", "Los Santos Vagos", "Varrios Los Aztecas"];
      } else if (bolge === "San Fierro") {
        ceteler = ["San Fierro Rifa", "San Fierro Triads","Da Nang Boys"];
      } else if (bolge === "Las Venturas") {
        ceteler = ["Mafia (Leone, Sindacco, Forelli)"];
      }

      document.getElementById("mesaj").textContent = bolge + " bölgesine tıkladınız.";

      const tablo = document.getElementById("ceteTablo");
      while (tablo.rows.length > 1) {
        tablo.deleteRow(1);
      }

      ceteler.forEach(function(cete) {
        let satir = tablo.insertRow();
        satir.insertCell(0).innerText = bolge;
        satir.insertCell(1).innerText = cete;
      });
    }

    let tooltipTimeout;

function tooltipGoster(event, metin) {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = metin;

  tooltipTimeout = setTimeout(() => {
    tooltip.style.display = "block";
  }, 300); 

  event.target.addEventListener("mousemove", tooltipGuncelle);
}

function tooltipGuncelle(event) {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.left = (event.pageX + 10) + "px";
  tooltip.style.top = (event.pageY + 10) + "px";
}

function tooltipGizle(event) {
  clearTimeout(tooltipTimeout);
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
  
  if (event && event.target) {
    event.target.removeEventListener("mousemove", tooltipGuncelle);
  }
}



function zarAt() {

    let count = 0;
    const zarGorsel = document.getElementById('zarGorsel');
    const interval = setInterval(() => {
      const randomZar = Math.floor(Math.random() * 8) + 1; 
      zarGorsel.innerText = randomZar;
      count++;
      if (count >= 10) { 
        clearInterval(interval);
        // Sonucu belirle
        const finalZar = Math.floor(Math.random() * 8) + 1;
        zarGorsel.innerText = finalZar;
        let cete = '';

        switch (finalZar) {
          case 1: cete = 'Grove Street Families'; break;
          case 2: cete = 'Ballas'; break;
          case 3: cete = 'Los Santos Vagos'; break;
          case 4: cete = 'Varrios Los Aztecas'; break;
          case 5: cete = 'San Fierro Rifa'; break;
          case 6: cete = 'Da Nang Boys'; break;
          case 7: cete = 'San Fierro Triads'; break;
          case 8: cete = 'Mafia'; break;
        }
          document.getElementById('zarSonuc').innerText = `🎲 Zar: ${finalZar} — ${cete} çetesine katıldın!`;
      }
    }, 100);
  }