@extends('layouts.master')

@section('content')
<div class="card">
    <div class="card-header">
        <h3 class="card-title">
            <i class="ion ion-clipboard mr-1"></i>
            Add New To Do Item
        </h3>
    </div>
    <div class="card-body">
        <form action="{{ route('adminpanel.todolist.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="desc">Description</label>
                <textarea name="desc" id="desc" class="form-control" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="date_start">Start Date</label>
                <input type="date" name="date_start" id="date_start" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="date_end">End Date</label>
                <input type="date" name="date_end" id="date_end" class="form-control" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Save</button>
            </div>
        </form>
    </div>
</div>
@endsection
