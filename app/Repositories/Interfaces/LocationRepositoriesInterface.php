<?php

namespace App\Repositories\Interfaces;

interface LocationRepositoriesInterface
{
    public function getAll();

    public function find($id);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);

    public function restore($id);

    public function forceDelete($id);

    public function getOnlyTrashed();
}