"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import datetime
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Comment, Fav_movie, List_movie
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

#Iniciar JWT
jwt = JWTManager(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

#EJEMPLO ACCESO A RUTA PRIVADA
@app.route('/api/privada' , methods=['GET'])
@jwt_required()
def privada():
    print("llegando a /api/privada")
    #mensaje = "HOLA MENSAJE DESDE /api/privada"
    #permiso = "true"
    return jsonify({
        "mensaje": "HOLA MENSAJE DESDE /api/privada",
        "permiso": "true"
    })


# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

#Registrar usuarios el body contendra username email y password
#Queremos que el correo sea unico
@app.route('/register', methods=['POST'])
def register():
    request_body=request.get_json()
    mailtaken=User.query.filter_by(email=request_body['email']).first()
    if mailtaken:
        return "Email already taken",418
    else:
            newuser=User(username=request_body['username'], email=request_body['email'], password=request_body['password'])
            db.session.add(newuser)
            db.session.commit()
            return jsonify(request_body),201
            #NOTA PROGRAMACION; ESTAR ATENTO SI LOS IF ELSE SON CORRECTOS

#Entregar un token a un usuario con Email y Password correctos
@app.route('/login', methods=['POST'])
def iniciar_sesion():
    request_body = request.get_json()
    print(request_body)
    user = User.query.filter_by(email=request_body['email']).first()
    if user:
        if user.password == request_body['password']:
            print("NOMBRE DE USUARIO " ,user.username)
            acceso = create_access_token(identity = user.id, expires_delta=datetime.timedelta(minutes=60))

            return jsonify({
                "mensaje": "Welcome to the UpsideDown    2222222",
                "token": acceso,
                "username": user.username
            })
        else:
            return "You get lost"
    else:
        return "User lost to the Demogorgon", 400

#Funciona el token (se podria borrar, es para probar que funciona)
# @app.route('/member', methods=['GET'])
# @jwt_required()
# def members():
#     return "Welcome back to the UpsideDown"

#Guardar tu peli favorita
@app.route('/favorite/movie', methods=['POST'])
@jwt_required()
def add_fav_movie():
    request_body = request.get_json()
    favmovie = request_body
    if favmovie:
        newfav = Fav_movie(user_id=request_body['user_id'], movie_id=request_body['movie_id'])
        db.session.add(newfav)
        db.session.commit()
        return "Successfully added"
    else:
        return "To the UpsideDown with it"

#FUNCIONA!!!!
#El usuario pide ver sus favoritos
@app.route('/viewfav', methods=['GET'])
@jwt_required()
def get_your_favorite():
    identidad = get_jwt_identity()
    ufav = Fav_movie.query.filter_by(user_id=identidad).all()
    ufav=list(map(lambda X:X.serialize(), ufav))
    if ufav:
        #ufav = ufav.serialize()
        return jsonify({"resultado": ufav})
    else:
        return jsonify({"resultado": "Favourite movie not found"})

#Borrar la peli que ya no es favorita
@app.route('/undofav/movie', methods=['POST'])
@jwt_required()
def undo_fav_movie():
    request_body = request.get_json()
    undofav = Fav_movie.query.filter_by(user_id=request_body['user_id'], movie_id=request_body['movie_id']). first()
    if undofav:
        db.session.delete(undofav)
        db.session.commit()
        return "To the UpsideDown with it"
    else:
        return "You roll a 1"

#El usuario deja un comentario
@app.route('/add/comment', methods=['POST'])
@jwt_required()
def add_comment():
    user_ID = get_jwt_identity()
    request_body = request.get_json()
    newcomment = Comment( movie_id=request_body['movie_id'], user_comment=request_body['user_comment'], user_id = user_ID)
    if newcomment:
        db.session.add(newcomment)
        db.session.commit()
        return "Stranger comment added "
    else:
        return "Error"

#FUNCIONA!!!!
#El usuario pide ver su comentario
@app.route('/your/comment', methods=['GET'])
@jwt_required()
def get_your_comment():
    identidad = get_jwt_identity()
    ucomment = Comment.query.filter_by(user_id=identidad).all()
    ucomment = list(map(lambda X:X.serialize(), ucomment))
    if ucomment:
        #ucomment = ucomment.serialize()
        return jsonify({"resultado": ucomment})
    else:
        return jsonify({"resultado": "Comment not found"})

#El usuario edita su comentario
@app.route('/edit/comment', methods=['POST'])
@jwt_required()
def edit_comment():
    request_body = request.get_json() #Se necesita el user_id, movie_id y el nuevo comentario (new_comment).
    new_comment = request_body['new_comment']
    edit_comment = Comment.query.filter_by(user_id=request_body['user_id'], movie_id=request_body['movie_id']). first()
    if edit_comment:
        edit_comment.user_comment = new_comment
        db.session.commit()
        return "Successfully change"
    else:
        return "Could not edit comment"

#Borrar el comentario
@app.route('/undocom/movie', methods=['POST'])
@jwt_required()
def undo_com():
    request_body = request.get_json()
    undocom = Comment.query.filter_by(user_id=request_body['user_id'], movie_id=request_body['movie_id']). first()
    if undocom:
        db.session.delete(undocom)
        db.session.commit()
        return "To the UpsideDown with it"
    else:
        return "You roll a 1"

#FUNCIONA!!!!
#Pedir todos los comentarios de una pelicula sin que sea necesario estar registrado.
@app.route('/comment/<int:id>', methods=['GET'])  #id = ID de la pelicula
def get_all_comments(id):
    allcomments = Comment.query.filter_by(movie_id=id).all()
    allcomments=list(map(lambda X:X.serialize(), allcomments))
    if allcomments:
        #allcomments = allcomments.serialize()
        return jsonify({"resultado": allcomments})
    return jsonify(({"resultado": []}))
   

#Guardar tu peli en la lista
@app.route('/list/movie', methods=['POST'])
@jwt_required()
def add_list_movie():
    request_body = request.get_json()
    listmovie = request_body
    if listmovie:
        newlist = List_movie(user_id=request_body['user_id'], movie_id=request_body['movie_id'])
        db.session.add(newlist)
        db.session.commit()
        return "Saved to your list"
    else:
        return "Couldn't save it"

#FUNCIONA!!!!
#Ver las peliculas guardadas en la lista
@app.route('/viewlist', methods=['GET'])
@jwt_required()
def get_your_list():
    identidad = get_jwt_identity()
    ulist = List_movie.query.filter_by(user_id=identidad).all()
    ulist=list(map(lambda X:X.serialize(), ulist))
    if ulist:
        return jsonify({"resultado": ulist})
  

#Borrar la peli de la lista
@app.route('/undolist/movie', methods=['POST'])
@jwt_required()
def undo_list_movie():
    request_body = request.get_json()
    undolist = List_movie.query.filter_by(user_id=request_body['user_id'], movie_id=request_body['movie_id']). first()
    if undolist:
        db.session.delete(undolist)
        db.session.commit()
        return "To the UpsideDown with it"
    else:
        return "Couldn't delete it"

# this only runs if `$ python src/main.py` is executed esto va a lfinal
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

