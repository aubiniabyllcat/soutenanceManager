from sqlalchemy import Column, ForeignKey, String, Integer, DateTime, func
from sqlalchemy.orm import relationship
from database import Base

class Equipe(Base):
    __tablename__ = 'equipe'
   
    id = Column(Integer, primary_key=True)
    nom = Column(String(150))
    filiere_id = Column(ForeignKey('filiere.id', ondelete='CASCADE'))
    maitre_memoire_id = Column(ForeignKey('maitre_memoire.id', ondelete='CASCADE'))

    filiere = relationship('Filiere', backref='equipe')
    maitre_memoire = relationship('MaitreMemoire', backref='equipe')

    def __repr__(self) -> str:
        return f'Equipe: {self.nom}'


class MembresEquipe(Base):
    __tablename__ = 'membre_equipe'
    
    id = Column(Integer, primary_key=True)
    equipe_id = Column(ForeignKey('equipe.id', ondelete='CASCADE'))
    etudiant1_id = Column(ForeignKey('etudiant.id', ondelete='CASCADE'))
    etudiant2_id = Column(ForeignKey('etudiant.id', ondelete='CASCADE'), nullable=True)
    
    equipe = relationship('Equipe', backref='membre_equipe')
    etudiant1 = relationship('Etudiant', foreign_keys=[etudiant1_id], backref='membre_equipe1')
    etudiant2 = relationship('Etudiant', foreign_keys=[etudiant2_id], backref='membre_equipe2')

    def __repr__(self) -> str:
        return f'MembresEquipe: {self.id}'

