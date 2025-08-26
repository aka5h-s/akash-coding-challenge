package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.DuplicateResourceException;
import com.hexaware.cricket.exception.PlayerNotFoundException;
import com.hexaware.cricket.repository.PlayerRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PlayerServiceImpl implements IPlayerService {

    private final PlayerRepository repo;

    public PlayerServiceImpl(PlayerRepository repo) {
        this.repo = repo;
    }

    @Override
    public Player create(PlayerDto dto) {
        if (repo.existsById(dto.getPlayerId())) {
            throw new DuplicateResourceException("Player with id " + dto.getPlayerId() + " already exists");
        }
        Player p = new Player();
        p.setPlayerId(dto.getPlayerId());
        p.setPlayerName(dto.getPlayerName());
        p.setJerseyNumber(dto.getJerseyNumber());
        p.setRole(dto.getRole());
        p.setTotalMatches(dto.getTotalMatches());
        p.setTeamName(dto.getTeamName());
        p.setCountryOrState(dto.getCountryOrState());
        p.setDescription(dto.getDescription());
        return repo.save(p);
    }

    @Override
    public Player getById(Integer playerId) {
        return repo.findById(playerId)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id " + playerId));
    }

    @Override
    public List<Player> getAll() {
        return repo.findAll();
    }

    @Override
    public Player update(Integer playerId, PlayerDto dto) {
        Player p = repo.findById(playerId)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id " + playerId));

        p.setPlayerName(dto.getPlayerName());
        p.setJerseyNumber(dto.getJerseyNumber());
        p.setRole(dto.getRole());
        p.setTotalMatches(dto.getTotalMatches());
        p.setTeamName(dto.getTeamName());
        p.setCountryOrState(dto.getCountryOrState());
        p.setDescription(dto.getDescription());

        return repo.save(p);
    }

    @Override
    public void delete(Integer playerId) {
        if (!repo.existsById(playerId)) {
            throw new PlayerNotFoundException("Player not found with id " + playerId);
        }
        repo.deleteById(playerId);
    }
    
    @Override
    public List<PlayerDto> searchPlayersByName(String playerName) {
        return repo.findByPlayerNameContainingIgnoreCase(playerName)
                .stream()
                .map(player -> new PlayerDto(
                        player.getPlayerId(),
                        player.getPlayerName(),
                        player.getJerseyNumber(),
                        player.getRole(),
                        player.getTotalMatches(),
                        player.getTeamName(),
                        player.getCountryOrState(),
                        player.getDescription()
                ))
                .toList();
    }
}
