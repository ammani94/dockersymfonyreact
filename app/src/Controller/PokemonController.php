<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Pokemons;
use Doctrine\Persistence\ManagerRegistry;

class PokemonController extends AbstractController
{
    /**
     * @Route("/pokemon/new", name="pokemon_new")
     */
    public function index(Request $request,ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $data = json_decode($request->getContent(), true);
        $pokemons = new Pokemons();

        $pokemons->setPokemonId($data['pokemon_id']);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($pokemons);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return $this->json([
            'message' => 'Pokemon ajouté'
        ]);
    }
}
