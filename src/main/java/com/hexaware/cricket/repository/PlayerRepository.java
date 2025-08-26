package com.hexaware.cricket.repository;
import java.util.List;	
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.cricket.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
    List<Player> findByPlayerNameContainingIgnoreCase(String playerName);

}
