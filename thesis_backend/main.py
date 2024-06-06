from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from users.auth.controllers import auth_controllers
from users.profile.controllers import profile_controllers
from users.etudiants.controllers import etudiant_controllers
from users.enseignants.controllers import enseignant_controllers
#from chat.messages.controllers import message_controllers
import uvicorn
from settings import get_settings

app = FastAPI(title='chat', version='1.0.0')

# Liste des origines autorisées pour CORS
origins = [
    "http://localhost",
    "http://localhost:3000",  
    "http://localhost:3001"
]

# Configuration du middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

smtp_server = 'smtp.example.com'
smtp_port = 587
smtp_username = 'your_smtp_username'
smtp_password = 'your_smtp_password'
from_email = 'your_email@example.com'
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

SMTP_SERVER = 'smtp.example.com'  # Votre serveur SMTP
SMTP_PORT = 587  # Le port SMTP, souvent 587 pour TLS
SMTP_USERNAME = 'your_username'
SMTP_PASSWORD = 'your_password'
FROM_EMAIL = 'no-reply@example.com'


# Inclusion des routes des différents contrôleurs
app.include_router(auth_controllers)
app.include_router(profile_controllers)
app.include_router(etudiant_controllers)
app.include_router(enseignant_controllers)
#app.include_router(enseignant_controllers)

def run_server():
    # Lancement du serveur avec uvicorn
    uvicorn.run(
        'main:app',
        host=get_settings().host,
        port=get_settings().port,
        reload=True
    )

if __name__ == '__main__':
    run_server()