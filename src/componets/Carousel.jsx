import React from 'react';
import '.././App.css';



export default function Carousel() {
  return (
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/1400x400/?code,program" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Welcome to ACM </h2>
        <p>Technology , Web Development, Artifical Intelligence</p>
     
        <button type="button" class="btn btn-danger">Blog</button>

      </div>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1400x400/?code,technology " class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>The Best Coding Blog</h2>
        <p>Technology , Web Development and trends</p>
        <button type="button" class="btn btn-danger">Blog</button>

      </div>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1400x400/?desktop,laptop" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Award Winning Blog</h2>
        <p>Technology , Web Development and trends</p>
        <button type="button" class="btn btn-danger">Blog</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
