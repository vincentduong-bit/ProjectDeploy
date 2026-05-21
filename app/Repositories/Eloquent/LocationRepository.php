<?php

namespace App\Repositories\Eloquent;
use App\Models\Location;
use App\Repositories\Interfaces\LocationRepositoriesInterface;

class LocationRepository implements LocationRepositoriesInterface 
{
    public function getAll($filters = []) {
        $query = Location::query();
        
        if(!empty($filters['keyword'])) {
            $keyword = $filters['keyword'];
            $query->where('name', 'like', "%".$keyword."%")->orWhere('address', 'like', "%".$keyword."%");
        }

        return $query->latest()->paginate(10);
    }

    public function find($id) {
        return Location::findOrFail($id);
    }

    public function create(array $data) {
        return Location::create($data);
    }

    public function update($id, array $data) {
        $location = $this->find($id);
        $location->update($data);
        return $location; 
    }

    public function delete($id) {
        $location = $this->find($id);
        return $location->delete();
    }

    public function restore($id) {
        $location = Location::withTrashed()->findOrFail($id);
        return $location->restore();
    }

    public function forceDelete($id) {
        $location = Location::withTrashed()->findOrFail($id);
        return $location->forceDelete();
    }

    public function getOnlyTrashed() {
        return Location::onlyTrashed()->latest()->paginate(10);
    }
}
