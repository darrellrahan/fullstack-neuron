<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'role_name',
        'desc'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
    
    public function login_records()
    {
        return $this->hasMany(LoginRecord::class);
    }

    public function edit_records()
    {
        return $this->hasMany(EditRecord::class);
    }
}
