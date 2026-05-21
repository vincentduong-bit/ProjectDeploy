<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['name', 'description', 'duration', 'price'];

    public function bookingItems() 
    {
        return $this->hasMany(BookingItem::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }

}
