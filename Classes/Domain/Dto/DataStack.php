<?php
namespace React\Demo\Domain\Dto;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;

#[Flow\Scope("singleton")]
class DataStack
{

    /**
     * Data in this collection
     *
     * @var array
     */
    protected array $data = [];

    /**
     * Get the number of data items in this collection
     *
     * @return int
     */
    public function count(): int
    {
        return count($this->data);
    }

}
