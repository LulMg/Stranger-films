import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import CardPelicula from "../component/card-pelicula";
import { useParams } from "react-router-dom";
import { object, objectOf } from "prop-types";
import "../../styles/detallesPeli.css";

export const DetallesPeli = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [favmovie, setFavmovie] = useState("");
  const [newcomment, setNewcomment] = useState("");

  useEffect(() => {
    console.log(favmovie, newcomment);
  }, [favmovie, newcomment]);
  //<div classNameName="generalBody">
  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      console.log(obj.title);
      return (
        // <div classNameName="container">
        //   <a classNameName="tittle text-white font-weight-700">
        //   <span>{obj.title}</span>
        //   </a>
        //   <div>
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path} />
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path} />
        //   </div>
        //   <div classNameName="text-white">{obj.id}</div>
        //   <div classNameName="text-white">{index}</div>
        // </div>
        <div classNameName="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div id="contenedor" className="row">
              <div id="verde" className="col-3 my-auto mx-auto">
                <div className="card">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.averageVote}Corre platano</p>
                    <a
                      href="#"
                      className="btn btn-danger"
                      onClick={() => {
                        actions.favmovie(favmovie);
                      }}
                    >
                      Favoritos
                    </a>
                  </div>
                </div>
              </div>

              <div id="naranja" className="col-9 my-auto mx-auto">
                <div id="imagen-superior" className="imagen-path">
                  <div className="imagen-detalle">
                    <div className="imagen-active">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" + obj.backdrop_path
                        }
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h2>{obj.title}</h2>
                        <p>
                          Some representative placeholder content for the first
                          slide.
                          <a href="#" className="btn btn-danger">
                            Trailer
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classNameNsme="row">
              <div className="col-lg-11">
                <form>
                  <div className="form-group">
                    <label>Comentario</label>
                    <p className="clasificacion">
                      <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                      />
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                      />
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                      />
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                      />
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                      />
                      <label for="radio5">★</label>
                    </p>
                    <input
                      type="comments"
                      placeholder="Inserte su comentario aquí"
                      onChange={(e) => setNewcomment(e.target.value)}
                    ></input>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      actions.newcoment(newcomment);
                    }}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      );
    }
    //<div classNameName="prueba text-light"> hey</div>;
  });
};

/*<div classNameName="container-fluid">
        <div classNameName="banner-content">
          <div classNameName="transparent-block">
            <div classNameName="banner-caption">
              <div classNameName="position-relative mb-4">
                <a
                  href="watch-movie.html"
                  classNameName="d-flex align-items-center"
                >
                  <div classNameName="play-icon">
                    <div classNameName="circle pulse"></div>
                    <div classNameName="circle">
                      <svg
                        id="play"
                        viewBox="0 0 163 163"
                        version="1.1"
                        xmlns="https://www.imdb.com/video/vi1050657305?playlistId=tt9419884&ref_=tt_pr_ov_vi"
                      >
                        <g fill="none">
                          <g
                            transform="translate(2.000000, 2.000000)"
                            strokeWidth="4"
                          >
                            <path
                              d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                              id="lineOne"
                              stroke="#8d0c0c"
                            ></path>
                            <path
                              d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                              id="triangle"
                              stroke="#8d0c0c"
                            ></path>
                            <path
                              d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                              id="lineTwo"
                              stroke="#8d0c0c"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <h2 classNameName="banner-name text-white font-weight-700">
                    Doctor Strange en el multiverso de la locura
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>*/

