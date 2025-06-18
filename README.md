# 🚀 Veloo.AI - Landing Page

Questa è una landing page moderna e responsive per la tua agenzia AI vocale, con integrazione email tramite EmailJS.

## ✨ Caratteristiche

- **Design Moderno**: Interfaccia futuristica con animazioni fluide
- **Invio Email Automatico**: Integrazione con EmailJS per notifiche via email
- **Responsive**: Perfetta su desktop, tablet e mobile
- **Ottimizzazioni SEO**: Meta tag e struttura ottimizzata per i motori di ricerca
- **Fast Loading**: Codice ottimizzato per prestazioni eccellenti

## 🛠️ Tecnologie Utilizzate

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Email Service**: EmailJS
- **Hosting**: Netlify
- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome

## 📋 Setup Veloce

### 1. Clona il Repository

```bash
git clone [repository-url]
cd veloo-ai-landing
npm install
```

### 2. Configurazione EmailJS

1. Crea un account su [EmailJS.com](https://www.emailjs.com)
2. Crea un nuovo servizio email
3. Crea un template email
4. Ottieni le tue chiavi (User ID, Service ID, Template ID)

### 3. Configurazione delle Variabili

Aggiorna il file `script.js` con le tue credenziali EmailJS:

```javascript
// Nel file script.js, cerca questa sezione:
emailjs.init("TUA_USER_ID_QUI"); // Sostituisci con la tua User ID
emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
```

### 4. Deploy su Netlify

1. **Deploy Automatico**: 
   - Connetti il repository GitHub a Netlify
   - Il deploy avverrà automaticamente ad ogni push

2. **Deploy Manuale**:
   ```bash
   npm run build
   netlify deploy --prod
   ```

**Nota**: Le email vengono inviate tramite EmailJS - assicurati che il tuo servizio email sia configurato correttamente.

### 5. Personalizzazione

Modifica questi file per personalizzare la landing page:

- `index.html`: Contenuto e struttura
- `styles.css`: Styling e colori
- `script.js`: Funzionalità e configurazione EmailJS

## 🚀 Comandi Disponibili

```bash
# Avvia server di sviluppo locale
npm run dev

# Build per produzione
npm run build

# Avvia server locale
npm start
```

## 📂 Struttura del Progetto

```
veloo-ai-landing/
├── index.html          # Pagina principale
├── styles.css          # Styling CSS
├── script.js           # JavaScript e configurazione EmailJS
├── package.json        # Dipendenze Node.js
├── netlify.toml        # Configurazione Netlify
└── README.md          # Documentazione
```

## 🎨 Personalizzazione

### Colori del Brand
Modifica le variabili CSS in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-color: #ffffff;
    --bg-color: #0a0a0a;
}
```

### Template Email
Personalizza il template EmailJS con questi parametri:
- `{{firstName}}` - Nome del contatto
- `{{lastName}}` - Cognome
- `{{email}}` - Email del contatto
- `{{phone}}` - Telefono
- `{{company}}` - Azienda
- `{{useCase}}` - Caso d'uso
- `{{message}}` - Messaggio
- `{{date}}` - Data e ora di invio

## 📊 Analytics e Monitoraggio

### Log EmailJS
- Dashboard EmailJS per statistiche di consegna
- Monitor del form di contatto in `script.js`

### Esempio di monitoraggio personalizzato:
```javascript
// Nel tuo script.js puoi aggiungere:
console.log('Form submission:', templateParams);
// - EmailJS dashboard (email delivery)
```

## 🐛 Troubleshooting

### Problemi Comuni

**Email non vengono inviate:**
1. Verifica che le credenziali EmailJS siano corrette
2. Controlla la console del browser per errori
3. Verifica che il servizio EmailJS sia attivo

**Styling non si carica:**
1. Controlla che `styles.css` sia linkato correttamente
2. Verifica la cache del browser (Ctrl+F5)

## 🔧 Manutenzione

### Log e Debug
- Console del browser per errori JavaScript
- Network tab per problemi di caricamento risorse
- Dashboard EmailJS per statistiche email

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

---

Sviluppato con ❤️ per Veloo.AI 