"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("");
  const [vibe, setVibe] = useState("🎉");
  const [customized, setCustomized] = useState(false);
  const [clicked, setClicked] = useState(false);

  const vibes = [
    { emoji: "🎉", label: "Party" },
    { emoji: "🚀", label: "Future" },
    { emoji: "✨", label: "Magic" },
    { emoji: "🌿", label: "Zen" }
  ];

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setClicked(true);
    setCustomized(true);
    // Reset animation trigger
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.badge}>Next.js + GitHub Pages</div>
        <h1>Projekt Live! 🚀</h1>
        <p className={styles.subtitle}>
          Eine einfache, aber wunderschöne React-App, die direkt aus einem GitHub-Workflow bereitgestellt wurde.
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={`${styles.glow} ${styles[vibe]}`} />
          <div className={styles.cardContent}>
            {!customized ? (
              <form onSubmit={handleGenerate} className={styles.form}>
                <h2>Erstelle eine Überraschung 🎁</h2>
                <p>Gib den Namen deines Freundes ein und wähle einen Vibe, um eine personalisierte Nachricht zu erstellen:</p>
                
                <input
                  type="text"
                  placeholder="Name deines Freundes..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                  maxLength={20}
                  required
                />

                <div className={styles.vibeSelector}>
                  {vibes.map((v) => (
                    <button
                      key={v.emoji}
                      type="button"
                      className={`${styles.vibeButton} ${vibe === v.emoji ? styles.activeVibe : ""}`}
                      onClick={() => setVibe(v.emoji)}
                    >
                      <span className={styles.vibeEmoji}>{v.emoji}</span>
                      <span className={styles.vibeLabel}>{v.label}</span>
                    </button>
                  ))}
                </div>

                <button type="submit" className={styles.primaryButton}>
                  Magie erzeugen ✨
                </button>
              </form>
            ) : (
              <div className={`${styles.greeting} ${clicked ? styles.pop : ""}`}>
                <span className={styles.largeEmoji}>{vibe}</span>
                <h2>Hallo, {name}!</h2>
                
                {vibe === "🎉" && (
                  <p className={styles.greetingText}>
                    Lass uns feiern! Diese Seite wurde extra für dich erstellt. Schön, dass du hier bist! Hab einen fantastischen Tag voller Freude und Erfolg! 🥂
                  </p>
                )}
                {vibe === "🚀" && (
                  <p className={styles.greetingText}>
                    Bereit zum Abheben! Nichts kann dich aufhalten. Diese App läuft stabil im Web – genau wie deine nächsten großen Pläne! Let's go! 🌟
                  </p>
                )}
                {vibe === "✨" && (
                  <p className={styles.greetingText}>
                    Ein bisschen Magie für deinen Tag! Manchmal braucht es nur eine Zeile Code und einen guten Freund, um etwas Besonderes zu erschaffen. Danke für deine Unterstützung! 🔮
                  </p>
                )}
                {vibe === "🌿" && (
                  <p className={styles.greetingText}>
                    Atme tief durch und entspanne dich. Ein ruhiger Moment, ein minimalistisches Design und ein freundlicher Gruß. Alles wird gut! 🍃
                  </p>
                )}

                <button 
                  onClick={() => { setCustomized(false); setName(""); }} 
                  className={styles.secondaryButton}
                >
                  Zurück & Neu erstellen 🔄
                </button>
              </div>
            )}
          </div>
        </div>

        <section className={styles.techInfo}>
          <h3>Wie wurde das gemacht? 🛠️</h3>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h4>1. React & Next.js</h4>
              <p>Erstellt mit dem modernen App Router und React-Komponenten für schnelle Ladezeiten.</p>
            </div>
            <div className={styles.gridItem}>
              <h4>2. Static Export</h4>
              <p>Next.js wurde so konfiguriert, dass es reines HTML/CSS/JS exportiert – perfekt für statisches Hosting.</p>
            </div>
            <div className={styles.gridItem}>
              <h4>3. GitHub Actions</h4>
              <p>Bei jedem Push baut ein automatisierter GitHub-Workflow die App und lädt sie direkt auf GitHub Pages hoch.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Erstellt von zeuz-it63 mit 💻 und Antigravity AI.</p>
      </footer>
    </div>
  );
}
