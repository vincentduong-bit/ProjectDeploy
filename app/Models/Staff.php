<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Staff extends Model
{
    protected $fillable = [
        'name',
        'location_id',
    ];

    /**
     * Get the location this staff member works at
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    /**
     * Get all bookings for this staff member
     */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
