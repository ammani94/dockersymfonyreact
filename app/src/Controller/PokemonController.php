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

        $pokemon = $doctrine->getRepository(Pokemons::class)->findOneBy([
            'pokemon_id' => $data['pokemon_id']
        ]);

        if ($pokemon != '') {
            return $this->json([
                'message' => 'Pokemon déjà présent'
            ]);
        }

        $pokemons = new Pokemons();

        $pokemons->setPokemonId($data['pokemon_id']);
        $pokemons->setPokemonName($data['pokemon_name']);

        $entityManager->persist($pokemons);

        $entityManager->flush();

        return $this->json([
            'message' => 'Pokemon ajouté'
        ]);
    }

     /**
     * @Route("/pokemon/captured", name="pokemon_captured")
     */
    public function pokemon_captured(Request $request,ManagerRegistry $doctrine): Response
    {
        $pokemons = $doctrine->getRepository(Pokemons::class)->findAll();

        $a_pokemons = array();

        foreach ($pokemons as $pokemon) {
            $a_pokemons[$pokemon->getId()]['name'] = $pokemon->getPokemonName();
            $a_pokemons[$pokemon->getId()]['id'] = $pokemon->getPokemonId();
        }

        return $this->json([
            'data' => $a_pokemons
        ]);
    }
}
