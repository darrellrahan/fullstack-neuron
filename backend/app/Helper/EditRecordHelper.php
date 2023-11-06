<?php
use App\Models\EditRecord;

    function addEdRec(string $section, int $user_id, int $role_id){
        EditRecord::create([
            'action' => 'Add',
            'section' => $section,
            'user_id' => $user_id,
            'role_id' => $role_id,
        ]);
        return 0;
    }
    function editEdRec(string $section, int $user_id, int $role_id){
        EditRecord::create([
            'action' => 'Edit',
            'section' => $section,
            'user_id' => $user_id,
            'role_id' => $role_id,
        ]);
        return 0;
    }
    function deleteEdRec(string $section, int $user_id, int $role_id){
        EditRecord::create([
            'action' => 'Delete',
            'section' => $section,
            'user_id' => $user_id,
            'role_id' => $role_id,
        ]);
        return 0;
    }
?>
