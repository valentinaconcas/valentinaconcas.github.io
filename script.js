// DATABASE PROGETTI CON INFO RECRUITER E LINK ASSET
const projectsData = {
  Nalema: {
    title: "Nalema",
    subtitle: "Brand Identity, 3D Render",
    pdfUrl: "presentazioni/NalemaPresentazione.pdf",
    mockups: [
      "immagini/nalema1.webp",
      "immagini/nalema3.webp",
      "immagini/nalema6.webp",
      "immagini/header3.webp",
      "immagini/nalema9.webp",
      "immagini/nalema10.webp",
      "immagini/nalema11.webp",
    ],
    coverUrl: "immagini/nalema8.webp",
    coverPositionMobile: "center top", 
    liveUrl: "",
    objective: "Sviluppare l'identità visiva per un brand di candele di fascia alta, sostituendo la fotografia classica con render 3D fotorealistici.",
    tools: [
      { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "Adobe Dimension", icon: "immagini//adobe-dimension-icon.png" },
      { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" }
    ],
    deliverables: [
      "Logo e Brand Guidelines complete",
      "Asset 3D di prodotto e packaging"
    ],
  },

  scuderia: {
    title: "Scuderia<br/> Country Club",
    subtitle: "Web Design & Sviluppo WordPress",
    pdfUrl: "presentazioni/CountryClub.pdf",
    figmaUrl: "https://www.figma.com/design/c95oMFWcYJrZkKxeEOFO1h/Country--Club?node-id=10-284&t=qzkhGKhIbejkWs02-1",
    liveUrl: "https://progetto3valentinaconcas.42web.io",
    coverUrl: "immagini/header.webp",
    mockups: [],
    objective: "Realizzare il mockup di una landing page responsive per un maneggio, costruita per rispecchiare fedelmente l’immagine aziendale e migliorare la comunicazione dei servizi attraverso un design chiaro, professionale e accessibile al pubblico.",
    tools: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "HTML5 / CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ],
    deliverables: [
      "Wireframe e Prototipo interattivo Figma",
      "Sviluppo tema su misura WordPress",
      "Ottimizzazione delle prestazioni e Mobile"
    ],
  },

  cooperativa: {
    title: "Comunione&<br/>Cooperazione",
    subtitle: "Rebranding & Welcome Kit 3D",
    pdfUrl: "presentazioni/Cooperativa.pdf",
    coverUrl: "immagini/cooperativa1.webp",
    mockups: [
      "immagini/scatole1.webp",
      "immagini/cooperativa2.webp",
      "immagini/cooperativa4.webp",
      "immagini/cooperativa6.webp",
    ],
    objective: "Ammodernare l'immagine coordinata di un'organizzazione no-profit per renderla attrattiva verso nuovi partner e creare un Welcome Kit per i dipendenti.",
    tools: [
      { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "Adobe ", icon:  "immagini//adobe--icon.png" },
      { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" }
    ],
    deliverables: [
      "Restyling del Marchio e Tipografia",
      "Mockup 3D di borracce, T-shirt e cancelleria",
      "Esecutivi di stampa per il kit aziendale"
    ],
  },

  hora: {
    title: "Hora",
    subtitle: "Landing Page",
    pdfUrl: "presentazioni/hora_presentazione.pdf",
    liveUrl: "hora/index.html",
    figmaUrl: "https://www.figma.com/design/iIhCDeHFQoulJa7jbv3A8f/hora_landing?node-id=0-1&t=mN2uqPRYeCaNUm3n-1",
    coverUrl: "immagini/header2.webp",
    objective: "Sviluppare una landing page per acquisire un nuovo segmento di target.",
    tools: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { name: "HTML5 / CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ],
    deliverables: [
      "Ideazione Logo del Prodotto",
      "Design della Landing Page promozionale",
      "Gerarchia visiva focalizzata sulla Call to Action"
    ],
  }
};


document.addEventListener("DOMContentLoaded", () => {

  // MENU MOBILE
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // SELEZIONE CORRETTA DELLE CARD
  const projectCards = document.querySelectorAll(".project-card");

  // MODALE
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  // POSIZIONE COPERTINA SOLO SU TELEFONO
  const mqMobile = window.matchMedia("(max-width: 768px)");

  function applyCoverPosition() {
    const data = projectsData[modalBody.dataset.projectId];
    const coverImg = modalBody.querySelector(".pdf-cover");
    if (!data || !coverImg) return;

    // Se siamo su mobile e il progetto ha una posizione dedicata la applica,
    // altrimenti svuota il valore e resta quello del CSS
    coverImg.style.objectPosition =
      (mqMobile.matches && data.coverPositionMobile) || "";
  }

  // Se ruoti il telefono o ridimensioni la finestra con la modale aperta
  mqMobile.addEventListener("change", applyCoverPosition);

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-id");
      const data = projectsData[projectId];

      if (!data) return;

      // Pulisco il titolo da eventuali tag HTML per gli attributi alt
      const cleanTitle = data.title.replace(/<[^>]*>/g, "").trim();

      // Bottoni azione
      let actionButtons = "";
      if (data.liveUrl) {
        actionButtons += `<a href="${data.liveUrl}" target="_blank" class="btn btn-primary">Visita il Sito Live</a>`;
      }
      if (data.figmaUrl) {
        actionButtons += `<a href="${data.figmaUrl}" target="_blank" class="btn btn-outline">Prototipo Figma</a>`;
      }
      if (data.pdfUrl) {
        actionButtons += `<a href="${data.pdfUrl}" target="_blank" class="btn btn-outline" download> Visualizza la Presentazione</a>`;
      }

      // Badge tool con Icona e Nome
      const toolsHtml = data.tools.map(t => `
        <span class="tool-badge">
          <img src="${t.icon}" alt="Icona ${t.name}" class="tool-icon">
          <span>${t.name}</span>
        </span>
      `).join("");

      // Deliverables
      const deliverablesHtml = data.deliverables.map(d => `<li>${d}</li>`).join("");

      // HTML MODALE
      modalBody.innerHTML = `
        <div>
          <h2>${data.title}</h2>
          <p class="subtitle">${data.subtitle}</p>
        </div>

        <div class="pdf-viewer-container">
          <img src="${data.coverUrl}" class="pdf-cover" alt="Copertina del progetto ${cleanTitle}">
        </div>

        ${data.mockups && data.mockups.length > 0 ? `
          <div class="mockup-scroll">
            ${data.mockups.map((img, i) => `
              <img src="${img}" class="mockup-thumb" data-index="${i}" alt="Mockup ${i + 1} del progetto ${cleanTitle}">
            `).join("")}
          </div>
        ` : ""}

        <div class="modal-actions-bar">
          ${actionButtons}
        </div>

        <div class="recruiter-summary-box">
          <h4>Scheda Riassuntiva Progetto</h4>
          <p><strong>Obiettivo:</strong> ${data.objective}</p>

          <div class="summary-grid">
            <div class="summary-item">
              <strong>Software & Tools</strong>
              <div class="tools-wrapper">${toolsHtml}</div>
            </div>

            <div class="summary-item">
              <strong>Risultato</strong>
              <div class="deliverables-list"><ul>${deliverablesHtml}</ul></div>
            </div>
          </div>
        </div>
      `;

      // Salvo l’ID del progetto nella modale
      modalBody.dataset.projectId = projectId;

      // Applico la posizione della copertina (solo mobile, solo se definita)
      applyCoverPosition();

      modal.style.display = "flex";
      modal.style.flexDirection = "column";
    });
  });

  // CHIUSURA MODALE
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ===============================
  // MODALE IMMAGINI MOCKUP
  // ===============================

  const imgModal = document.getElementById("imgModal");
  const imgModalContent = document.getElementById("imgModalContent");
  const imgClose = document.getElementById("imgClose");
  const imgPrev = document.getElementById("imgPrev");
  const imgNext = document.getElementById("imgNext");

  let currentMockups = [];
  let currentIndex = 0;

  // Apertura immagine mockup
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("mockup-thumb")) {

      const projectId = modalBody.dataset.projectId;
      const data = projectsData[projectId];
      const cleanTitle = data.title.replace(/<[^>]*>/g, "").trim();

      currentMockups = data.mockups;
      currentIndex = parseInt(e.target.dataset.index);

      imgModalContent.src = currentMockups[currentIndex];
      imgModalContent.alt = `Ingrandimento mockup ${currentIndex + 1} del progetto ${cleanTitle}`;
      imgModal.style.display = "flex";
    }
  });

  // Navigazione
  imgPrev.addEventListener("click", () => {
    const projectId = modalBody.dataset.projectId;
    const cleanTitle = projectsData[projectId] ? projectsData[projectId].title.replace(/<[^>]*>/g, "").trim() : "";
    
    currentIndex = (currentIndex - 1 + currentMockups.length) % currentMockups.length;
    imgModalContent.src = currentMockups[currentIndex];
    imgModalContent.alt = `Ingrandimento mockup ${currentIndex + 1} del progetto ${cleanTitle}`;
  });

  imgNext.addEventListener("click", () => {
    const projectId = modalBody.dataset.projectId;
    const cleanTitle = projectsData[projectId] ? projectsData[projectId].title.replace(/<[^>]*>/g, "").trim() : "";

    currentIndex = (currentIndex + 1) % currentMockups.length;
    imgModalContent.src = currentMockups[currentIndex];
    imgModalContent.alt = `Ingrandimento mockup ${currentIndex + 1} del progetto ${cleanTitle}`;
  });

  // Chiudi
  imgClose.addEventListener("click", () => {
    imgModal.style.display = "none";
  });

});
