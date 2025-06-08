## Steam Scraper + Email Sender

Este é um projeto backend simples em Node.js que realiza scraping de promoções da Steam e envia os dados por email.
![image](https://github.com/user-attachments/assets/12b25531-b11d-431c-87d1-fda651d87836)


### Funcionalidades:
- Faz scraping da página de promoções da Steam.
- Extrai os títulos e preços de jogos em promoção.
- Envia um email com as promoções encontradas.

### Tecnologias:

- Node.js
- Axios
- Cheerio
- Nodemailer
- Dotenv

### Como usar:

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/steam-scraper-email.git
cd steam-scraper-email
```

2. Instale as dependências:

```
npm install
```

3. Crie um arquivo .env na raiz com as credenciais de envio de e-mail:

```
EMAIL_USER=seuemail@gmail.com
EMAIL_TO=destinatario@gmail.com
EMAIL_PASS=senha-app
```
⚠️ A EMAIL_PASS precisa ser uma senha de app gerada para esse proposito.
