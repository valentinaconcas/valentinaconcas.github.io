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

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.addEventListener("click", () => {
      const isActive = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
  }

  // ELEMENTI MODALE
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  let lastFocusedElement = null; // Memorizza l'elemento che ha aperto la modale

  // Helper: Trova tutti gli elementi focalizzabili in un contenitore
  function getFocusableElements(container) {
    return Array.from(
      container.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  // Posizionamento copertina mobile
  const mqMobile = window.matchMedia("(max-width: 768px)");
  function applyCoverPosition() {
    const data = projectsData[modalBody.dataset.projectId];
    const coverImg = modalBody.querySelector(".pdf-cover");
    if (!data || !coverImg) return;
    coverImg.style.objectPosition = (mqMobile.matches && data.coverPositionMobile) || "";
  }
  mqMobile.addEventListener("change", applyCoverPosition);

  // APERTURA MODALE PROGETTO
  function openProjectModal(projectId, triggerCard) {
    const data = projectsData[projectId];
    if (!data) return;

    lastFocusedElement = triggerCard || document.activeElement;
    const cleanTitle = data.title.replace(/<[^>]*>/g, "").trim();

    let actionButtons = "";
    if (data.liveUrl) actionButtons += `<a href="${data.liveUrl}" target="_blank" class="btn btn-primary">Visita il Sito Live</a>`;
    if (data.figmaUrl) actionButtons += `<a href="${data.figmaUrl}" target="_blank" class="btn btn-outline">Prototipo Figma</a>`;
    if (data.pdfUrl) actionButtons += `<a href="${data.pdfUrl}" target="_blank" class="btn btn-outline" download>Visualizza la Presentazione</a>`;

    const toolsHtml = data.tools.map(t => `
      <span class="tool-badge">
        <img src="${t.icon}" alt="Icona ${t.name}" class="tool-icon">
        <span>${t.name}</span>
      </span>
    `).join("");

    const deliverablesHtml = data.deliverables.map(d => `<li>${d}</li>`).join("");

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
            <img src="${img}" class="mockup-thumb" data-index="${i}" tabindex="0" role="button" aria-label="Ingrandisci mockup ${i + 1} del progetto ${cleanTitle}" alt="Mockup ${i + 1} del progetto ${cleanTitle}">
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

    modalBody.dataset.projectId = projectId;
    applyCoverPosition();

    modal.style.display = "flex";
    modal.style.flexDirection = "column";

    // Sposta il focus sul pulsante di chiusura per consentire subito la navigazione Tab
    setTimeout(() => {
      modalClose.focus();
    }, 50);
  }

  // CHIUSURA MODALE PROGETTO
  function closeProjectModal() {
    modal.style.display = "none";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  // Rendi tutte le card selezionabili da tastiera (Tab, Invio, Spazio)
  projectCards.forEach(card => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const handleSelect = () => {
      const projectId = card.getAttribute("data-id");
      openProjectModal(projectId, card);
    };

    card.addEventListener("click", handleSelect);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect();
      }
    });
  });

  modalClose.addEventListener("click", closeProjectModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
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
  let lastMockupTrigger = null;

  function openImgModal(triggerEl) {
    const projectId = modalBody.dataset.projectId;
    const data = projectsData[projectId];
    if (!data) return;

    lastMockupTrigger = triggerEl;
    const cleanTitle = data.title.replace(/<[^>]*>/g, "").trim();

    currentMockups = data.mockups;
    currentIndex = parseInt(triggerEl.dataset.index);

    updateModalImage(cleanTitle);
    imgModal.style.display = "flex";

    setTimeout(() => {
      imgClose.focus();
    }, 50);
  }

  function updateModalImage(cleanTitle) {
    imgModalContent.src = currentMockups[currentIndex];
    imgModalContent.alt = `Ingrandimento mockup ${currentIndex + 1} del progetto ${cleanTitle}`;
  }

  function closeImgModal() {
    imgModal.style.display = "none";
    if (lastMockupTrigger && typeof lastMockupTrigger.focus === "function") {
      lastMockupTrigger.focus();
    }
  }

  function prevImage() {
    const projectId = modalBody.dataset.projectId;
    const cleanTitle = projectsData[projectId] ? projectsData[projectId].title.replace(/<[^>]*>/g, "").trim() : "";
    currentIndex = (currentIndex - 1 + currentMockups.length) % currentMockups.length;
    updateModalImage(cleanTitle);
  }

  function nextImage() {
    const projectId = modalBody.dataset.projectId;
    const cleanTitle = projectsData[projectId] ? projectsData[projectId].title.replace(/<[^>]*>/g, "").trim() : "";
    currentIndex = (currentIndex + 1) % currentMockups.length;
    updateModalImage(cleanTitle);
  }

  // Eventi apertura mockup (Click e Tastiera)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("mockup-thumb")) {
      openImgModal(e.target);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.classList.contains("mockup-thumb") && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openImgModal(e.target);
    }
  });

  imgPrev.addEventListener("click", prevImage);
  imgNext.addEventListener("click", nextImage);
  imgClose.addEventListener("click", closeImgModal);

  // ===============================
  // NAVIGAZIONE GLOBALE TASTIERA (ESC, FOCUS TRAP, FRECCE)
  // ===============================

  document.addEventListener("keydown", (e) => {
    const isImgModalOpen = imgModal.style.display === "flex";
    const isProjectModalOpen = modal.style.display === "flex";

    // 1. Tasto ESC -> Chiude la modale attiva
    if (e.key === "Escape") {
      if (isImgModalOpen) {
        closeImgModal();
      } else if (isProjectModalOpen) {
        closeProjectModal();
      }
      return;
    }

    // 2. Frecce Direzionali nella modale immagini
    if (isImgModalOpen) {
      if (e.key === "ArrowLeft") {
        prevImage();
        return;
      }
      if (e.key === "ArrowRight") {
        nextImage();
        return;
      }
    }

    // 3. Focus Trap per il tasto TAB
    if (e.key === "Tab") {
      const activeModal = isImgModalOpen ? imgModal : (isProjectModalOpen ? modal : null);
      if (!activeModal) return;

      const focusables = getFocusableElements(activeModal);
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab normale
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

});
