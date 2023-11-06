<?php

namespace App\Http\Controllers;

use App\Models\EditRecord;
use Illuminate\Http\Request;

class EditRecordController extends Controller
{
    public function showEditRecord(){
        $editRecord = EditRecord::with(['user', 'role'])->get();
        return;
    }

   public function addEditRecord(int $action, string $section, int $user_id, int $role_id){
        try {
            switch ($action) {
                case 1:
                    $action = 'Add';
                    break;
                case 2:
                    $action = 'Edit';
                    break;
                case 3:
                    $action = 'Delete';
                    break;
                default:
                    $action =  'Add';
            }
            EditRecord::create([
                'action' => $action,
                'section' => $section,
                'user_id' => $user_id,
                'role_id' => $role_id,
            ]);
            return 0;
        } catch (\Throwable $th) {
            return 1;
        }
   }
}
