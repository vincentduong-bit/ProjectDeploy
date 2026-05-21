<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\LocationService;
use App\Http\Requests\LocationRequest;

class LocationController extends Controller
{
    
    protected $locationService;

    public function __construct(LocationService $locationService)
    {

        $this->locationService = $locationService;
    
        }

    public function index(Request $request) 
    {

        return response()->json(
            $this->locationService->getAll($request->all()),
            200
        );

    }

    public function show($id) 

    {

        return response()->json(
            $this->locationService->getDetail($id),
            200
        );

    }

    public function store(LocationRequest $request) 
    {

        $location = $this->locationService->create($request->validated());

        return response()->json($location, 201);

    }


    public function update(Request $request, $id)
    {

        $location = $this->locationService->update($id, $request->all());

        return response()->json($location, 200);

    }

    public function destroy($id) 
    {

        $this->locationService->delete($id);

        return response()->json(['message' => 'Location deleted successfully'], 200);

    }

    public function restore($id)
    {
        $this->locationService->restore($id);

        return response()->json(['message' => 'Location restored successfully'], 200);
    }

    public function forceDelete($id)
    {
        $this->locationService->forceDelete($id);

        return response()->json(['message' => 'Location permanently deleted successfully'], 200);
    }   

}
