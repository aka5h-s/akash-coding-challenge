package com.hexaware.cricket.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PlayerNotFoundException.class)
    @ResponseStatus(reason = "Player not found", code = HttpStatus.NOT_FOUND)
    public void handlePlayerNotFound() {
        
    }

    @ExceptionHandler(DuplicateResourceException.class)
    @ResponseStatus(reason = "Duplicate player ID", code = HttpStatus.BAD_REQUEST)
    public void handleDuplicatePlayer() {
        
    }
    
    
}	
