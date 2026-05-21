<?php

namespace App\Services;

use App\Repositories\Interfaces\LocationRepositoriesInterface;;

class LocationService
{

    protected $locationRepository;

    public function __construct(LocationRepositoriesInterface $locationRepository)
    {

        $this->locationRepository = $locationRepository;
    }

    public function getAll($filters = [])
    {

        return $this->locationRepository->getAll($filters);
    }


    public function getDetail($id)
    {

        return $this->locationRepository->find($id);
    }


    public function create(array $data)
    {

        $data['name'] = $data['name'] ?? null;
        $data['address'] = $data['address'] ?? null;

        return $this->locationRepository->create($data);
    }

    public function update($id, array $data)
    {

        return $this->locationRepository->update($id, $data);
    }


    public function delete($id)
    {
        return $this->locationRepository->delete($id);
    }

    public function restore($id)
    {
        return $this->locationRepository->restore($id);
    }


    public function forceDelete($id)
    {
        return $this->locationRepository->forceDelete($id);
    }
}
