<?php

namespace App\Entity;

use App\Repository\ToDoListContentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ToDoListContentRepository::class)]
class ToDoListContent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $id_todolist;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdTodolist(): ?int
    {
        return $this->id_todolist;
    }

    public function setIdTodolist(int $id_todolist): self
    {
        $this->id_todolist = $id_todolist;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
}
