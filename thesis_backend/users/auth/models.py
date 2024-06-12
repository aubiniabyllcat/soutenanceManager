from typing import Text
from sqlalchemy import func, Column, Integer, String, DateTime,text, Time, Boolean, \
    ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from sqlalchemy import UniqueConstraint


class Users(Base):
    __tablename__ = 'utilisateur'

    __mapper_args__ = {"eager_defaults": True}


    id = Column(Integer, primary_key=True)
    username = Column(String(length=200), unique=True)
    password = Column(String)
    nom = Column(String(length=200), nullable=False)
    prenoms = Column(String(length=200), nullable=False)
    bio = Column(String(length=255))
    role_id = Column(
        Integer,
        ForeignKey('role.id', ondelete='CASCADE')
    )
    is_active = Column(Boolean, default=True)
    created = Column(DateTime, server_default=func.now())

    role_rel = relationship('Role', backref='utilisateur')
    images = relationship(
        'UserImage',
        backref='user',
        passive_deletes=True,
        lazy='joined'
    )

    __table_args__ = (
        UniqueConstraint('id', 'role_id', name='unique_user_role'),
    )
    
    def __repr__(self) -> str:
        return f'User: {self.username}'
    

class UserImage(Base):
    __tablename__ = 'utilisateur_image'

    id = Column(Integer, primary_key=True)
    photo = Column(String)
    utilisateur_id = Column(Integer, ForeignKey('utilisateur.id', ondelete='CASCADE'))

    def __repr__(self) -> str:
        return f'User image: {self.photo} : {self.user_id}'

class Role(Base):
    __tablename__ = 'role'

    id = Column(Integer, primary_key=True)
    libelle = Column(String(length=200), nullable=False)

    def __repr__(self) -> str:
        return f'Role : {self.libelle}'
    

class Etudiant(Base):
    __tablename__ = 'etudiant'
    __mapper_args__ = {'eager_defaults': True}

    id = Column(Integer, primary_key=True)
    matricule = Column(String(length=200), nullable=False, unique=True)
    slug = Column(String)
    utilisateur_id = Column(Integer, ForeignKey('utilisateur.id', ondelete='CASCADE'), unique=True)
    filiere_id = Column(Integer, ForeignKey('filiere.id', ondelete='CASCADE'))
    annee_id = Column(Integer, ForeignKey('annee.id', ondelete='CASCADE'))

    
    filiere_rel = relationship('Filiere', backref='etudiant')
    annee_rel = relationship('Annee', backref='etudiant')
    created = Column(DateTime, server_default=func.now())
    

    def __repr__(self) -> str:
        return f'Etudiant: {self.slug}'
    

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


    
class Filiere(Base):
    __tablename__ = 'filiere'

    id = Column(Integer, primary_key=True)
    nom = Column(String(length=200), nullable=False)
    departement_id = Column(Integer, ForeignKey('departement.id', ondelete='CASCADE'))
    
    chef_departemnt_rel = relationship('Departement', backref='filiere')
    def __repr__(self) -> str:
        return f'Filiere : {self.nom}'
    




class Annee(Base):
    __tablename__ = 'annee'

    id = Column(Integer, primary_key=True)
    libelle = Column(String(length=200), nullable=False)

    def __repr__(self) -> str:
        return f'Annee : {self.libelle}'
    


class Memoire(Base):
    __tablename__ = 'memoire'

    id = Column(Integer, primary_key=True)
    theme = Column(String(255), nullable=False)
    document = Column(String, nullable=False)
    valide = Column(Boolean, default=False)
    equipe_id = Column(ForeignKey('equipe.id', ondelete='CASCADE'), unique=True)

    equipe = relationship('Equipe', backref='memoire')

    def __repr__(self) -> str:
        return f'Memoire: {self.theme}'




class Enseignant(Base):
    __tablename__ = 'enseignant'
    __mapper_args__ = {'eager_defaults': True}

    id = Column(Integer, primary_key=True)
    matricule = Column(String(length=200), nullable=False, unique=True)
    slug = Column(String)
    grade = Column(String(length=200), nullable=False)
    specialite = Column(String(length=200), nullable=False) 
    utilisateur_id = Column(Integer,  ForeignKey('utilisateur.id', ondelete='CASCADE'), unique=True)
    departement_id = Column(ForeignKey('departement.id', ondelete='CASCADE'))

    departement_rel = relationship('Departement', backref='enseignant')
    created = Column(DateTime, server_default=func.now())
    
    def __repr__(self) -> str:
        return f'Enseignant: {self.slug}'
    
    
class Departement(Base):
    __tablename__ = 'departement'
    __mapper_args__ = {'eager_defaults': True}

    id = Column(Integer, primary_key=True)
    nom = Column(String(150), nullable=False)
    
    def __repr__(self) -> str:
        return f'Departement: {self.nom}'
    
class Chefdepartement(Base):
    __tablename__ = 'chef_departement'

    id = Column(Integer, primary_key=True)
    enseignant_id = Column(Integer, ForeignKey('enseignant.id', ondelete='CASCADE'))
    departement_id = Column(Integer, ForeignKey('departement.id', ondelete='CASCADE'))
    
    enseignant_rel = relationship('Enseignant', backref='chef_departement')
    chef_departemnt_rel = relationship('Departement', backref='chef_departement')
    def __repr__(self) -> str:
        return f'Filiere : {self.id}'

class MaitreMemoire(Base):
    __tablename__ = 'maitre_memoire'
    __mapper_args__ = {'eager_defaults': True}

    id = Column(Integer, primary_key=True)
    nbr_max_equipe = Column(Integer, nullable=False)
    filiere_id = Column(ForeignKey('filiere.id', ondelete='CASCADE'))
    enseignant_id = Column(ForeignKey('enseignant.id', ondelete='CASCADE'))

    enseignant = relationship('Enseignant', backref='maitre_memoire')
    filiere = relationship('Filiere', backref='maitre_memoire')

    def __repr__(self) -> str:
        return f'MaitreMemoire: {self.id}'