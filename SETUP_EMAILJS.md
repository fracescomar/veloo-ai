# Setup EmailJS per Veloo AI

## Passi per configurare EmailJS

### 1. Registrati su EmailJS
- Vai su https://www.emailjs.com/
- Registrati con un account gratuito

### 2. Configura un servizio email
- Nella dashboard, vai su "Email Services"
- Clicca "Add New Service"
- Scegli Gmail (o il tuo provider email preferito)
- Segui le istruzioni per collegare il tuo account email

### 3. Crea un template email
- Vai su "Email Templates"
- Clicca "Create New Template"
- Imposta il template come segue:

**Subject (Oggetto):**
```
🚀 Nuova richiesta da {{firstName}} {{lastName}} - Veloo AI
```

**Content (Contenuto):**
```
NUOVA RICHIESTA DI CONTATTO - VELOO AI
=====================================

Data: {{date}}

INFORMAZIONI CONTATTO:
- Nome: {{firstName}} {{lastName}}
- Email: {{email}}
- Telefono: {{phone}}
- Azienda: {{company}}
- Caso d'uso: {{useCase}}

MESSAGGIO:
{{message}}

=====================================
Questa email è stata generata automaticamente dal sito web di Veloo AI.
Per rispondere al cliente, utilizza l'indirizzo: {{email}}
```

**To Email:** francescomarmiroli0@gmail.com

### 4. Aggiorna le chiavi nel codice
Nel file `script.js`, sostituisci:
- `YOUR_PUBLIC_KEY` con la tua Public Key di EmailJS
- `YOUR_SERVICE_ID` con l'ID del servizio email che hai creato
- `YOUR_TEMPLATE_ID` con l'ID del template che hai creato

### 5. Testa il sistema
- Apri il sito
- Compila il form di contatto
- Verifica che l'email arrivi correttamente

### Note
- EmailJS ha un limite gratuito di 200 email al mese
- Se hai bisogno di più email, puoi passare al piano a pagamento
- Il sistema è ora molto più semplice e non richiede funzioni serverless 