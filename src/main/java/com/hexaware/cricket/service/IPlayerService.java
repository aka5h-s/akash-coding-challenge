package com.hexaware.cricket.service;

import java.util.List;

import com.hexaware.cricket.dto.PlayerDto;
import com.hexaware.cricket.entity.Player;

public interface IPlayerService {

    Player create(PlayerDto dto);
    Player getById(Integer playerId);
    List<Player> getAll();
    Player update(Integer playerId, PlayerDto dto);
    void delete(Integer playerId);
    List<PlayerDto> searchPlayersByName(String playerName);
}
