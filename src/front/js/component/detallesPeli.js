import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import CardPelicula from "../component/card-pelicula";
import { useParams } from "react-router-dom";
import { object, objectOf } from "prop-types";
import "../../styles/detallesPeli.css";

export const DetallesPeli = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  //<div className="generalBody">
  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      console.log(obj.title);
      return (
        // <div className="container">
        //   <a className="tittle text-white font-weight-700">
        //   <span>{obj.title}</span>
        //   </a>
        //   <div>
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path} />
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path} />
        //   </div>
        //   <div className="text-white">{obj.id}</div>
        //   <div className="text-white">{index}</div>
        // </div>
<div className="container">
<div id="contenedor" class="row">

<div id="verde" class="col-3 my-auto mx-auto"> 
    <div class="card">
      <img src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path} class="card-img-top" alt="..."/>

      <div class="card-body">
        <h5 class="card-title">{obj.title}</h5>
        <p class="card-text">{obj.averageVote}Corre platano</p>
        <a href="#" class="btn btn-danger">Mi lista</a>
      </div>
    </div>                        
  </div>

  <div id="naranja" class="col-9 my-auto mx-auto">
  <div id="imagen-superior" class="imagen-path">
  <div class="imagen-detalle">
    <div class="imagen-active">
      <img src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>{obj.title}</h2>
        <p>Some representative placeholder content for the first slide.
        <a href="#" class="btn btn-danger">Trailer</a>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div classNsme="row">
  <div class="col-lg-11">
        <form>
            <div class="form-group">
			<label>Comentario</label>
    <p class="clasificacion">

    <input id="radio1" type="radio" name="estrellas" value="5"/>
    <label for="radio1">★</label>
    <input id="radio2" type="radio" name="estrellas" value="4"/>
    <label for="radio2">★</label>
    <input id="radio3" type="radio" name="estrellas" value="3"/>
    <label for="radio3">★</label>
    <input id="radio4" type="radio" name="estrellas" value="2"/>
    <label for="radio4">★</label>
    <input id="radio5" type="radio" name="estrellas" value="1"/>
    <label for="radio5">★</label>
  </p>
			<textarea id="comment" class="form-control"></textarea>
			</div>
			<button type="button" class="btn btn-primary" onclick="commentBox();">Enviar</button>
        </form>
        
    </div>
    </div>
            
</div>
      );
    }
    //<div className="prueba text-light"> hey</div>;
  });
};








/*<div className="container-fluid">
        <div className="banner-content">
          <div className="transparent-block">
            <div className="banner-caption">
              <div className="position-relative mb-4">
                <a
                  href="watch-movie.html"
                  className="d-flex align-items-center"
                >
                  <div className="play-icon">
                    <div className="circle pulse"></div>
                    <div className="circle">
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
                  <h2 className="banner-name text-white font-weight-700">
                    Doctor Strange en el multiverso de la locura
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>*/

