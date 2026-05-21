<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Booking extends Model
{
    protected $fillable = [
        'user_id',
        'location_id',
        'staff_id',
        'time_slot_id',
        'status',
        'note',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user who made this booking
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the location for this booking
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    /**
     * Get the staff member assigned to this booking
     */
    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class);
    }

    /**
     * Get the time slot for this booking
     */
    public function timeSlot(): BelongsTo
    {
        return $this->belongsTo(TimeSlot::class);
    }

    /**
     * Get all booking items for this booking
     */
    public function bookingItems(): HasMany
    {
        return $this->hasMany(BookingItem::class);
    }

    /**
     * Get all payments for this booking
     */
    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }
}
