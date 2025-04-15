import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ cardDetail }) => {
    return (
        <div class="card" style={{ "width": "18rem" }}>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={cardDetail?.images[0]} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={cardDetail?.images[1]} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={cardDetail?.images[2]} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">{cardDetail?.title}</h5>
                <p class="card-text">{cardDetail?.description}</p>
                <a href="#" class="btn btn-primary"><Link to={'/products/'+cardDetail?.id}>Card Detail</Link></a>
            </div>
        </div>
    )
}

export default Card