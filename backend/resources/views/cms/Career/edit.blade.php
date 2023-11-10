@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Edit Career</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('career') }}">Career</a></li>
                    <li class="breadcrumb-item active">Edit Career</li>
                </ol>
            </div>
        </div>
    </div>

    <div id="success-message" class="mt-3">
        @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
        @endif
    </div>

    <style>
        .qualification-field {
            display: none;
        }
    </style>

    <div class="container">
        <div class="mt-3">
            <form action="" method="" id="careerEditForm">

                <div class="form-group">
                    <label for="positionName">Position Name</label>
                    <input type="text" class="form-control" id="positionName" name="name_position" value="{{ $career->name_position }}" required>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <select class="form-control" id="location" name="location">
                        <option value="Bandung">Bandung</option>
                        <option value="Jakarta">Jakarta</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" name="desc" rows="5" required>{{ $career->desc }}</textarea>
                </div>

                <div class="form-group">
                    <label for="responsibilities">Responsibilities</label>
                    <textarea class="form-control" id="responsibilities" name="responsibilities" rows="5" required>{{ $career->responsibilities }}</textarea>
                </div>


                <div class="form-group">
                    <div class="card-body">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="text-title">Skill</h5>
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addSkillModal">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul>
                        @foreach ($career->skillRequirements as $skill)
                        <li class="pb-3">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    {{ $skill->name }}
                                </div>
                                <div class="d-flex">
                                    <a role="button" type="button" class="far fa-edit btn-sm btn-outline-primary" data-toggle="modal" data-target="#editSkillModal{{ $skill->id }}"></a>
                                    <a role="button" type="submit" class="far fa-trash-alt btn-sm btn-outline-danger" data-toggle="modal" data-target="#DeleteSkillModal{{ $skill->id }}"></a>
                                </div>
                            </div>
                        </li>


                        <!-- Modal editskill -->
                        <div class="modal fade" id="editSkillModal{{ $skill->id }}" tabindex="-1" aria-labelledby="editSkillModalLabel{{ $skill->id }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="editSkillModalLabel">Edit Skill</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form method="POST" action="{{ route('edit-skill', ['career_id' => $career->id, 'skill_id' => $skill->id]) }}">
                                        @csrf
                                        @method('PUT')
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label for="editSkillName">Skill Name</label>
                                                <input type="text" class="form-control" id="editSkillName" name="name" value="{{ $skill->name }}">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- end Modal editskill -->

                        <!-- Modal delete skill -->
                        <div class="modal fade" id="DeleteSkillModal{{ $skill->id }}" tabindex="-1" aria-labelledby="confirmDeleteSkillModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="confirmDeleteSkillModalLabel">Confirm Delete</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Are you sure you want to delete <strong>{{ $skill->name }}</strong>?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                        <form method="POST" action="{{ route('delete-skill', ['career_id' => $career->id, 'skill_id' => $skill->id]) }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Yes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  end Modal delete skill -->
                        @endforeach
                    </ul>
                </div>

                <div class="form-group">
                    <div class="card-body">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="text-title">Plus Value</h5>
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addPlusValueModal">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul>
                        @foreach ($career->jobPlusValues as $plusValue)
                        <li class="pb-3">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    {{ $plusValue->name }}
                                </div>
                                <div class="d-flex">
                                    <a role="button" type="button" class="far fa-edit btn-sm btn-outline-primary" data-toggle="modal" data-target="#editPlusValueModal{{ $plusValue->id }}"></a>
                                    <a role="button" type="submit" class="far fa-trash-alt btn-sm btn-outline-danger" data-toggle="modal" data-target="#confirmDeleteModal{{$plusValue->id}}"></a>
                                </div>
                            </div>
                        </li>
                        <!-- Modal edit plus value -->
                        <div class="modal fade" id="editPlusValueModal{{ $plusValue->id }}" tabindex="-1" aria-labelledby="editPlusValueModalLabel{{ $plusValue->id }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="editPlusValueModalLabel">Edit Plus Value</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            l<span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form method="POST" action="{{ route('edit-plus-value', ['career_id' => $career->id, 'plusvalue_id' => $plusValue->id]) }}">
                                        @csrf
                                        @method('PUT')
                                        <div class="modal-body">
                                            <div class="form-group">
                                                <label for "editPlusValueName">Name</label>
                                                <input type="text" class="form-control" id="editPlusValueName" name="name" value="{{ $plusValue->name }}">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- Akhir modal edit plus value -->

                        <!-- Modal delete plus value Hapus -->
                        <div class="modal fade" id="confirmDeleteModal{{ $plusValue->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Are you sure you want to delete <strong>{{ $plusValue->name }}</strong>?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                        <form method="POST" action="{{ route('delete-plus-value', ['career_id' => $career->id, 'plusvalue_id' => $plusValue->id]) }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger">Yes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal delete plus End -->
                        @endforeach

                        <!-- Modal untuk menambahkan plus value -->
                        <div class="modal fade" id="addPlusValueModal" tabindex="-1" aria-labelledby="addPlusValueModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="addPlusValueModalLabel">Add Plus Value</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">
                                        <!-- Form untuk menambahkan skill -->
                                        <form action="{{ route('career.add-plusValue', $career->id) }}" method="post">
                                            {{ csrf_field() }}
                                            <div class="form-group">
                                                <label for="plusvalue_name">Plus Value Name</label>
                                                <input type="text" class="form-control" id="plusvalue_name" name="plusvalue_name" required>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Add Plus Value</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Modal untuk menambahkan plus value -->
                    </div>

                    <div class="form-group">
                        <label for="link">Link</label>
                        <input type="text" class="form-control" id="link" name="link" value="{{ $career->link }}">
                    </div>
                </form>

                <form id="jobQualification" action="">

                    <div class="form-group">
                        <label for="gender">Gender</label>
                    <select class="form-control" id="gender" name="gender" required>
                        <option value="Man" {{ $career->jobQualification->gender == 'Man' ? 'selected' : '' }}>Man</option>
                        <option value="Female" {{ $career->jobQualification->gender == 'Female' ? 'selected' : '' }}>Female</option>
                        <option value="Man/Female" {{ $career->jobQualification->gender == 'Man/Female' ? 'selected' : '' }}>Man/Female</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="domicile">Domicile</label>
                    <input type="text" class="form-control" id="domicile" name="domicile" value="{{ $career->jobQualification->domicile }}" required>
                </div>

                <div class="form-group">
                    <label for="education">Education</label>
                    <input type="text" class="form-control" id="education" name="education" value="{{ $career->jobQualification->education }}" required>
                </div>

                <div class="form-group">
                    <label for="major">Major</label>
                    <input type="text" class="form-control" id="major" name="major" value="{{ $career->jobQualification->major }}" required>
                </div>

                <div class="form-group">
                    <label for="other">Other Qualifications</label>
                    <input type="text" class="form-control" id="other" name="other" value="{{ $career->jobQualification->other }}" required>
                </div>
        </div>
    </div>
</div>
</form>
<div class="modal-footer">
    <button class="btn btn-primary"
    data-toggle="modal" data-target="#updateCareerModal">Update</button>
    <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
</div>





<!-- Modal untuk menambahkan skill -->
<div class="modal fade" id="addSkillModal" tabindex="-1" aria-labelledby="addSkillModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addSkillModalLabel">Add Skill</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Form untuk menambahkan skill -->
                <form action="{{ route('career.add-skill', $career->id) }}" method="post">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label for="skill_name">Skill Name</label>
                        <input type="text" class="form-control" id="skill_name" name="skill_name" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Skill</button>
                </form>
            </div>
        </div>
    </div>
</div>

</div>

<!-- Modal untuk mMengupadate career -->
<div class="modal fade" id="updateCareerModal" tabindex="-1" aria-labelledby="updateCareerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="updateCareerModalLabel">Update Career</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Form untuk menambahkan skill -->
            <form>
                {{-- action="{{ route('career-update', $career->id) }}"
                method="post"> --}}
                {{ csrf_field() }}
                {{-- {{ method_field('PUT') }} --}}
                <div class="form-group">
                    <label for="career_name">Are you sure the data is updated?</label>
                </div>
            </form>
                <button class="btn btn-primary" id="careerUpdateButton">Update</button>
            </div>
        </div>
    </div>
</div>


<!-- Modal untuk menambahkan skill -->
<div class="modal fade" id="addSkillModal" tabindex="-1" aria-labelledby="addSkillModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addSkillModalLabel">Add Skill</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Form untuk menambahkan skill -->
                <form action="{{ route('career.add-skill', $career->id) }}" method="post">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label for="skill_name">Skill Name</label>
                        <input type="text" class="form-control" id="skill_name" name="skill_name" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Skill</button>
                </form>
            </div>
        </div>
    </div>
</div>

</div>
</div>
</div>

<script>
$(document).ready(function() {
    $('#careerUpdateButton').on('click', function () {
        var careerData = $('#careerEditForm').serializeArray();
        var careerQualification = $('#jobQualification').serializeArray();
        var data = {career: careerData, qualification: careerQualification};
        console.log(data)
        $.ajax({
            type: "PUT", // Ganti menjadi POST
            url: "{{ route('career-update', $career->id) }}",
            data: careerData,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (response) {
                return 0;
            }
        });
    });
});
</script>

@endsection
