@extends('layouts.master')

@section('content')
<div class="card">
    <div class="card-header">
        <h3 class="card-title">
            <i class="ion ion-clipboard mr-1"></i>
            Edit To Do Item
        </h3>
    </div>
    <div class="card-body">
        <form action="{{ route('adminpanel.todolist.update', $todo->id) }}" method="POST">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" class="form-control" value="{{ $todo->title }}" required>
            </div>
            <div class="form-group">
                <label for="desc">Description</label>
                <textarea name="desc" id="desc" class="form-control" rows="4" required>{{ $todo->desc }}</textarea>
            </div>
            <div class="form-group">
                <label for="date_start">Start Date</label>
                <input type="date" name="date_start" id="date_start" class="form-control" value="{{ $todo->date_start }}" required>
            </div>
            <div class="form-group">
                <label for="date_end">End Date</label>
                <input type="date" name="date_end" id="date_end" class="form-control" value="{{ $todo->date_end }}" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Save</button>
                <form action="{{ route('adminpanel.todolist.destroy', ['todolist' => $todo->id]) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <!-- Tambahkan tombol "Delete" di sini -->
                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>

            </div>
        </form>
    </div>
</div>
@endsection
