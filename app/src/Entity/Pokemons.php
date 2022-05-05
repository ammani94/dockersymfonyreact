<?php

namespace App\Entity;

use App\Repository\PokemonsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PokemonsRepository::class)]
class Pokemons
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $pokemon_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPokemonId(): ?int
    {
        return $this->pokemon_id;
    }

    public function setPokemonId(int $pokemon_id): self
    {
        $this->pokemon_id = $pokemon_id;

        return $this;
    }
}
