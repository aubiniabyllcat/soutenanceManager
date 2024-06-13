import html
from typing import List
from fastapi import (BackgroundTasks, UploadFile, File, Form, Depends, HTTPException, status)

from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import dotenv_values
from pydantic import BaseModel, EmailStr
import jwt
from fastapi.templating import Jinja2Templates

from users.auth.models import Users

config_credentials = dotenv_values(".env")
conf = ConnectionConfig(
    MAIL_USERNAME= config_credentials["MAIL"],
    MAIL_PASSWORD= config_credentials["PASS"],
    MAIL_FROM= config_credentials["MAIL"],
    MAIL_PORT= 587,
    MAIL_SERVER= "smpt.gmail.com",
    MAIL_TLS= True,
    MAIL_SSL= False,
    USE_CREDENTIALS= True

)

class EmailSchema(BaseModel):
    email: List[EmailStr]

async def send_email(email: EmailSchema, instance: Users):
    token_data = {
        "id": instance.id,
        "username": instance.username
    }

    token =  jwt.encode(token_data, config_credentials["SECRET"])
    templates = Jinja2Templates(directory="templates")

    template = f"""
        <!DOCTYPE html>
        <html>
            <head>


            </head>
            <body>
                <div style = "display: flex; align-items: center; justify-content: center; flex-direction: column">
                    <h3> </h3>
                    br

                    <p></p>

                    <a></a>

                    <p></p>

                </div>
            </body>
        </html>

    """

    message = MessageSchema(
        subject= "Invitation",
        recipients= email,
        body= template,
        subtype= html
    )

    fm = FastMail(conf)
    await fm.send_message(message=message)

    config_credentials = dotenv_values(".env")

    async verify_token(token: str):
        try:
            payload = jwt.encode(token, config_credentials["SECRET"])
            user = await Users.get(id = payload.get("id"))

        except:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED
                detail="Invalide token",
                headers= {"WWW-Authenticate":"Bearer "}
            )
    return user

