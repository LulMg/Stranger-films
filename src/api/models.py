from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(55), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Fav_movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #quien le dio a favoritos
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #quien es el favorito y y traer ID
    movie_id = db.Column(db.Integer, unique=True, nullable=False)
    #definir las relaciones
    rel_user = db.relationship(User)

    def __repr__(self):
        return '<Fav_movie %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movie_id": self.movie_id,
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #quien añadio el comentario
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #a que pelicula añade el comentario
    movie_id = db.Column(db.Integer, unique=False, nullable=False) #aqui necesitamos el movieID de la API
    #que comentario añade a la pelicula
    user_comment = db.Column(db.String(255), unique=False, nullable=False) 
    #definir las relaciones
    rel_user = db.relationship(User)

    def __repr__(self):
        return '<Comment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movie_id": self.movie_id,
            "user_comment": self.user_comment,
        }

