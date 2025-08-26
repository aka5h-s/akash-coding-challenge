package com.hexaware.cricket.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class PlayerDto {

    @NotNull()
    @Min(value = 1)
    public Integer playerId;

    @NotBlank()
    public String playerName;

    @NotNull()
    @Min(value = 0)
    public Integer jerseyNumber;

    @NotBlank()
    @Pattern(
            regexp = "Batsman|Bowler|Keeper|AllRounder",
            message = "role must be one of: Batsman, Bowler, Keeper, AllRounder"
        )
    public String role;

    @NotNull()
    @Min(value = 0)
    public Integer totalMatches;

    @NotBlank()
    public String teamName;

    @NotBlank()
    public String countryOrState;

    @Size(max = 2000)
    public String description;

    public PlayerDto() { }

    public PlayerDto(Integer playerId, String playerName, Integer jerseyNumber, String role,
                     Integer totalMatches, String teamName, String countryOrState, String description) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.role = role;
        this.totalMatches = totalMatches;
        this.teamName = teamName;
        this.countryOrState = countryOrState;
        this.description = description;
    }

	public Integer getPlayerId() {
		return playerId;
	}

	public void setPlayerId(Integer playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public Integer getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(Integer jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Integer getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(Integer totalMatches) {
		this.totalMatches = totalMatches;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getCountryOrState() {
		return countryOrState;
	}

	public void setCountryOrState(String countryOrState) {
		this.countryOrState = countryOrState;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
    
    
    
    
}
