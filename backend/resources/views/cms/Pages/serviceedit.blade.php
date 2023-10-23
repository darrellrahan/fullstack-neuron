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
        <h3 class="card-title">Service Page</h3>
      </div>
      <div class="card-body">
        <form method="POST" action="{{ route('page-settings.update', ['id'=>1]) }}">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="hero_title">Hero Title</label>
                <input type="text" id="hero_title" name="hero_title" class="form-control" value="{{ $pageSetting->hero_title }}">
            </div>
            <div class="form-group">
                <label for="hero_desc">Hero Description</label>
                <textarea id="hero_desc" name="hero_desc" class="form-control">{{ $pageSetting->hero_desc }}</textarea>
            </div>

            <div class="form-group">
                <label for="service_title">Service Title</label>
                <input type="text" id="service_title" name="service_title" class="form-control" value="{{ $pageSetting->service_title }}">
            </div>

            <div class="form-group">
                <label for="service_subtitle">Service Subtitle</label>
                <input type="text" id="service_subtitle" name="service_subtitle" class="form-control" value="{{ $pageSetting->service_subtitle }}">
            </div>

            <div class="form-group">
                <label for="technology_title">Technology Title</label>
                <input type="text" id="technology_title" name="technology_title" class="form-control" value="{{ $pageSetting->technology_title }}">
            </div>

            <div class="form-group">
                <label for="technology_desc">Technology Description</label>
                <textarea id="technology_desc" name="technology_desc" class="form-control">{{ $pageSetting->technology_desc }}</textarea>
            </div>

            <div class="form-group">
                <label for="methodology_title">Methodology Title</label>
                <input type="text" id="methodology_title" name="methodology_title" class="form-control" value="{{ $pageSetting->methodology_title }}">
            </div>

            <div class="form-group">
                <label for="methodology_subtitle">Methodology Subtitle</label>
                <input type="text" id="methodology_subtitle" name="methodology_subtitle" class="form-control" value="{{ $pageSetting->methodology_subtitle }}">
            </div>

            <div class="form-group">
                <label for="cta_contact_id">CTA Contact ID</label>
                <input type="text" id="cta_contact_id" name="cta_contact_id" class="form-control" value="{{ $pageSetting->cta_contact_id }}">
            </div>

            <!-- Tambahkan elemen form untuk kolom lainnya seperti yang Anda inginkan -->

            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
@endsection
