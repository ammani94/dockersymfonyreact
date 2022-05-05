<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class BrandNewController extends AbstractController
{
    /**
     * @Route("/brand/new", name="app_brand_new")
     */
    public function index(Request $request): Response
    {
        //return $request->getContent();
        // return $this->json([
        //     'message' => 'Welcome to your new controller!',
        //     'path' => 'src/Controller/BrandNewController.php',
        // ]);
        return $this->json($request->getContent());
    }
}