/*<div classNameName="main-content">
        <section classNameName="play-details">
          <div classNameName="container-fluid">
            <div classNameName="row">
              <div classNameName="col-md-3">
                <div classNameName="row">
                  <div classNameName="col-md-9">
                    <div classNameName="play-thumb mb-4">
                      <img
                        classNameName="img-fluid1"
                        src="https://pics.filmaffinity.com/Doctor_Strange_en_el_multiverso_de_la_locura-610981386-large.jpg"
                        alt=""
                      />
                      <div classNameName="top-badge">
                        <div classNameName="video-badge">
                          <img
                            classNameName="img-fluid"
                            src="images/top-movies.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div classNameName="thumb-details text-center">
                      <p>
                        <span classNameName="border1 border-dark">1080p</span>
                        <span classNameName="border1 border-dark">24p</span>
                        <span classNameName="border1 border-dark">7.1</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="derecha">
                <div classNameName="col-md-12">
                  <div classNameName="play-details-content">
                    <div classNameName="title-block d-flex align-items-center justify-content-between">
                      <h2 classNameName="play-title">
                        Doctor Strange en el moltiverso de la locura
                      </h2>
                    </div>
                    <div classNameName="details-info mb-4">
                      <span>
                        <img
                          classNameName="user1"
                          src="https://cdn-icons-png.flaticon.com/512/3788/3788610.png"
                        />
                        <span classNameName="border border-dark">+18</span>
                      </span>
                      <span>
                        <img
                          classNameName="user2"
                          src="https://cdn-icons-png.flaticon.com/512/2784/2784399.png"
                        />
                        <span classNameName="border border-dark"> 2h 45min</span>
                      </span>
                      <span>
                        <img
                          classNameName="user3"
                          src="https://cdn-icons.flaticon.com/png/512/1048/premium/1048953.png?token=exp=1656351957~hmac=ed048a0aa231b029e4cef88b139e50a7"
                        />
                        <span classNameName="border border-dark">2021</span>
                      </span>
                      <span>
                        <img
                          classNameName="user3"
                          src="https://cdn-icons-png.flaticon.com/512/1038/1038100.png"
                        />
                        <span classNameName="border border-dark">Action</span>
                      </span>
                      <span>
                        <img
                          classNameName="user3"
                          src="https://cdn-icons.flaticon.com/png/512/4830/premium/4830734.png?token=exp=1656352701~hmac=3c1238d0f0751251171cdb5647e48765"
                        />
                        <span classNameName="border border-dark">
                          United States
                        </span>
                      </span>
                    </div>
                    <div classNameName="details-desc">
                      <p>
                        Secuela de la película de Marvel de 2016 Doctor Strange.
                      </p>
                      <div classNameName="movie-persons mb-4">
                        <div classNameName="person-block">
                          <h5 classNameName="title">Director</h5>
                          <p classNameName="name">Christopher Nolan</p>
                        </div>
                        <div classNameName="person-block">
                          <h5 classNameName="title">Cast</h5>
                          <img
                            src="https://es.web.img2.acsta.net/c_162_216/medias/nmedia/18/82/63/71/20528550.jpg"
                            className="img"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">Benedict Cumberbatch</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                          <img
                            src="https://es.web.img3.acsta.net/c_162_216/pictures/15/09/15/12/25/231241.jpg"
                            classNameName="rounded"
                            alt="..."
                          />
                          <img
                            src="https://es.web.img3.acsta.net/c_162_216/pictures/15/09/28/11/12/007562.jpg"
                            classNameName="rounded"
                            alt="..."
                          />
                        </div>
                        <div classNameName="details-buttons">
                          <div classNameName="row d-flex align-items-center">
                            <div classNameName="col-6 col-m mb-xl-0 mb-3">
                              <a
                                href="watch-movie.html"
                                classNameName="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                              >
                                <i
                                  classNameName="icofont-ui-play mr-2"
                                  aria-hidden="true"
                                ></i>
                                Play
                              </a>
                            </div>
                            <div classNameName="col-6 col-m mb-xl-0 mb-3">
                              <a
                                href="watch-movie.html"
                                classNameName="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                              >
                                <i
                                  classNameName="icofont-plus mr-2"
                                  aria-hidden="true"
                                ></i>
                                MY List
                              </a>
                            </div>
                            <div classNameName="col-6 col-m mb-xl-0 mb-3">
                              <a
                                id="trailer"
                                classNameName="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                                data-toggle="modal"
                                data-target="#trailer-modal"
                                aria-hidden="true"
                              >
                                <i
                                  classNameName="icofont-ui-movie mr-2"
                                  aria-hidden="true"
                                ></i>
                                Trailer
                              </a>
                              <div
                                classNameName="modal fade"
                                id="trailer-modal"
                                tabIndex="0"
                                role="dialog"
                                aria-labelledby="trailer-modal"
                                aria-hidden="true"
                              >
                                <div
                                  classNameName="modal-dialog modal-lg"
                                  role="document"
                                  id="trailerModal"
                                >
                                  <div classNameName="modal-content">
                                    <div classNameName="modal-header">
                                      <h5 classNameName="modal-title">Trailer</h5>
                                      <button
                                        type="button"
                                        classNameName="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">
                                          <i classNameName="fas fa-times"></i>
                                        </span>
                                      </button>
                                    </div>
                                    <div classNameName="modal-body">
                                      <video
                                        classNameName="video d-block"
                                        controls=""
                                        loop=""
                                      >
                                        <source
                                          src="video/01-video.mp4"
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div classNameName="col-6 col-xl mb-xl-0">
                              <a
                                id="share"
                                classNameName="btn hvr-sweep-to-right d-block"
                                tabIndex="0"
                                data-toggle="modal"
                                data-target="#share-modal"
                              >
                                <i
                                  classNameName="icofont-share mr-2"
                                  aria-hidden="true"
                                ></i>
                                Share
                              </a>
                              <div
                                classNameName="modal fade"
                                id="share-modal"
                                tabIndex="0"
                                role="dialog"
                                aria-labelledby="share-modal"
                                aria-hidden="true"
                              >
                                <div
                                  classNameName="modal-dialog modal-lg"
                                  role="document"
                                  id="sharemodal"
                                >
                                  <div classNameName="modal-content">
                                    <div classNameName="modal-header">
                                      <h5 classNameName="modal-title">Share</h5>
                                      <button
                                        type="button"
                                        classNameName="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">
                                          <i classNameName="fas fa-times"></i>
                                        </span>
                                      </button>
                                    </div>
                                    <div classNameName="modal-body">
                                      <div classNameName="icon-container d-flex">
                                        <div classNameName="icon-block">
                                          <i classNameName="social-icon fab fa-twitter fa-2x"></i>
                                          <p>Twitter</p>
                                        </div>
                                        <div classNameName="icon-block">
                                          <i classNameName="social-icon fab fa-facebook fa-2x"></i>
                                          <p>Facebook</p>
                                        </div>
                                        <div classNameName="icon-block">
                                          <i classNameName="social-icon fab fa-instagram fa-2x"></i>
                                          <p>Instagram</p>
                                        </div>
                                        <div classNameName="icon-block">
                                          <i classNameName="social-icon fab fa-telegram fa-2x"></i>
                                          <p>Telegram</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section classNameName="related-movies">
          <div classNameName="row">
            <div classNameName="col-lg-12">
              <h2 classNameName="block-title">Related Movies</h2>
            </div>
          </div>
          <div classNameName="row">
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/01.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">life is Beautiful</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/02.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">The End</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/03.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">the beginning</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/04.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">The Search</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/05.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">The Treasures</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div classNameName="video-block">
                <div classNameName="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      classNameName="img-fluid"
                      src="images/popular/06.jpg"
                      alt=""
                    />
                  </a>
                  <div classNameName="box-content">
                    <ul classNameName="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i classNameName="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i classNameName="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i classNameName="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div classNameName="video-content">
                  <h2 classNameName="video-title">
                    <a href="movie-single.html">Problems</a>
                  </h2>
                  <div classNameName="video-info d-flex align-items-center">
                    <span classNameName="video-year">2021</span>
                    <span classNameName="video-age">+18</span>
                    <span classNameName="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>*/
//}
//</div>;
