<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TechnologyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'Category' => $this->technologyCategory->name,
            'Technologies' => [
                [
                    'Name' => $this->name,
                    'Icon' => $this->icon,
                ],
            ],
        ];
    }
}