/*<div className="main-content">
        <section className="play-details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-9">
                    <div className="play-thumb mb-4">
                      <img
                        className="img-fluid1"
                        src="https://pics.filmaffinity.com/Doctor_Strange_en_el_multiverso_de_la_locura-610981386-large.jpg"
                        alt=""
                      />
                      <div className="top-badge">
                        <div className="video-badge">
                          <img
                            className="img-fluid"
                            src="images/top-movies.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="thumb-details text-center">
                      <p>
                        <span className="border1 border-dark">1080p</span>
                        <span className="border1 border-dark">24p</span>
                        <span className="border1 border-dark">7.1</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="derecha">
                <div className="col-md-12">
                  <div className="play-details-content">
                    <div className="title-block d-flex align-items-center justify-content-between">
                      <h2 className="play-title">
                        Doctor Strange en el moltiverso de la locura
                      </h2>
                    </div>
                    <div className="details-info mb-4">
                      <span>
                        <img
                          className="user1"
                          src="https://cdn-icons-png.flaticon.com/512/3788/3788610.png"
                        />
                        <span className="border border-dark">+18</span>
                      </span>
                      <span>
                        <img
                          className="user2"
                          src="https://cdn-icons-png.flaticon.com/512/2784/2784399.png"
                        />
                        <span className="border border-dark"> 2h 45min</span>
                      </span>
                      <span>
                        <img
                          className="user3"
                          src="https://cdn-icons.flaticon.com/png/512/1048/premium/1048953.png?token=exp=1656351957~hmac=ed048a0aa231b029e4cef88b139e50a7"
                        />
                        <span className="border border-dark">2021</span>
                      </span>
                      <span>
                        <img
                          className="user3"
                          src="https://cdn-icons-png.flaticon.com/512/1038/1038100.png"
                        />
                        <span className="border border-dark">Action</span>
                      </span>
                      <span>
                        <img
                          className="user3"
                          src="https://cdn-icons.flaticon.com/png/512/4830/premium/4830734.png?token=exp=1656352701~hmac=3c1238d0f0751251171cdb5647e48765"
                        />
                        <span className="border border-dark">
                          United States
                        </span>
                      </span>
                    </div>
                    <div className="details-desc">
                      <p>
                        Secuela de la película de Marvel de 2016 Doctor Strange.
                      </p>
                      <div className="movie-persons mb-4">
                        <div className="person-block">
                          <h5 className="title">Director</h5>
                          <p className="name">Christopher Nolan</p>
                        </div>
                        <div className="person-block">
                          <h5 className="title">Cast</h5>
                          <img
                            src="https://es.web.img2.acsta.net/c_162_216/medias/nmedia/18/82/63/71/20528550.jpg"
                            class="img"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">Benedict Cumberbatch</h5>
                            <p class="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                          </div>
                          <img
                            src="https://es.web.img3.acsta.net/c_162_216/pictures/15/09/15/12/25/231241.jpg"
                            className="rounded"
                            alt="..."
                          />
                          <img
                            src="https://es.web.img3.acsta.net/c_162_216/pictures/15/09/28/11/12/007562.jpg"
                            className="rounded"
                            alt="..."
                          />
                        </div>
                        <div className="details-buttons">
                          <div className="row d-flex align-items-center">
                            <div className="col-6 col-m mb-xl-0 mb-3">
                              <a
                                href="watch-movie.html"
                                className="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                              >
                                <i
                                  className="icofont-ui-play mr-2"
                                  aria-hidden="true"
                                ></i>
                                Play
                              </a>
                            </div>
                            <div className="col-6 col-m mb-xl-0 mb-3">
                              <a
                                href="watch-movie.html"
                                className="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                              >
                                <i
                                  className="icofont-plus mr-2"
                                  aria-hidden="true"
                                ></i>
                                MY List
                              </a>
                            </div>
                            <div className="col-6 col-m mb-xl-0 mb-3">
                              <a
                                id="trailer"
                                className="btn d-block hvr-sweep-to-right"
                                tabIndex="0"
                                data-toggle="modal"
                                data-target="#trailer-modal"
                                aria-hidden="true"
                              >
                                <i
                                  className="icofont-ui-movie mr-2"
                                  aria-hidden="true"
                                ></i>
                                Trailer
                              </a>
                              <div
                                className="modal fade"
                                id="trailer-modal"
                                tabIndex="0"
                                role="dialog"
                                aria-labelledby="trailer-modal"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-lg"
                                  role="document"
                                  id="trailerModal"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">Trailer</h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">
                                          <i className="fas fa-times"></i>
                                        </span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <video
                                        className="video d-block"
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
                            <div className="col-6 col-xl mb-xl-0">
                              <a
                                id="share"
                                className="btn hvr-sweep-to-right d-block"
                                tabIndex="0"
                                data-toggle="modal"
                                data-target="#share-modal"
                              >
                                <i
                                  className="icofont-share mr-2"
                                  aria-hidden="true"
                                ></i>
                                Share
                              </a>
                              <div
                                className="modal fade"
                                id="share-modal"
                                tabIndex="0"
                                role="dialog"
                                aria-labelledby="share-modal"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-lg"
                                  role="document"
                                  id="sharemodal"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">Share</h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">
                                          <i className="fas fa-times"></i>
                                        </span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <div className="icon-container d-flex">
                                        <div className="icon-block">
                                          <i className="social-icon fab fa-twitter fa-2x"></i>
                                          <p>Twitter</p>
                                        </div>
                                        <div className="icon-block">
                                          <i className="social-icon fab fa-facebook fa-2x"></i>
                                          <p>Facebook</p>
                                        </div>
                                        <div className="icon-block">
                                          <i className="social-icon fab fa-instagram fa-2x"></i>
                                          <p>Instagram</p>
                                        </div>
                                        <div className="icon-block">
                                          <i className="social-icon fab fa-telegram fa-2x"></i>
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
        <section className="related-movies">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="block-title">Related Movies</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/01.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">life is Beautiful</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/02.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">The End</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/03.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">the beginning</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/04.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">The Search</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/05.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">The Treasures</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <div className="video-block">
                <div className="video-thumb position-relative thumb-overlay">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="images/popular/06.jpg"
                      alt=""
                    />
                  </a>
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <a href="watch-movie.html">
                          <i className="fas fa-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="movie-single.html">
                          <i className="fas fa-info"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="video-content">
                  <h2 className="video-title">
                    <a href="movie-single.html">Problems</a>
                  </h2>
                  <div className="video-info d-flex align-items-center">
                    <span className="video-year">2021</span>
                    <span className="video-age">+18</span>
                    <span className="video-type">Action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>*/
//}
//</div>;
