@extends('layouts.master')

@section('content')
<style>
    .form-group{
        margin-bottom: 30px
    }
</style>

<div class="col-md-12">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Home Page</h3>
      </div>
      <div class="card-body">

        <form method="POST" action="{{ route('edit-home',['id'=>1]) }}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="hero_title1">Hero Title 1</label>
                <input type="text" name="hero_title1" class="form-control" value="{{$dataHome->hero_title1}}" required maxlength="255">
            </div>

            <!-- Input field for 'hero_title2' -->
            <div class="form-group">
                <label for="hero_title2">Hero Title 2</label>
                <input type="text" name="hero_title2" class="form-control" value="{{$dataHome->hero_title2}}" required maxlength="255">
            </div>

            <!-- Input field for 'hero_title3' -->
            <div class="form-group">
                <label for="hero_title3">Hero Title 3</label>
                <input type="text" name="hero_title3" class="form-control" value="{{$dataHome->hero_title3}}" required maxlength="255">
            </div>

            <!-- Input field for 'hero_desc' -->
            <div class="form-group">
                <label for="hero_desc">Hero Description</label>
                <textarea type="text" name="hero_desc" class="form-control" rows="4" maxlength="255">{{$dataHome->hero_desc}}</textarea>
            </div>

            <!-- Input field for 'about_project' -->
            <div class="form-group">
                <label for="about_project">About Project</label>
                <input type="text" name="about_project" class="form-control" value="{{$dataHome->about_project}}" maxlength="20">
            </div>

            <!-- Input field for 'about_experience' -->
            <div class="form-group">
                <label for="about_experience">About Experience</label>
                <input type="text" name="about_experience" class="form-control" value="{{$dataHome->about_experience}}" maxlength="20">
            </div>

                <!-- Input field for 'about_desc' -->
            <div class="form-group">
                <label for="about_desc">About Description</label>
                <textarea type="text" name="about_desc" class="form-control" required maxlength="255">{{$dataHome->about_desc}}</textarea>
            </div>

                <!-- Input field for 'about_title' -->
            <div class="form-group">
                <label for="about_title">About Title</label>
                <input type="text" name="about_title" class="form-control" value="{{$dataHome->about_title}}" maxlength="255">
            </div>

            <!-- Input field for 'about_ilustration' -->
            <div class="form-group">
                <label for="about_ilustration">About Ilustration</label>
                <input type="file" name="about_ilustration" class="form-control">
            </div>

            <!-- Input field for 'title_service' -->
            <div class="form-group">
                <label for="title_service">Title Service</label>
                <input type="text" name="title_service" class="form-control" value="{{$dataHome->title_service}}" required maxlength="255">
            </div>

            <!-- Input field for 'title_project' -->
            <div class="form-group">
                <label for="title_project">Title Project</label>
                <input type="text" name="title_project" class="form-control" value="{{$dataHome->title_project}}" required maxlength="255">
            </div>

            <!-- Input field for 'title_product' -->
            <div class="form-group">
                <label for="title_product">Title Product</label>
                <input type="text" name="title_product" class="form-control" value="{{$dataHome->title_product}}" maxlength="255">
            </div>

            <!-- Input field for 'title_partner' -->
            <div class="form-group">
                <label for="title_partner">Title Partner</label>
                <input type="text" name="title_partner" class="form-control" value="{{$dataHome->title_partner}}" maxlength="255">
            </div>

            <!-- Input field for 'title_articles' -->
            <div class="form-group">
                <label for="title_articles">Title Articles</label>
                <input type="text" name="title_articles" class="form-control" value="{{$dataHome->title_articles}}" maxlength="255">
            </div>

            <!-- Input field for 'title_certificate' -->
            <div class="form-group">
                <label for="title_certificate">Title Certificate</label>
                <input type="text" name="title_certificate" class="form-control" value="{{$dataHome->title_certificate}}" maxlength="255">
            </div>

            <!-- Submit button -->
            <button clas="fixed-bottom" type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>



































@endsection
