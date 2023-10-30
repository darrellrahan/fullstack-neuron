@extends('layouts.master')

@section('content')
<div class="card">
    <div class="card-header">
        <h3 class="card-title">
            <i class="ion ion-clipboard mr-1"></i>
            To Do List
        </h3>
    </div>
    <div class="card-body">
        <ul class="todo-list" data-widget="todo-list">
            @if(isset($todos))
            @foreach($todos as $todo)
            <li>
                <!-- Checkbox and Todo text -->
                <div class="todo-item">

                    <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </span>

                    <div class="icheck-primary d-inline ml-2">
                        <input type="checkbox" value="{{ $todo->id }}" name="todo{{ $todo->id }}" id="todoCheck{{ $todo->id }}">
                        <label for="todoCheck{{ $todo->id }}"></label>
                    </div>
                    <p class="text">
                        {{ $todo->title }}
                    </p>
                    <small class="badge badge-danger"><i class="far fa-clock"></i> {{ $todo->date_start }}</small>
                    <i class="fas fa-angle-left right toggle-desc"></i>
                    <!-- General tools such as edit or delete -->
                </div>
                <ul class="nav nav-treeview desc-list">
                    <li class="nav-item">
                        <span class="text" style="opacity: 0.6;" >{{ $todo->desc }}</span>
                    </li>
                </ul>
                <!-- Emphasis label -->

                <div class="tools">
                    <a href="{{ route('adminpanel.todolist.edit', ['todolist' => $todo->id]) }}"><i class="fas fa-edit"></i></a>
                    <i class="fas fa-trash-o"></i>
                </div>
            </li>
            @endforeach
            @endif
        </ul>
        <div class="card-footer clearfix">
            <a href="{{ route('adminpanel.todolist.create') }}" name="adminpanel.todolist.create" class="btn btn-primary float-right"><i class="fas fa-plus"></i> Add item</a>
        </div>
    </div>
</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $('.toggle-desc').click(function() {
            $(this).parent().next('.desc-list').slideToggle();
        });
    });
</script>
    <!-- /
@yield('todolist')
@endsection
