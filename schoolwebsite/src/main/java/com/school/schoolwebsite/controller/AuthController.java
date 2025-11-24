package com.school.schoolwebsite.controller;

import com.school.schoolwebsite.dto.request.LoginRequest;
import com.school.schoolwebsite.dto.response.LoginResponse;
import com.school.schoolwebsite.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/login")
  public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
    LoginResponse response = authService.login(request);
    return ResponseEntity.ok(response);
  }

  // Temporary endpoint to generate password hash
  @GetMapping("/generate-hash")
  public ResponseEntity<String> generateHash(@RequestParam String password) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    String hash = encoder.encode(password);
    return ResponseEntity.ok("Password: " + password + "\nBCrypt Hash: " + hash);
  }
}
