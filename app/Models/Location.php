<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{

    use SoftDeletes;

    protected $fillable = [
        'name',
        'address',
    ];

    /**
     * Get all staff members at this location
     */
    public function staffs(): HasMany
    {
        return $this->hasMany(Staff::class);
    }

    /**
     * Get all bookings for this location
     */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
