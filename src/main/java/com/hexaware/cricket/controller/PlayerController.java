package com.hexaware.cricket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.service.IPlayerService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/players")
public class PlayerController {

    @Autowired
    IPlayerService service;

    @PostMapping("/add")
    public Player addPlayer(@Valid @RequestBody PlayerDto dto) {
        return service.create(dto);
    }

        @PutMapping("/update/{id}")
    public Player updatePlayer(@PathVariable Integer id, @Valid @RequestBody PlayerDto dto) {
        return service.update(id, dto);
    }

    @GetMapping("/getbyid/{id}")
    public Player getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    @GetMapping("/getall")
    public List<Player> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/deletebyid/{id}")
    public String deleteById(@PathVariable Integer id) {
        service.delete(id);
        return "Player with ID " + id + " deleted successfully";
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<PlayerDto>> searchPlayers(@RequestParam String name) {
        List<PlayerDto> players = service.searchPlayersByName(name);
        return ResponseEntity.ok(players);
    }

}
