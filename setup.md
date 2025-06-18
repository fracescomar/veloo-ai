# 🚀 Setup Rapido - Configurazione EmailJS

## 📧 Configurazione EmailJS

### Step 1: Crea Account EmailJS
1. Vai su [emailjs.com](https://www.emailjs.com)
2. Registrati o effettua login
3. Crea un nuovo servizio email

### Step 2: Configura Servizio Email
1. Nel dashboard EmailJS, vai su "Email Services"
2. Clicca "Add New Service"
3. Scegli il tuo provider email (Gmail, Outlook, etc.)
4. Segui la configurazione guidata

### Step 3: Crea Template Email
1. Vai su "Email Templates" 
2. Clicca "Create New Template"
3. Usa questo template di esempio:

```
Oggetto: Nuova richiesta da {{firstName}} {{lastName}}

Ciao,

Hai ricevuto una nuova richiesta dal sito Veloo.AI:

Nome: {{firstName}} {{lastName}}
Email: {{email}}
Telefono: {{phone}}
Azienda: {{company}}
Caso d'uso: {{useCase}}

Messaggio:
{{message}}

Data richiesta: {{date}}

---
Questo messaggio è stato inviato automaticamente dal sito Veloo.AI
```

### Step 4: Aggiorna le Chiavi nel Codice
Nel file `script.js`, aggiorna queste informazioni:

```javascript
// Sostituisci con la tua User ID di EmailJS
emailjs.init("TUA_USER_ID_QUI");

// Sostituisci con i tuoi Service ID e Template ID
emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
```

### Step 5: Deploy
```bash
git add .
git commit -m "Setup EmailJS integration"
git push origin main
```

## 🔧 Configurazione Avanzata

### Personalizzazione Email
Per personalizzare ulteriormente le email:

1. **Modifica il template** nel dashboard EmailJS
2. **Aggiungi variabili personalizzate** nel file `script.js`
3. **Configura notifiche** per te stesso

### Verifica Dominio
Per usare il tuo dominio con EmailJS:

1. **Vai nelle impostazioni** del servizio EmailJS
2. **Configura SPF e DKIM** se richiesto dal tuo provider
3. **Testa l'invio** dal dashboard EmailJS

## 📊 Monitoraggio

### Dashboard EmailJS
- **Statistiche di consegna**: Quante email sono state inviate
- **Log degli errori**: Se ci sono problemi di invio
- **Usage**: Quante email hai inviato questo mese

### Debug nel Browser
1. **Apri Console** (F12)
2. **Controlla errori** durante l'invio form
3. **Verifica le richieste** nel tab Network

## ❗ Troubleshooting

### Problemi Comuni

- **Email non arrivano**: Verifica configurazione servizio EmailJS
- **Errore 401**: Controlla User ID e Service ID
- **Quota superata**: Verifica il piano EmailJS

### Contatti Utili
- **Documentazione EmailJS**: [docs.emailjs.com](https://www.emailjs.com/docs/)
- **Supporto**: [help.emailjs.com](https://www.emailjs.com/docs/introduction/how-does-emailjs-work/)

---

✅ **Setup completato!** Il tuo form ora invierà email tramite EmailJS. 