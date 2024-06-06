from typing import Text
from sqlalchemy import func, Column, Integer, String, DateTime,text, Time, Boolean, \
    ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Stage(Base):
    __tablename__ = 'stage'


    id = Column(Integer, primary_key=True)
    theme = Column(Text, nullable=False)
    lieu = Column(String(255), nullable=False)
    responsable = Column(String(150), nullable=False)
    valide = Column(Boolean, default=True)
    equipe_id = Column(ForeignKey('equipe.id', ondelete='CASCADE'), unique=True)
    cahier_de_charge = Column(Text, nullable=False)

    equipe = relationship('Equipe', backref='stage')

    def __repr__(self) -> str:
        return f'Stage: {self.theme}'  
    