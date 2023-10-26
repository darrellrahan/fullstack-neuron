@extends('layouts.master')
@section('content')

{{-- <div width="600" height="480">
</h1><a href="{{route('preview-home')}}">Home</a><h1>
</div>
<div width="600" height="480">
</h1><a href="{{route('preview-about')}}">about</a><h1>
</div> --}}



{{-- PAGE /CARD --}}
<div class="row mt-3">
    <style>
        #image-tampil{
            width: inherit;
            height: 300px;
            border: 1px solid black;
        }
        #imageDB{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .service-card {
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: white;
            margin: 10px;
            padding: 20px;
        }

        .service-img {
            height: 300px;
            width: 100%;
            object-fit: cover;
        }
    </style>

            <div class="card col-md-11 card-primary mx-auto">
                <h3 class="card-header">Home Page</h3>
                <div class="card-body">
                    <div id="image-tampil">
                        <img id="imageDB" src="{{asset('img/pages/home.jpg')}}" alt="...">
                    </div>
                    <a href="{{route('preview-home')}}" id="homePage" class="btn btn-primary mb-8 col-md-12">EDIT</a>
                </div>
            </div>

            <div class="card col-md-11 card-success mx-auto">
                <h3 class="card-header">About Page</h3>
                <div class="card-body">
                    <div id="image-tampil">
                        <img id="imageDB" src="{{asset('img/pages/about.jpg')}}" alt="...">
                    </div>
                    <a href="{{route('preview-about')}}" id="aboutPage" class="btn btn-primary mb-8 col-md-12">EDIT</a>
                </div>
            </div>

            <div class="card col-md-11 card-danger mx-auto">
                <h3 class="card-header">Service Page</h3>
                <div class="card-body">
                    <div id="image-tampil">
                        <img id="imageDB" src="{{asset('img/pages/service.png')}}" alt="...">
                    </div>
                    <a href="{{route('service-pages.index')}}" id="servicePage" class="btn btn-primary mb-8 col-md-12">EDIT</a>
                </div>
            </div>

</div>

    {{-- CAREERR CARD --}}

@endsection
