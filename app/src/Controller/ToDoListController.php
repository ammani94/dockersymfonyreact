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

        $data = array();

        foreach ($o_todos as $key => $value) {
            $data[]['name'] = $value->getName();
        }

        return $this->json([
            'data' => $data
        ]);
    }

    /**
     * @Route("/to/do/add", name="to_do_add")
     */
    public function add(Request $request,ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);

        $o_todos = $doctrine->getRepository(ToDoList::class)->findAll();

        foreach ($o_todos as $key => $value) {
            $entityManager->remove($value);
            $entityManager->flush();
        }

        foreach ($data as $key => $item) {
            foreach ($item as $element) {
                $todo_list = new ToDoList();
                $todo_list->setName($element['name']);
                $entityManager->persist($todo_list);
                $entityManager->flush();
            }
        }

        return $this->json([
            'message' => 'Liste mise à jour'
        ]);


    }



}
