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

    #[ORM\Column(type: 'string', length: 255)]
    private $pokemon_name;

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

    public function getPokemonName(): ?string
    {
        return $this->pokemon_name;
    }

    public function setPokemonName(string $pokemon_name): self
    {
        $this->pokemon_name = $pokemon_name;

        return $this;
    }
}
