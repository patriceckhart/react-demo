<?php
namespace React\Demo\Controller;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Fusion\View\FusionView;

#[Flow\Scope("singleton")]
final class StageController extends ActionController
{

    /**
     * @var string
     */
    protected $defaultViewObjectName = FusionView::class;

    public function indexAction(): void
    {

    }

    public function testAction(array $name): void
    {
        $args = $this->request->getArguments();
        \Neos\Flow\var_dump('foo');
        \Neos\Flow\var_dump($args);
        \Neos\Flow\var_dump($name);
    }

}
