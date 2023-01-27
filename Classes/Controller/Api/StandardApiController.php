<?php
namespace React\Demo\Controller\Api;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;

#[Flow\Scope("singleton")]
final class StandardApiController extends AbstractApiController
{
    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

    public function indexAction(): void
    {
        $this->view->assign('value', [0 => 'foo', 1 => 'bar', 3 => 'bars']);
    }

}
