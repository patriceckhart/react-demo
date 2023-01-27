<?php
namespace React\Demo\Controller\Api;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;

#[Flow\Scope("singleton")]
abstract class AbstractApiController extends ActionController
{

    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

}
