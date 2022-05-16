<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\ToDoList;
use Doctrine\Persistence\ManagerRegistry;

class ToDoListController extends AbstractController
{
    // #[Route('/to/do/list', name: 'app_to_do_list')]
    // public function index(): Response
    // {
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/ToDoListController.php',
    //     ]);
    // }

    /**
     * @Route("/to/do/listnew", name="to_do_new")
     */
    public function index(Request $request,ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $o_todos = $doctrine->getRepository(ToDoList::class)->findAll();

        $count = 1;

        foreach ($o_todos as $key => $value) {
            $count++;
        }

        return $this->json([
            'count' => $count
        ]);
    }



}
