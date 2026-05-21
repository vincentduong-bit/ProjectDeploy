<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BookingItem extends Model
{
    protected $fillable = [
        'booking_id',
        'service_id',
        'price',
    ];

    protected $casts = [
        'price' => 'decimal:2',
    ];

    /**
     * Get the booking this item belongs to
     */
    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class);
    }

    /**
     * Get the service for this booking item
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
