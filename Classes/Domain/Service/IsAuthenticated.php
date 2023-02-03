<?php
namespace React\Demo\Domain\Service;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;

#[Flow\Scope("singleton")]
class IsAuthenticated
{

    public function execute(): void
    {
        \Neos\Flow\var_dump('foo');
        exit;
    }

}
