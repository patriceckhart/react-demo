<?php
namespace React\Demo\Controller\Api;

/*
 * This file is part of the React.Demo package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use React\Demo\Domain\Dto\DataStack;
use React\Demo\Domain\Model\Test;
use Neos\Flow\Property\TypeConverter\PersistentObjectConverter;
use React\Demo\Domain\Repository\TestRepository;

#[Flow\Scope("singleton")]
final class TestController extends AbstractApiController
{
    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

    #[Flow\Inject]
    protected TestRepository $testRepository;

//    initializeAction which later belongs in an abstract controller
    protected function initializeAction() {
        $arguments = $this->request->getArguments();
        foreach ($arguments as $argumentIterator => $argument) {
            $propertyMappingConfiguration = $this->arguments[$argumentIterator]->getPropertyMappingConfiguration();
            $propertyMappingConfiguration->setTypeConverterOption(PersistentObjectConverter::class,
                PersistentObjectConverter::CONFIGURATION_CREATION_ALLOWED, true );
            $propertyMappingConfiguration->setTypeConverterOption(PersistentObjectConverter::class,
                PersistentObjectConverter::CONFIGURATION_MODIFICATION_ALLOWED, true );
            $propertyMappingConfiguration->allowAllProperties()->skipUnknownProperties();
        }
    }

    public function getFirstAction(): void
    {
        $firstTest = $this->testRepository->findAll()->getFirst();
        $this->view->assign('value', ['response' => 'success', 'result' => $firstTest]);
    }

    public function createAction(Test $test): void
    {
        $this->testRepository->add($test);
        $this->view->assign('value', ['response' => 'success']);
    }

    public function updateAction(Test $test): void
    {
        $this->testRepository->update($test);
        $this->view->assign('value', ['response' => 'success']);
    }

}
