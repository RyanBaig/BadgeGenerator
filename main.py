import flask
import os
from PIL import Image
from flask import Flask, render_template, send_file

app = Flask(__name__)


@app.route('/')
def index():
  return render_template("index.html")


# Endpoint to serve the favicon.ico file
@app.route('/favicon.ico')
def favicon():
  return send_file('favicon.ico')


@app.route('/about')
def about():
  return render_template("about.html")


@app.route('/profile_badges')
def badges():
  return render_template("profile_badges.html")


@app.route('/generate_badge')
def gen_badges():
  return render_template("gen_badges.html")


@app.route('/generate/custom')
def gen_c():
  return render_template("gen_custom.html")


@app.route('/generate/platform')
def gen_p():
  return render_template("gen_platform.html")


app.run(host='0.0.0.0')
