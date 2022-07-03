"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Comment, Fav_movie, List_movie
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)
